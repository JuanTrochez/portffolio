import Link from "next/link";
import styles from './Menu.module.css';
import { FunctionComponent, useEffect, useState } from 'react';

export interface IMenuProps {
}

const Menu: FunctionComponent<IMenuProps> = () => {
    const [theme, setTheme] = useState('dark');
    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        document.body.className = '';
        setTheme(newTheme)
        document.body.classList.add(newTheme);
        localStorage.setItem('theme', newTheme);
    }

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') as string;
        if (savedTheme !== theme) {
            toggleTheme();
        }
    }, []);

    return (
        <header className={styles.container}>
            <span className={`html__tag`}>{'<menu>'}</span>
            <nav className={styles.links__container}>
                <Link href="#about">À propos</Link>
                <Link href="#works">Experiences</Link>
                <Link href="#skills">Compétences</Link>
                <Link href="#projects">Projets</Link>
                <span onClick={() => toggleTheme()}>light</span>
            </nav>
            <span className={`html__tag`}>{'</menu>'}</span>
        </header>
    );
};

export default Menu;
