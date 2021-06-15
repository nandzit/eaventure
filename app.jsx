import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './src/components/navBar.jsx'
import Header from './src/components/header.jsx'
import Body from './src/components/body.jsx'
import Footer from './src/components/footer.jsx'
import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter } from "react-router-dom";
import { useParams } from "react-router";
import Popper from 'popper.js';
import jQuery from 'jquery';
import '!style-loader!css-loader!bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap"
import './_custom.scss';

function getID () {
  const { id } = useParams()
  console.log(id)
}

let headerData = {

    stops:  [{
      isNext: true,
      stop: "Napoli",
      time: "14:30"
    }, 
    {
      isNext: false,
      stop: "Napoli",
      time: "14:30"
    },
    {
      isNext: false,
      stop: "Napoli",
      time: "14:30"
    },
    {
      isNext: false,
      stop: "Napoli",
      time: "14:30"
    }]

}

let bodyData = {
    media: [{
         mediaImage: "https://images.musement.com/cover/0002/15/venuehero-pompei-jpg_header-114431.jpeg?q=50&fit=crop&auto=format&w=1024&h=400",
         mediaTitle: "Information Title",
         mediaDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce blandit quam in lectus mollis sodales. Vestibulum odio augue, blandit vitae augue in, posuere interdum odio. Duis nec faucibus ex, non consequat odio. Vestibulum consectetur malesuada quam id luctus. Aliquam malesuada vel lorem pulvinar aliquam. Suspendisse metus orci, varius eget arcu ac, efficitur laoreet odio. Ut ornare vulputate metus, congue lobortis diam accumsan sed. Mauris hendrerit facilisis purus non sollicitudin. "
        },{
          mediaImage: "https://images.musement.com/cover/0002/15/venuehero-pompei-jpg_header-114431.jpeg?q=50&fit=crop&auto=format&w=1024&h=400",
          mediaTitle: "Information Title",
          mediaDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce blandit quam in lectus mollis sodales. Vestibulum odio augue, blandit vitae augue in, posuere interdum odio. Duis nec faucibus ex, non consequat odio. Vestibulum consectetur malesuada quam id luctus. Aliquam malesuada vel lorem pulvinar aliquam. Suspendisse metus orci, varius eget arcu ac, efficitur laoreet odio. Ut ornare vulputate metus, congue lobortis diam accumsan sed. Mauris hendrerit facilisis purus non sollicitudin. "
        }, {
          mediaImage: "https://images.musement.com/cover/0002/15/venuehero-pompei-jpg_header-114431.jpeg?q=50&fit=crop&auto=format&w=1024&h=400",
          mediaTitle: "Information Title",
          mediaDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce blandit quam in lectus mollis sodales. Vestibulum odio augue, blandit vitae augue in, posuere interdum odio. Duis nec faucibus ex, non consequat odio. Vestibulum consectetur malesuada quam id luctus. Aliquam malesuada vel lorem pulvinar aliquam. Suspendisse metus orci, varius eget arcu ac, efficitur laoreet odio. Ut ornare vulputate metus, congue lobortis diam accumsan sed. Mauris hendrerit facilisis purus non sollicitudin. "
        }, ]
}



function Load() {
  return <h1>Loading</h1>
}

function ShowApp(data) {
  const header = data.header
  console.log(header)
  return ( 
          <React.Fragment>
          <NavBar />
          <Header data={header}/>
          <Body   data={bodyData}/>
          <Footer />
          </React.Fragment>
    )
}

function RunApp(props) {
      const isLoaded = props.isLoaded
      const data = props.data
      if (isLoaded) {
        return <ShowApp header={data}/>
      } else {
        return <Load />
      }
}



class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        isLoaded: false,
        data: null
      };
    }

    componentDidMount () {
      this.CallAPI()
    }

    CallAPI () {
      fetch('https://b817bb7b-6d2e-4c13-9ff5-28542b88a535.mock.pstmn.io/stops')
      .then(res => res.json())
      .then((data) => { this.update(data) })
      }

    update (data) {
      this.setState({
        isLoaded: true,
        data: data
      })
    }


    render() {

    return (   
    <Router>
    <Switch>
    
    {/* Case where the user is trying to get the root */}
    <Route exact path="/">
    <h1>We are sorry , this page is not avaliable</h1>
    </Route>
    
    <Route exact path path="/:id">
    
    {/* // Case where the user already load content */}
    {/* Check if there is data to show , if there isn't show the loader */}

     <RunApp isLoaded={this.state.isLoaded} data={this.state.data}/>
    </Route>
    </Switch>
    </Router>
    )
  }
}

// Render App
ReactDOM.render(
  <App />,
  document.getElementById('root')
)