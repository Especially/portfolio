import React, { useRef, useCallback, useState, useEffect } from 'react'
import { useDrag } from 'react-use-gesture'
import { useSprings, a } from 'react-spring'
import debounce from 'lodash.debounce'
import { useMeasure } from '../Helpers'

const styles = {
  container: { display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', height: '100%', width: '100%' },
  item: { position: 'absolute', height: '100%', willChange: 'transform' },
  dotcontainer: {
    padding: '0.7rem 1rem',
    color: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  dot: {
    borderRadius: '99px',
    background: '#fff',
    width: '5px',
    height: '5px',
    margin: '.3rem',
    color: '#000'
  },
  buttonsContainer: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: 0,
    display: 'flex',
    alignItems: 'center'
  },
  prevButton: {
    position: 'absolute',
    background: 'none',
    color: '#fff',
    border: 'none',
    marginLeft: '-30px'
  },
  nextButton: {
    marginRight: '-30px',
    position: 'absolute',
    background: 'none',
    color: '#fff',
    border: 'none',
    marginLeft: '-30px',
    right: 0
  }
}

export default function SliderContainer(props) {
  const [bind, { width: elWidth }] = useMeasure();

  return (
    <>
      <div {...bind} style={{ height: '100%', position: 'relative' }} className='carousel__holder'>
        {elWidth !== 0 ? (
          <Slider {...props} itemWidth={elWidth}>
            {props.children}
          </Slider>
        ) : (
          'null'
        )}
      </div>
    </>
  )
}

/**
 * Calculates a spring-physics driven infinite slider
 *
 * @param {Array} items - display items
 * @param {Function} children - render child
 * @param {number} width - fixed item with
 * @param {number} visible - number of items that must be visible on screen
 * @param {object} style - container styles
 * @param {boolean} showButtons - shows buttons
 * @param {boolean} showCounter - shows counter
 */
function Slider({ items, itemWidth = 'full', visible = items.length - 2, style, children, showCounter = false, activeHandler, current }) {
  if (items.length <= 2)
    console.warn("The slider doesn't handle two or less items very well, please use it with an array of at least 3 items in length")
  const windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
  let width = itemWidth === 'full' ? windowWidth : Math.ceil(itemWidth)
  const idx = useCallback((x, l = items.length) => (x < 0 ? x + l : x) % l, [items])
  const getPos = useCallback((i, firstVis, firstVisIdx) => idx(i - firstVis + firstVisIdx), [idx])
  // Important only if specifyng width, centers the element in the slider
  const offset = 0
  const [springs, set] = useSprings(items.length, (i) => ({ x: (i < items.length - 1 ? i : -1) * width + offset }))
  const prev = useRef([0, 1])
  const index = useRef(0)
  const [active, setActive] = useState(current+1);

  useEffect(() => {
    activeHandler(active - 1);
  }, [active]);

  useEffect(() => {
    setActive(current + 1);
    // Update from propagated current state using debounce
    debounceTransition(current - index.current);
  }, [current])
  
  useEffect(() => {
    // Re-run spring on resize (change in item width)
    runSprings(0, index.current, true, -0, () => {}, -0)

  }, [itemWidth])


  const runSprings = useCallback(
    (y, vy, down, xDir, cancel, xMove) => {
      // This decides if we move over to the next slide or back to the initial
      if (!down) {
        index.current += ((-xMove + (width + xMove)) / width) * (xDir > 0 ? -1 : 1)
        // cancel()
      }
      if (index.current + 1 > items.length) {
        setActive((index.current % items.length) + 1)
      } else if (index.current < 0) {
        setActive(items.length + ((index.current + 1) % items.length))
      } else {
        setActive(index.current + 1)
      }
      // The actual scrolling value
      const finalY = index.current * width
      // Defines currently visible slides
      const firstVis = idx(Math.floor(finalY / width) % items.length)
      const firstVisIdx = vy < 0 ? items.length - visible - 1 : 1
      set((i) => {
        const position = getPos(i, firstVis, firstVisIdx)
        const prevPosition = getPos(i, prev.current[0], prev.current[1])
        let rank = firstVis - (finalY < 0 ? items.length : 0) + position - firstVisIdx + (finalY < 0 && firstVis === 0 ? items.length : 0)
        return {
          // x is the position of each of our slides
          x: (-finalY % (width * items.length)) + width * rank + (down ? xMove : 0) + offset,
          // this defines if the movement is immediate
          // So when an item is moved from one end to the other we don't
          // see it moving
          immediate: vy < 0 ? prevPosition > position : prevPosition < position
        }
      })
      prev.current = [firstVis, firstVisIdx]
    },
    [idx, getPos, width, visible, set, items.length]
  )

  const bind = useDrag(({ offset: [x], vxvy: [vx], down, direction: [xDir], cancel, movement: [xMove] }) => {
    vx && runSprings(-x, -vx, down, xDir, cancel, xMove)
  })

  const buttons = (next) => {
    index.current += next
    runSprings(0, next, true, -0, () => {}, -0)
  }

  const debounceTransition = debounce(buttons, 10)

  return (
    <>
      <div {...bind()} style={{ ...style, ...styles.container }} className='carousel__content'>
        {springs.map(({ x, vel }, i) => (
          <a.div 
            key={i} 
            style={{ ...styles.item, width, transform: x.to(x => `translate3d(${x}px, 0px, 0px)`) }} 
            children={children(items[i], i)}
            className='carousel__item'
           />
        ))}
      </div>
    </>
  )
}
