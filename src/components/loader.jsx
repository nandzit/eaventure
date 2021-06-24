import React, { Component } from 'react' 
import styles from './css/loader-style.css'
import eavLogo from '../assets/logoEAV.png'
import dtLabLogo from '../assets/logoDTLab.png'

export default class Loader extends Component {
    render() {
        return (
            <div className={styles.container}>
            <img src={eavLogo} className={styles.eavLogo}></img>
            <h1 className={styles.loadingTxt}>Loading...</h1> 
            <img src={dtLabLogo} className={styles.dtLabLogo}></img>
            </div>
        );
    }
}


