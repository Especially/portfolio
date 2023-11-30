import { useState, useRef, useEffect } from 'react'
import ResizeObserver from 'resize-observer-polyfill'

export function useMeasure() {
  const ref = useRef()
  const [bounds, set] = useState({ left: 0, top: 0, width: 0, height: 0 })
  const [ro] = useState(() => new ResizeObserver(([entry]) => set(entry.contentRect)))
  useEffect(() => {
    if (ref.current) ro.observe(ref.current)
    return () => ro.disconnect()
  }, [])
  return [{ ref }, bounds]
}

export const useDarkMode = () => {
    const [theme, setTheme] = useState('light');

    const setMode = mode => {
        window.localStorage.setItem('theme', mode)
        setTheme(mode)
    };

    const themeToggler = () => {
        theme === 'light' ? setMode('dark') : setMode('light')
    };

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme');
        localTheme && setTheme(localTheme)
    }, []);
    return [theme, themeToggler]
};