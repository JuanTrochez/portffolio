import styles from './Main.module.css';

const Main = () => {
    return (
        <section className={styles.container}>
            <span>Bonjour, je {'m\'appelle'}</span>
            <h1>
                Juan Trochez
            </h1>
            <div>
                <span className={`html__tag`}>{'<job>'}</span>
                <h2 className={'typewriter'}>
                    Développeur Front-end
                </h2>
                <span className={`html__tag`}>{'</job>'}</span>
            </div>
        </section>
    );
};

export default Main;
