import React from "react";
import { useEffect } from "react";

const InstructorFunc = (props) => {
  useEffect(() => {
    return () => {
      //ComponentWillUnmount() equivalent
      console.log("Instructor - UNMOUNTED");
    };
  }, []);

  return (
    <div>
      Name: {props.instructor.name}
      <br />
      Email: {props.instructor.email}
      <br />
      Phone: {props.instructor.phone}
    </div>
  );
};

export default InstructorFunc;
