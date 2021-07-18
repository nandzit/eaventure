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

function Load() {
  return <Loader />
}

function ShowApp(data) {
  const header = data.header
  const media = data.media
  const id = data.id
  return (
    <React.Fragment>
      <NavBar />
      <Header data={header} id={id}/>
      <Body   data={media}/>
      <Footer />
    </React.Fragment>
  )
}

function RunApp(props) {
  const isLoaded = props.isLoaded
  const data = props.data
  const media = props.media
  const id = props.id
  if (isLoaded) {
    return <ShowApp header={data} media={media} id={id} />
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
      media: null,
      id: this.props.match.params.id
    };
  }


  componentDidMount() {
    this.CallAPI()
  }

  async CallAPI() {
    const id = this.props.match.params.id
    const response = await fetch(`https://eaventure.live/api/stops/${this.state.id}`)
    if (response.status == 503) {
      return 
    } else {

    const media = await fetch('https://eaventure.live/api/media')

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
          <RunApp isLoaded={this.state.isLoaded} data={this.state.data} media={this.state.media} id={this.state.id} />
    )
  }
}

// Render App
ReactDOM.render(
  <Router>
    <Switch>
    <Route exact path path="/:id" component={props => <App {...props} />}>
    </Route>
    <Route exact path path="/">
    <h1>We are sorry , this page is not avaliable</h1>
    </Route>
    </Switch>
    </Router>,
    document.getElementById('root')
)