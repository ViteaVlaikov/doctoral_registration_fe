import React, {useState} from "react";
import {Nav, Table} from "react-bootstrap";
import {SpecialityList} from "./SpecialityList";
import {AuthenticatedTemplate} from "@azure/msal-react";
import {Link} from "react-router-dom";
import {StudentItem} from "../../student/StudentItem";
import ListGroup from "react-bootstrap/ListGroup";
import {BranchItem} from "../item/BranchItem";
import {DomainItem} from "../item/DomainItem";
export const DomainByScienceSchoolList = (props) => {
    const domainList = Array();
    props.domainData.forEach(data=>
        domainList.push(data)
    )
    if(domainList.length === 0){
        return <div>NO DATA</div>;
    }
    const domains = domainList.map(domain=>
        <DomainItem year={props.year} domain={domain}/>
    )
    return (
            <ListGroup>
                {domains.map((domain) => (
                    <Table>
                        {domain}
                    </Table>
                ))}
            </ListGroup>
    );
}