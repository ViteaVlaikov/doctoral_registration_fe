import Form from "react-bootstrap/Form";
import React from "react";
import {ProfileItem} from "./ProfileItem";

export const BranchItem = (props) => {
    const branch = props.branch;
    const profiles = branch.scienceProfiles.map(profile=>
        <ProfileItem year={props.year} profile={profile}/>
    )
    return (
        <Form.Group>
            <td>
                <tr>{branch.name}</tr>
            </td>
            <td>
                <tr></tr>
                <tr>{profiles}</tr>
            </td>
        </Form.Group>
    );
}