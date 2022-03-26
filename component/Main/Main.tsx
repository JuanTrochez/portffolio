import styles from './Main.module.css';
import AnimationMain from './AnimationMain/AnimationMain';

const Main = () => {
    return (
        <section className={styles.container}>
            <AnimationMain />
            <div className={styles.title}>
                <h1>
                    <span className={'accent'}>J</span>uan <span className={'accent'}>Tr</span>ochez
                </h1>
                <div className={styles.job}>
                    <span className={`html__tag`}>{'<job>'}</span>
                    <h2 className={'typewriter'}>
                        Développeur web Front-end
                    </h2>
                    <span className={`html__tag`}>{'</job>'}</span>
                </div>
            </div>
        </section>
    );
};

export default Main;
