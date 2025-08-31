import { useState, useEffect  } from "react";

export const useMediaQuery = (query: string): boolean=> {
    const [matches, setMatches] = useState(window.matchMedia(query).matches)

    useEffect(() => {
        const mediaQuery = window.matchMedia(query)
        const mediaChangeHandler = () => setMatches(mediaQuery.matches)
        mediaQuery.addEventListener("change", mediaChangeHandler)

        return () => {
            mediaQuery.removeEventListener("change", mediaChangeHandler)
        }
    }, [query])

    return matches;
}