
import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();
    useLayoutEffect(() => {
        if (!window.location.hash) {
            window.scrollTo({ top: 0, behavior: 'instant' });
        }
    }, [pathname]);
    return null;
};

export default ScrollToTop;
