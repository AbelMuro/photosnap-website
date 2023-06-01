import React, {useState, useRef, useEffect} from 'react';
import styles from './styles.module.css';
import icons from '../../Assets/icons';
import mobileIcons from './icons'
import useMediaQuery from '../../Hooks/useMediaQuery';
import { useNavigate } from 'react-router-dom';

function NavBar() {
    const [openMenu, setOpenMenu] = useState(false);
    const navigate = useNavigate();
    const mobile = useMediaQuery('(max-width: 730px)');
    const navBar = useRef();
    const overlay = useRef();

    const handleMobileMenu = () => {
        setOpenMenu(!openMenu);
    }

    const handleNavLinks = (e) => {
        if(!e.target.matches('li') && !e.target.matches("." + styles.logo)) return;

        const route = e.target.getAttribute('data-link');
        navigate(route);
        setOpenMenu(false);
    }

    // this useEffect will expand the nav bar when the hamburger icon is clicked and will
    // make the overlay darken the background
    useEffect(() => {
        if(openMenu){
            navBar.current.style.position = 'absolute'
            navBar.current.style.height = '325px';
            overlay.current.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
            overlay.current.classList.add(styles.apply_overlay);
        }
            
        else{
            navBar.current.style.position = ''
            navBar.current.style.height = '';
            overlay.current.style.backgroundColor = '';
            setTimeout(() => {
                overlay.current.classList.remove(styles.apply_overlay);                
            }, 200)
        }
    }, [openMenu])

    useEffect(() => {
        const handleScroll = () => {
            window.scrollTo(0, 0);
        }
        
        if(openMenu)
            document.addEventListener('scroll', handleScroll);
        else
            document.removeEventListener('scroll', handleScroll);

        return () => {
            document.removeEventListener('scroll', handleScroll);
        }

    }, [openMenu])

    useEffect(() => {
        if(!mobile)
            setOpenMenu(false);
    },[mobile])

    return(
        <div ref={overlay}>
            <nav className={styles.navBar} ref={navBar}>
                <div className={styles.content}>
                    <img src={icons['logoNav']} className={styles.logo} onClick={handleNavLinks} data-link='/' alt='logo'/>
                    {mobile ? <></> : 
                        <ul className={styles.navLinks} onClick={handleNavLinks}>
                            <li className={styles.navLink} data-link='/stories'>
                                stories
                            </li>
                            <li className={styles.navLink}  data-link='/features'>
                                features
                            </li>
                            <li className={styles.navLink}  data-link='/pricing'>
                                pricing
                            </li>
                        </ul> }
                    {mobile ? 
                        <button className={styles.hamburgerContainer} onClick={handleMobileMenu}>
                            <img className={styles.hamburger} src={mobileIcons['menu']} alt='hamburger icon'/>
                        </button> 
                        : 
                        <button className={styles.inviteButton}>
                            get an invite
                        </button> }
                </div>
                {mobile ? 
                    <ul className={styles.mobileMenu} onClick={handleNavLinks}>
                        <li className={styles.mobileMenu_item} data-link='/stories'>
                            stories
                        </li>
                        <li className={styles.mobileMenu_item} data-link='/features'>
                            features
                        </li>
                        <li className={styles.mobileMenu_item} data-link='/pricing'>
                            pricing
                        </li>
                        <li className={styles.mobileMenu_item}></li>
                        <li className={styles.mobileMenu_item}>
                            <button>
                                get an invite
                            </button>
                        </li>
                    </ul> 
                : 
                <></>}
            </nav>

        </div>

    )
}

export default NavBar;