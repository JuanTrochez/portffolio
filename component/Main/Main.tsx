import styles from './Main.module.css';

const Main = () => {
    return (
        <section className={styles.container}>
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
        </section>
    );
};

export default Main;
