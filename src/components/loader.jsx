import React, { Component } from 'react' 
import styles from './css/loader-style.css'

export default class Loader extends Component {
    render() {
        return (
            <div className={styles.container}>
            <h1 className={styles.loadingTxt}>Loading...</h1> 
            </div>
        );
    }
}