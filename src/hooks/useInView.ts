import { useState, useEffect, MutableRefObject } from 'react';

const useInView = (ref: MutableRefObject<HTMLElement | null>, options: IntersectionObserverInit, singleUse: boolean) => {
    const [inView, setInView] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setInView(true);
                if (singleUse) {
                    setHasAnimated(true);
                    observer.unobserve(ref.current as Element);
                }
            } else if (!singleUse) {
                setInView(false);
            }
        }, options);

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [ref, options, singleUse]);

    return singleUse ? hasAnimated : inView;
};

export default useInView;
