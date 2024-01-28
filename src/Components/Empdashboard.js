import React from "react";
import Navbar from "./Navbar";
import EmpNavBar from "./EmpNavBar";

export default function Empdashboard(props) {
  return (
    <div>
      <EmpNavBar />
      <h1>Employee Dashboard: {props.empid}</h1>
    </div>
  );
}
