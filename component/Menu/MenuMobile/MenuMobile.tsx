import { Drawer, DrawerContent } from '@rmwc/drawer';
import MenuLinks from '../MenuLinks/MenuLinks';
import { useState } from 'react';
import styles from './MenuMobile.module.css';

const MenuMobile = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

    return (
        <div className={styles.container__mobile}>
            <header className={styles.toggle__container}>
                <span
                    className={`material-icons material-icons-outlined ${styles.menu__toggle}`}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    menu
                </span>
            </header>

            <Drawer className={styles.drawer} modal open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)}>
                <DrawerContent>
                    <MenuLinks />
                </DrawerContent>
            </Drawer>
        </div>
    );
};

export default MenuMobile;
