import React from "react"
import "react-notifications/lib/notifications.css"
import Register from "./component/AddNew"
import SavedList from "./component/SavedList"

class App extends React.Component {

  render(){
    return(
      <div>
        <Register />
        <SavedList />
      </div>
    )
  }
  
}

export default App