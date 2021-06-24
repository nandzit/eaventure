import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './src/components/navBar.jsx'
import Header from './src/components/header.jsx'
import Body from './src/components/body.jsx'
import Loader from './src/components/loader.jsx'
import Footer from './src/components/footer.jsx'
import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter } from "react-router-dom";
import { useParams } from "react-router";
import '!style-loader!css-loader!bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap"
import './_custom.scss';

function getID() {
  const { id } = useParams()
  console.log(id)
}

function Load() {
  return <Loader />
}

function ShowApp(data) {
  const header = data.header
  return (
    <React.Fragment>
      <NavBar />
      <Header data={header} />
      <Body />
      <Footer />
    </React.Fragment>
  )
}

function RunApp(props) {
  const isLoaded = props.isLoaded
  const data = props.data
  if (isLoaded) {
    return <ShowApp header={data} />
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

  componentDidMount() {
    this.CallAPI()
  }

  CallAPI() {
    fetch('http://localhost:3000/stops')
      .then(res => { 
        if (res.status == 503) { return }
        const data = res.json() 
        this.update(data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  update(data) {
    setInterval(() => {
      this.setState({
        isLoaded: true,
        data: data
      })
    }, (2000));
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

            <RunApp isLoaded={this.state.isLoaded} data={this.state.data} />
          </Route>
        </Switch>
      </Router>
    )
  }
}

// Render App
ReactDOM.render(
  <React.Fragment>
    <App />
  </React.Fragment>,
  document.getElementById('root')
)