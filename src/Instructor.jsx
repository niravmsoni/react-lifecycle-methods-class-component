import React from "react";

class Instructor extends React.Component{
constructor(props){
    super(props);
    }

    componentDidMount(){
        console.log("Mount - Instructor");
    }

    componentDidUpdate(){
        console.log("Update - Instructor");
    }

    componentWillUnmount(){
        console.log("Unmount - Instructor");
    }

    render(){
        console.log("Render - Instructor");
        return(
        <div>
            Name: {this.props.instructor.name}
            <br />
            Email: {this.props.instructor.email}
            <br />
            Phone: {this.props.instructor.phone}
        </div>
        )
    }
}

export default Instructor;