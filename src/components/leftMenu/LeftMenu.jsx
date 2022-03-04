import React from "react";

import ModalWindow from "../ModalWindow/ModalWindow";
import MyNavbar from "../Header/MyNavbar";
import { MediaQuery } from "@mantine/core";
import { CSSTransition } from "react-transition-group";

import './LeftMenuAnimation.css'

const LeftMenu = ({ openedMenu, setOpenedMenu }) => {

    return (
        <CSSTransition in={openedMenu} timeout={100} classNames='left-menu'>
            <ModalWindow
                visible={openedMenu}
                setVisible={setOpenedMenu}
            >
                <MyNavbar openedNavbar={true} />
            </ModalWindow>
        </CSSTransition>
    )
}

export default LeftMenu