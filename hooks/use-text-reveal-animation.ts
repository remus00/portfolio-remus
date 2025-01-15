import { stagger, useAnimate } from 'motion/react';
import { useEffect } from 'react';
import SplitType from 'split-type';

export default function useTextRevealAnimation() {
    const [scope, animate] = useAnimate();

    useEffect(() => {
        new SplitType(scope.current, {
            types: 'lines,words',
            tagName: 'span',
        });
    }, [scope]);

    function entranceAnimation() {
        return animate(
            scope.current.querySelectorAll('.word'),
            {
                transform: 'translateY(0)',
            },
            { duration: 0.5, delay: stagger(0.15) }
        );
    }

    function exitAnimation() {
        return animate(
            scope.current.querySelectorAll('.word'),
            {
                transform: 'translateY(100%)',
            },
            {
                duration: 0.3,
                delay: stagger(-0.025, {
                    startDelay: scope.current.querySelectorAll('.word') * 0.025,
                }),
            }
        );
    }

    return { scope, entranceAnimation, exitAnimation };
}
