import React, { Component } from 'react';
import styles from './css/footer-style.css'

export default class Footer extends Component {
    render() {
        return (
            <div className={styles.container}>
            <h3 className={styles.rights}>Powered by Eaventure Team</h3>
        </div>     
        )
    }
}