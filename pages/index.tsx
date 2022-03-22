import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Menu from '../component/Menu/Menu';
import Main from '../component/Main/Main';

const Home: NextPage = () => {
    return (
        <div className={`${styles.container}`}>
            <Head>
                <title>Portfolio | Juan Trochez</title>
                <meta name="description" content="Portfolio Juan Trochez, développeur front-end, javascript, react, angular, vue, stencilJS..." />
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital@1&display=swap" rel="stylesheet" />
            </Head>

            <Menu />

            <main className={styles.main}>
                <Main />
            </main>

            <footer className={styles.footer}>
                Footer
            </footer>
        </div>
    )
}

export default Home;
