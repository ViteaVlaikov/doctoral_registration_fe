import React, { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import {ScienceItem} from "./ScienceItem";
import {Science} from "../../pages/Science";

export const ScienceList = (props) => {

    const [scienceList, setScienceList] = useState(props.scienceData);
    const sciences =
        <ScienceItem
            science={scienceList}
        />;

    return (
        <div className="data-area-div">
            <h2 id="list-heading" tabIndex="-1" ></h2>
            <ListGroup className="todo-list">
                {sciences}
            </ListGroup>
        </div>
    );
}