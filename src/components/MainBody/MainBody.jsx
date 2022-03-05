import React from "react";

import PostsGrid from "../PosGrid/PostsGrid";
import Footer from "../Footer/Footer";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

import styles from './MainBodyStyle.module.css'

const MainBody = ({ mainButtonsStates }) => {

    const pages = (mainButtonsStates) => {
        switch (mainButtonsStates) {
            case 'news':
                return (
                    <>
                        <ScrollToTop />
                        <PostsGrid />
                        <Footer />
                    </>
                )
            case 'competitions':
                return (
                    <div>competitions</div>
                )
            case 'about':
                return (
                    <div>about</div>
                )
            case 'singin':
                return (
                    <div>singin</div>
                )
            default:
                return (<></>)

        }
    }

    return (
        <div className={styles.mainBody}>
            {pages(mainButtonsStates)}
        </div>
    )
}

export default MainBody