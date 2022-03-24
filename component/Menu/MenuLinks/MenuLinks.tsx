import Link from 'next/link';
import styles from './MenuLinks.module.css';

const MenuLinks = () => {
    return (
        <div className={styles.menu__links}>
            {/*<span className={`html__tag`}>{'<menu>'}</span>*/}
            <nav className={styles.links__container}>
                <Link href="#about"><a data-hover="À propos">À propos</a></Link>
                <Link href="#works"><a data-hover="Experiences">Experiences</a></Link>
                <Link href="#skills"><a data-hover="Compétences">Compétences</a></Link>
                <Link href="#projects"><a data-hover="Projets">Projets</a></Link>
                {/*<span className={`material-icons material-icons-outlined ${styles.theme__toggle}`} onClick={() => toggleTheme()}>*/}
                {/*        {theme === 'light' ? 'dark_mode' : 'light_mode'}*/}
                {/*    </span>*/}
            </nav>
            {/*<span className={`html__tag`}>{'</menu>'}</span>*/}
        </div>
    );
}
export default MenuLinks;
