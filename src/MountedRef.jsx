import { useEffect, useRef } from "react";

export function MountedRef(){
    const mountedRef = useRef(false)

    useEffect(() => {
        if(!mountedRef.current){
            mountedRef.current = true
            console.log("Mounted for the first time")
        }
    }, [])
}