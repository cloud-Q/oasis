import  { useEffect } from 'react'
import { useLocation } from 'react-router'


const Gototop = () => {

    const routePath = useLocation;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [routePath]);
    return null;
}


export default Gototop
