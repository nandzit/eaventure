import React, { Component } from 'react';
import styles from './css/header-style.css'


function formatTime (time) {
    return time.split(":").slice(0,-1).join(':')
}

class InformationTile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: props.data
        };
    }
    render() {
        return (
            <div className={styles.container}>
            <div className={styles.infobox}>
                    <div className={styles.infoDestinationBox }>
                    <h3  className={styles.nextDestinationTitle }>  {this.state.data.isNext ? "Prossima Fermata" : ""}</h3>
                    <h1  className={styles.nextDestinationName}>    {this.state.data.stop} </h1>
                    <h3  className={styles.nextDestinationTime}>    Arriva alle <span className={styles.titleBig}>{formatTime(this.state.data.time)}</span></h3>
            </div>
            </div>
            </div>
        );
    }
}

class PublicityTile extends Component {
}

export default class Header extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data : props.data
        };
    }

    render() {
        return (
                // {/* 
                //     -Image
                //     -Title (Prossima Fermata)
                //     -Name ( The name of next Stop)
                //     -Time ( The time that the train arrives)
                // */} 

        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators"  background-color="blue">
        {
            this.state.data.stops.map( (item, i) => (
                item.isNext == true ?  <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active" key={i}></li> : <li data-target="#carouselExampleIndicators" data-slide-to={i} key={i}></li>
            ))
        }           
        </ol>
        <div className="carousel-inner">     
          {
            this.state.data.stops.map((item, i) => (
                <div className={item.isNext != true ? "carousel-item" : "carousel-item active"} key={i}>
                <InformationTile data={item}/>
                </div>
            ))
           }
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