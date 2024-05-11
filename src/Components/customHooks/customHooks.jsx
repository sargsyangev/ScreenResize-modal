import { useEffect, useRef, useState } from "react";

function useClickOutside(callbeck) {

    const ref = useRef(null)

    useEffect(() => {

        const handleClickOutSide = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                callbeck()
            }
        }
        document.addEventListener("mousedown", handleClickOutSide)
        return () => document.removeEventListener("mousedown", handleClickOutSide)

    }, [ref])

    return [ref]
}

function useScreenResize() {

    const [screenResize, setScreenResize] = useState({
        width: window.innerWidth,
        heigth: window.innerHeight
    })

    useEffect(() => {
        const handleScreenResize = () => {
            setScreenResize({
                width: window.innerWidth,
                heigth: window.innerHeight
            })
        }

        window.addEventListener("resize", handleScreenResize)
        return () => window.removeEventListener("resize", handleScreenResize)
    })

    return screenResize
}

export { useClickOutside, useScreenResize }