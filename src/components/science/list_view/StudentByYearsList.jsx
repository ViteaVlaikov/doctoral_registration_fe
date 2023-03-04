import React, { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import {SpecialityItem} from "../item/SpecialityItem";
import {useParams} from "react-router-dom";
import {StudentItem} from "../../student/StudentItem";

export const StudentByYearsList = (props) => {
    const studentData = props.studentData;
    const students = studentData.map(student => (
        <StudentItem
            key={student.id}
            student={student}
        />
    ));

    return (
        <ListGroup>
            {students}
        </ListGroup>

    );
}