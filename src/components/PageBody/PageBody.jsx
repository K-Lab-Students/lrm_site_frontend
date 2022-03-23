import React, { useState } from "react";

import { Modal } from "@mantine/core";

import { Switch, Route } from "react-router-dom";

import Home from "../Home/Home";
import PostsGrid from "../PosGrid/PostsGrid";
import ProjectsPageGrid from "../ProjectsPageGrid/ProjectsPageGrid";
import Footer from "../Footer/Footer";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import AboutPageGrid from "../AboutPageGrid/AboutPageGrid";
import AuthenticationForm from "../AuthenticationForm/AuthenticationForm";
import UserProfile from "../../UserProfile/UserProfile";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

import styles from './PageBodyStyle.module.css'

const PageBody = () => {

    const contentWidth = 1000

    return (
        <div className={styles.pageBody}>
            <ScrollToTop />
            <Switch>
                <Route exact path='/'>
                    <Home width={contentWidth} />
                </Route>
                <Route path='/news'>
                    <PostsGrid width={contentWidth} />
                </Route>
                <Route path='/competitions'>
                    <div>competitions</div>
                </Route>
                <Route path='/projects'>
                    <ProjectsPageGrid width={contentWidth} />
                </Route>
                <Route path='/about'>
                    <AboutPageGrid width={contentWidth} />
                </Route>
                <Route path='/sign-in'>
                    <AuthenticationForm width={contentWidth} />
                </Route>
                <Route path='/lk'>
                    <UserProfile width={contentWidth} />
                </Route>
                <Route path="*">
                    <NotFoundPage width={contentWidth} />
                </Route>
            </Switch>
            <Footer />
        </div>
    )
}

export default PageBody