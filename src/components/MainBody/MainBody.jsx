import React from "react";

import PostsGrid from "../PosGrid/PostsGrid";
import Footer from "../Footer/Footer";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

import styles from './MainBodyStyle.module.css'

const MainBody = () => {
    return (
        <div className={styles.mainBody}>
            <ScrollToTop/>
            <PostsGrid />
            <Footer />
        </div>
    )
}

export default MainBody