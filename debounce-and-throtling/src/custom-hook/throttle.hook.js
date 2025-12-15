import { useCallback, useRef } from "react";

export const useThrottle = (fn, limit) => {
    let lastExicutionRef = useRef(0);

    const throttleFn = useCallback((...args)=>{
        const now = Date.now();
        if(now-lastExicutionRef.current >= limit){
            lastExicutionRef.current = now;
            fn(...args)
        }
    },[fn,limit])

    return throttleFn
}