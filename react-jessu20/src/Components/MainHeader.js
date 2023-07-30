import { NavLink } from 'react-router-dom';

import classes from '../Components/MainHeader.module.css';

const MainHeader = () => {
    return (
    <header className={classes.header}>
        <nav>
            <ul>
                <li>
                    <NavLink activeClassname={classes.activeClassname} to="/Welcome">
                        Welcome
                        </NavLink>
                </li>
                <li>
                    <NavLink activeClassname={classes.activeClassname}  to="/Products">
                        Products
                        </NavLink>
                </li>
            </ul>
        </nav>
    </header>
    );
};

export default MainHeader;