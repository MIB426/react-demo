import React from "react"

class Home extends React.Component{
    render(){
        return( 
        <div><p>import {'{'} render {'}'} from 'react-dom';</p>
          <p>render({'<'}App {'/>'}, document.getElementById('root'));</p>
        <p>import reactDOM from 'reatc-dom';</p>
        <p>ReactDOM.render({'<'} App {'/>'}, document.getElementById('root'));</p>
      </div>
        )
    }
}

export {Home}