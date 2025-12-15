import { useCallback, useRef } from "react";

export const useDebounce = (fn, delay) => {
    const timeRef = useRef(null);

    const debounceFn = useCallback((...args)=>{
        if(timeRef.current) clearTimeout(timeRef.current);
        
        timeRef.current = setTimeout(()=>{
            fn(...args)
        },delay)
    },[fn, delay]);

    return debounceFn
}