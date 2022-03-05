import React from "react";

import { Grid, Container, MediaQuery } from "@mantine/core";
import Post from "../Post/Post";
import PostsGrid from "../Post/PostsGrid";

import styles from './MainBodyStyle.module.css'

const MainBody = () => {
    return (
        <div className={styles.mainBody}>
            <PostsGrid />
        </div>
    )
}

export default MainBody