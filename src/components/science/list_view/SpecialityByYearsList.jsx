import React, { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import {SpecialityItem} from "../item/SpecialityItem";
import {useParams} from "react-router-dom";

export const SpecialityByYearsList = (props) => {
    const specialityList = props.specialityData;
    const specialities = specialityList.map(speciality => (
        <SpecialityItem
            key={speciality.id}
            id={speciality.id}
            name={speciality.name}
        />
    ));

    return (
        <div className="data-area-div">
            <h2 id="list-heading" tabIndex="-1" ></h2>
            <ListGroup className="todo-list">
                {specialities}
            </ListGroup>
        </div>
    );
}