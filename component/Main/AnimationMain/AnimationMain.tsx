import styles from './AnimationMain.module.css';
import { useEffect, useRef } from 'react';
import { initMainAnimation } from '../../../utils/animations/main/main.animation.utils';

const AnimationMain = () => {
    const canvas = useRef<HTMLCanvasElement>(null);

    const animate = () => {

        const ctx = canvas!.current!.getContext('2d');

        initMainAnimation(ctx as CanvasRenderingContext2D);
    }

    useEffect(() => {
        if (Boolean(canvas)) {
            animate();
        }
    }, [canvas]);

    useEffect(() => {
        window.addEventListener("resize", () => {
            animate();
        });
        return () => {
            window.removeEventListener("resize", () => {
                animate();
            })
        }
    }, [])

    return (
        <canvas
            className={styles.canvas}
            id="main-canvas"
            width={1000}
            height={1000}
            ref={canvas} />
    );
};

export default AnimationMain;
