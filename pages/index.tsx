import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Menu from '../component/Menu/Menu';
import Main from '../component/Main/Main';
import Footer from '../component/Footer/Footer';

const Home: NextPage = () => {
    return (
        <div className={`${styles.container}`}>
            <Menu />

            <main className={styles.main}>
                <Main />
            </main>

            <Footer />
        </div>
    )
}

export default Home;
