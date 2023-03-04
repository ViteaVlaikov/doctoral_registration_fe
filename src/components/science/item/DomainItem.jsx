import React from "react";
import Form from "react-bootstrap/Form";
import {BranchItem} from "./BranchItem";
export const DomainItem = (props) => {
    const domain = props.domain;
    const branches = domain.scienceBranches.map(branch=>
        <BranchItem year={props.year} branch={branch}/>
    )
    return (
            <Form.Group>
                <td>
                    <tr>{domain.name}</tr>
                </td>
                <td>
                    <tr></tr>
                    {branches.map((branch) => (
                        <div>
                            {branch}
                        </div>
                    ))}
                </td>
            </Form.Group>
    );
}