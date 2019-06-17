import React from "react"

class Props extends React.Component{
constructor(props){
    super(props);
    this.state = {
        name: "James Wu",
        user: {
            id : "123",
            name : "James Wu",
            age : 18
        }
     }
}

    render(){
        return <div>
            <h1>Props</h1>
           <h2>直接給 props 資料</h2>
           <h3><ContentA value= "100" /></h3>
           <h2>預設 props 有資料</h2>
           <h3>
            <p>{this.props.animal1}</p>
            <p>{this.props.animal2}</p></h3>
         
         <h2>從狀態傳給 props 使用</h2>
        <h3><ContentA value= {this.state.name} /> </h3>
        <h3><ContentB Data= {this.state.user} /> </h3>
        </div>
    }
}
//直接給 props 資料
class ContentA extends React.Component {
    render() {
       return (
       <div>
         {this.props.value}</div>
       );
    }
 }

 class ContentB extends React.Component {
    render() {
       return (
       <div>
         id: {this.props.Data.id}, name: 
         {this.props.Data.name}, age: 
         {this.props.Data.age}
         </div>
       );
    }
 }

 Props.defaultProps = {
    animal1: "Dogdog",
    animal2: "Catcat"
 }

export {Props}


