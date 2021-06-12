import React, { Component } from 'react';
import styles from './css/header-style.css'





class InformationTile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nextStop : props.nextStop,
            time: props.time
        };
    }
    render() {
        return (
            <div className={styles.container}>
            {/* <img src="../assets/pompei.jpg" className={styles.landscape}></img> */}
            <div className={styles.infobox}>
                    <div className={styles.infoDestinationBox }>
                    <h3  className={styles.nextDestinationTitle }>  Prossima Fermata</h3>
                    <h1  className={styles.nextDestinationName}>    {this.state.nextStop} </h1>
                    <h3  className={styles.nextDestinationTime}>    Alle <span className={styles.titleBig}>14:30 '5</span></h3>
            </div>
            </div>
            </div>
        );
    }
}



class PublicityTile extends Component {


}







export default class Header extends Component {
    render() {
        return (
   
                // {/* 
                //     -Image
                //     -Title (Prossima Fermata)
                //     -Name ( The name of next Stop)
                //     -Time ( The time that the train arrives)
                // */} 

        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
         <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
         <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
         <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
         <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
         <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
         <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
        </ol>
        <div className="carousel-inner">
            <div className="carousel-item active">
            <InformationTile nextStop="Napoli" time="someTime Here"/>
            </div>
            <div className="carousel-item">
            <InformationTile nextStop="Pompei" time="someTime Here"/>
            </div>
            <div className="carousel-item">
            <InformationTile nextStop="Nevada" time="someTime Here"/>
            </div>
            <div className="carousel-item">
            <InformationTile nextStop="Nevada" time="someTime Here"/>
            </div>
            <div className="carousel-item">
            <InformationTile nextStop="Nevada" time="someTime Here"/>
            </div>
            <div className="carousel-item">
            <InformationTile nextStop="Nevada" time="someTime Here"/>
            </div>
            <div className="carousel-item">
            <InformationTile nextStop="Nevada" time="someTime Here"/>
            </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
        </a>
        </div>
        // </div>

        );
    }
}