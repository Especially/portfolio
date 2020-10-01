import React, {useState, useEffect, createRef} from 'react';
import StackItem from '../StackItem/StackItem';

// Accordion style
const ProjectItem = ({clickHandler, data, active}) => { // Deconstruct once we know all properties that we'll be using
    const [activeState, setActiveState] = useState(active);
    const accordionContent = createRef();
// Pass down active accordion item
// control active accordion item in Project component
useEffect(() => {
    setActiveState(active);
    handleHeight(active);
}, [active])

    const handleHeight = (isActive) => {
        const el = accordionContent.current;
        const duration = 1800;

        el.setAttribute('style','display:block');

        let elHeight = el.offsetHeight;
        // Animation speed:
        if (!isActive) {
            console.log(isActive, elHeight);
            el.setAttribute('style','display:none;height:0');
        } else {
            let count = 0;
            let increments = (elHeight / duration);         // e.g., 166 px into / 8 times/changes = 20.75;
            for(var i = 0; i <= 1800; i++) {
                    el.setAttribute('style',`height: ${Math.ceil(count)}px`);
                    count += increments;
                    console.log(count);
            }
        }
    };

// Handling stack items
    let stack = data.stack.sort().map(item => <StackItem type={item} />);
// Stack image
// Stack text

    return (
        <section className={`accordion__container ${(activeState) ? 'accordion__container--active' : ''}`}>
            <div className="accordion__head" onClick={() => clickHandler(data.id)}>
                <h2>{data.title}</h2>
                <span className={`accordion__icon ${(activeState) ? 'accordion__icon--active' : ''}`}></span>
            </div>
            <div className="accordion__content" ref={accordionContent}>
                <p>{data.desc}</p>
                
                <span>{data.duration}</span>
                <div className="stack">
                    {stack}
                </div>
            </div>
        </section>
    );
}

export default ProjectItem;