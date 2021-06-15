import React, { Component } from 'react';
import logo from "../assets/eaventurelogo.png"
import styles from './css/navBar-style.css'


export default class NavBar extends Component {
    render() {
        return (
            <div className={styles.container}>
                {/* <div className={styles.navBar}> */}
                <div className={styles.icon}>
                <img src={logo} width="100" heigh="100"></img>
                </div>
                {/* </div> */}
            </div>
        );
    }
}