import React, { Component } from 'react';
import styles from './css/header-style.css'
import 'regenerator-runtime/runtime';
import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

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
                    <h1  className={styles.nextDestinationName} id="stop_destination">   {this.state.data.stop} </h1>
                    <h3  className={styles.nextDestinationTime}>    Arriva alle <span className={styles.titleBig}>{formatTime(this.state.data.time)}</span></h3>
            </div>
            </div>
            </div>
        );
    }
}

function HeaderTile (data) {
                const item = data.items.find((i) => {
                    return i.isNext == true
                })
                const element = <InformationTile data={item}/>
                return  element
}

export default class Header extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data : props.data
        };
    }


    async updateHeader() {
        const response = await fetch('https://eaventure.live/api/stops')
        if (response.status == 503) { 
             return 
        } else {
            const data_json = await response.json()
            this.setState ({
                data: data_json
            })
         }
    }

    componentDidMount () {
        // setInterval(updateHeader, 10000);
    }

    render() {
        return (
            <React.Fragment>
            <HeaderTile items={this.state.data.stops}/>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" data-interval="false" data-touch="false">
            <ol className="carousel-indicators"  background-color="blue">
            {
                this.state.data.stops.map( (item, i) => (
                    item.isNext == true ?  <li data-target="#carouselExampleIndicators" data-slide-to={i} className="active" key={item.stop} id="next-stop-active"></li> : <li data-target="#carouselExampleIndicators" data-slide-to={i} key={i}></li>
                ))
            }           
            </ol>
            <div className="carousel-inner">     
              {
                this.state.data.stops.map((item, i) => (
                    <div className={item.isNext != true ? "carousel-item" : "carousel-item active" } id={item.stop} key={item.stop}>
                    </div>
                ))
               }
            </div>
    
            {/* <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
            </a> */}
            </div>
            </React.Fragment>
        );      
    }
}