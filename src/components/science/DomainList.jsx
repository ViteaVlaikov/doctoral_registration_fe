import React, {useState} from "react";
import {Nav} from "react-bootstrap";
import {SpecialityList} from "./SpecialityList";
import {AuthenticatedTemplate} from "@azure/msal-react";
import {Link} from "react-router-dom";
import {StudentItem} from "../student/StudentItem";
import ListGroup from "react-bootstrap/ListGroup";
export const DomainList = (props) => {

    const [domainList] = useState(props.domainData);

    const domains = domainList.map(domain => (
        <Link to={String("/branch/" + domain.id + "/" + props.year)}>
            {domain.name}
        </Link>
    ));

    return (
        <div className="data-area-div">
            <h2 id="list-heading" tabIndex="-1"></h2>
            <ListGroup className="todo-list">
                {domains}
            </ListGroup>
        </div>
    );
}