import React from "react"
import "react-notifications/lib/notifications.css"
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'

import Register from "./component/AddNew"
import SavedList from "./component/SavedList"

class App extends React.Component {

  render(){
    return(
      <BrowserRouter basename="/mad9135-hybrid5-firebase">
        <Register />
        <SavedList />
      </BrowserRouter>
    )
  }
  
}

export default App