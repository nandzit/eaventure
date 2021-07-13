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
import 'regenerator-runtime/runtime';
import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';


function getID() {
  const { id } = useParams()
  console.log(id)
}

function Load() {
  return <Loader />
}

function ShowApp(data) {
  const header = data.header
  const media = data.media
  return (
    <React.Fragment>
      <NavBar />
      <Header data={header} />
      <Body   data={media}/>
      <Footer />
    </React.Fragment>
  )
}

function RunApp(props) {
  const isLoaded = props.isLoaded
  const data = props.data
  const media = props.media
  if (isLoaded) {
    return <ShowApp header={data} media={media} />
  } else {
    return <Load />
  }
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoaded: false,
      data: null,
      media: null
    };
  }


  componentDidMount() {
    this.CallAPI()
  }

  async CallAPI() {
    const response = await fetch('https://eaventure.live/api/stops')

    if (response.status == 503) {
      return 
    } else {

    const media = await fetch('https://eaventure.live/api/media')
    console.log(media)

    if (media.status == 503 ) {
      return 
    } else {

      const data_json = await response.json()
      const media_json = await media.json()
      this.update(data_json, media_json)
      }
    }
  }

  update(data, media) {
    setInterval(() => {
      this.setState({
        isLoaded: true,
        data: data,
        media: media
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

            <RunApp isLoaded={this.state.isLoaded} data={this.state.data} media={this.state.media} />
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