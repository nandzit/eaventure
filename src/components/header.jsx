import React, { Component } from 'react';
import styles from './css/header-style.css'


export default class Header extends Component {
    render() {
        return (
            <React.Fragment>
            <div className={styles.container}>
                {/* 
                    -Image
                    -Title (Prossima Fermata)
                    -Name ( The name of next Stop)
                    -Time ( The time that the train arrives)
                */}

                <img src="../assets/pompei.jpg" className={styles.landscape}></img>
                <div className={styles.infobox}>
                    <div className={styles.infoDestinationBox }>
                    <h3  className={styles.nextDestinationTitle }>  Prossima Fermata</h3>
                    <h1  className={styles.nextDestinationName}>    Pompei</h1>
                    <h3  className={styles.nextDestinationTime}>    Alle <span className={styles.titleBig}>14:30 '5</span></h3>
                    </div>
                </div>
            </div>
            <div className={styles.warning}>
                <h3 className={styles.warningText}>Treno in Orario</h3>
            </div>
            </React.Fragment>
        );
    }
}