import React, { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import {StudentItem} from "./StudentItem";

export const StudentList = (props) => {

    const [studentList, setStudentList] = useState(props.studentData);

    const students = studentList.map(student => (
        <StudentItem
            key={Math.random()}
            student={student}
        />
    ));

    return (
        <div className="data-area-div">
            <h2 id="list-heading" tabIndex="-1" ></h2>
            <ListGroup className="todo-list">
                {students}
            </ListGroup>
        </div>
    );
}