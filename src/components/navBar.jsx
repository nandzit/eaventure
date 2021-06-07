import React, { Component } from 'react';
import styles from './css/navBar-style.css'

export default class NavBar extends Component {
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.navBar}>
                <div className={styles.icon}>
                <img src='../../eaventurelogo.png' width="100" heigh="100"></img>
                </div>
                </div>
            </div>
        );
    }
}