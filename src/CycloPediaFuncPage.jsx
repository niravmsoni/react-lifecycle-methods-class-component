import React from "react";
import Instructor from "./Instructor";

import { getRandomUser } from "./Utility/api";

const CycloPediaFuncPage = () => {

    const [state, setState] = useState(() =>{
        return {instructor: undefined,
            studentList: [],
            studentCount: 0,
            hideInstructor: false
        };
    });

    const [inputName, setInputName] = useState(() => { return ""});
    const [inputFeedback, setinputFeedback] = useState(() => { return ""});

  // constructor(props){
  //     super(props);
  //     this.state = JSON.parse(localStorage.getItem("cyclopediaState")) || {
  //         instructor: undefined,
  //         studentList: [],
  //         studentCount: 0,
  //         hideInstructor: false,
  //         inputName: "",
  //         inputFeedback: ""
  //     };
  // }

  // componentDidMount = async() => {
  //     console.log('Component Did Mount');
  //     if(JSON.parse(localStorage.getItem("cyclopediaState"))){
  //         this.setState(JSON.parse(localStorage.getItem("cyclopediaState")));
  //     }
  //     else{
  //         const response = await getRandomUser();
  //         console.log(response);

  //         this.setState((prevState) => {
  //             return {
  //                 instructor: {
  //                     name: response.data.first_name + " " + response.data.last_name,
  //                     email: response.data.email,
  //                     phone: response.data.phone_number,
  //                 },
  //             };
  //         });
  //     }
  // }

  // componentDidUpdate = async(previousState) => {
  //     console.log('Component Did Update');
  //     localStorage.setItem("cyclopediaState", JSON.stringify(this.state));
  //     console.log('old state - '+ previousState.studentCount);
  //     console.log('new state - '+ this.state.studentCount);

  //     if (previousState.studentCount < this.state.studentCount){
  //         const response = await getRandomUser();
  //         this.setState((prevState) =>{
  //             return{
  //                 studentList: [
  //                     ...prevState.studentList,
  //                     {
  //                         name: response.data.first_name + " " + response.data.last_name,
  //                     },
  //                 ],
  //             };
  //         });
  //     }
  //     else if(previousState.studentCount > this.state.studentCount){
  //         this.setState((prevState) =>{
  //             return {
  //                 studentList: [],
  //             };
  //         });
  //     };
  // };

  // componentWillUnmount(){
  //     console.log('Component Will Unmount');
  // }

  handleAddStudent = () => {
    setState((prevState) => {
      return {
        ...prevState,
        studentCount: prevState.studentCount + 1,
      };
    });
  };

  handleRemoveAllStudents = () => {
    setState(() => {
      return {
        ...prevState,
        studentCount: 0,
      };
    });
  };

  handleToggleInstructor = () => {
    setState((prevState) => {
      return {
        ...prevState,
        hideInstructor: !prevState.hideInstructor,
      };
    });
  };

  return (
    <div>
      <div className="p-3">
        <span className="h4 text-success">Instructor </span>
        <i
          className={`bi ${
            state.hideInstructor ? "bi-toggle-off" : "bi-toggle-on"
          } btn btn-success btn-sm`}
          onClick={handleToggleInstructor}
        ></i>
        {!state.hideInstructor && state.instructor ? (
          <Instructor instructor={state.instructor}></Instructor>
        ) : null}
      </div>

      <div className="p-3">
        <span className="h4 text-success">Feedback</span>
        <br />
        <input
          type="text"
          placeholder="Name..."
          value={state.inputName}
          onChange={(e) => {
            setState({ inputName: e.target.value });
          }}
        ></input>
        Value: {state.inputName}
        <br />
        <textarea
          placeholder="Feedback..."
          value={state.inputFeedback}
          onChange={(e) => {
            setState({ inputFeedback: e.target.value });
          }}
        ></textarea>
        FeedbackValue: {state.inputFeedback}
      </div>

      <div className="p-3">
        <span className="h4 text-success">Students</span>
        <br />
        <div>Student Count: {state.studentCount}</div>
        <button
          className="btn btn-success btn-sm"
          onClick={handleAddStudent}
        >
          Add Student
        </button>
        &nbsp;
        <button
          className="btn btn-danger btn-sm"
          onClick={handleRemoveAllStudents}
        >
          Remove All Students
        </button>
        {state.studentList.map((student, index) => {
          return (
            <div className="text-white" key={index}>
              {" "}
              - {student.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CycloPediaFuncPage;
