import { Fragment } from "react";

import classes from './Layout.module.css';
import MainNavigation from "./MainNavigation";

const Layout= (props) =>{
    return <Fragment>
        <MainNavigation />
        <main className={classes.main}>{props.children}</main>
    </Fragment>
};

export default Layout;
//on a mis props.children pour indiquer au composant Layout qu'il aura un enfant
//Mais il ne connait pas en avance son enfant; en fait nous voulons wrapper le contenu de notre App dans Layout