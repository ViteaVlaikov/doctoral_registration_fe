import React, { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import {SpecialityItem} from "../item/SpecialityItem";

export const SpecialityList = (props) => {

    const [specialityList, setSpecialityList] = useState(props.specialityData);
    console.log(specialityList);
    const specialities = specialityList.map(speciality => (
        <SpecialityItem
            key={Math.random()}
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