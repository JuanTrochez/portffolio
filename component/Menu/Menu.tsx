import styles from './Menu.module.css';
import { FunctionComponent, useEffect, useState } from 'react';
import MenuLinks from './MenuLinks/MenuLinks';
import MenuMobile from './MenuMobile/MenuMobile';
import { Drawer, DrawerContent } from '@rmwc/drawer';

export interface IMenuProps {
}

const Menu: FunctionComponent<IMenuProps> = () => {
    const [theme, setTheme] = useState<'light' | 'dark'>('dark');
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
        <>
            <header className={styles.container}>
                <MenuLinks />
            </header>
            <MenuMobile />
        </>
    );
};

export default Menu;
