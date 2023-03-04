import React, {useState} from "react";
import {Nav, Table} from "react-bootstrap";
import {SpecialityList} from "./SpecialityList";
import {AuthenticatedTemplate} from "@azure/msal-react";
import {Link} from "react-router-dom";

function parseToScience(array:string[]) {
    let sciences = [];
    array.map(s=>{
        let science = {};
        let str = String(s)
        let index = str.indexOf(',')
        science.id = str.substring(0,index)
        science.id = science.id.split("'")[1].split("'")
        science.name = str.substring(index)
        science.name = science.name.split("'")[1].split("'")
        sciences.push(science)
    });
    return sciences;
}
export const ScienceByYearsList = (props) => {
    const [data] = useState(props.scienceData);
    const sciences = parseToScience(Object.keys(data));
    const arrays = Object.values(data);
    return (
        <div className="data-area-div">
            <AuthenticatedTemplate>
                <Table>
                    <td>
                        <tr></tr>
                        <tr>{sciences[0].name}</tr>
                        <tr>{sciences[1].name}</tr>
                        <tr>{sciences[2].name}</tr>
                        <tr>{sciences[3].name}</tr>
                        <tr>{sciences[4].name}</tr>
                    </td>
                    <td>
                        <tr>I</tr>
                        <tr>
                            <Link to={String("/domain/" + sciences[0].id +"/1")}>
                                {arrays[0][0]}
                            </Link>
                        </tr>
                        <tr>
                            <Link to={String("/domain/" + sciences[1].id + "/1")}>
                                {arrays[1][0]}
                            </Link>
                        </tr>
                        <tr>
                            <Link to={String("/domain/" + sciences[2].id + "/1")}>
                                {arrays[2][0]}
                            </Link>
                        </tr>
                        <tr>
                            <Link to={String("/domain/" + sciences[3].id + "/1")}>
                                {arrays[3][0]}
                            </Link>
                        </tr>
                        <tr>
                            <Link to={String("/domain/" + sciences[3].id + "/1")}>
                                {arrays[3][0]}
                            </Link>
                        </tr>
                    </td>
                    <td>
                        <tr>II</tr>
                        <tr>
                            <Link to={String("/domain/" + sciences[0].id + "/2")}>
                                {arrays[0][1]}
                            </Link>
                        </tr>
                        <tr>
                            <Link to={String("/domain/" + sciences[1].id + "/2")}>
                                {arrays[1][1]}
                            </Link>
                        </tr>
                        <tr>
                            <Link to={String("/domain/" + sciences[2].id + "/2")}>
                                {arrays[2][1]}
                            </Link>
                        </tr>
                        <tr>
                            <Link to={String("/domain/" + sciences[3].id + "/2")}>
                                {arrays[3][1]}
                            </Link>
                        </tr>
                        <tr>
                            <Link to={String("/domain/" + sciences[4].id + "/2")}>
                                {arrays[4][1]}
                            </Link>
                        </tr>
                    </td>
                    <td>
                        <tr>III</tr>
                        <tr>
                            <Link to={String("/domain/" + sciences[0].id + "/3")}>
                                {arrays[0][2]}
                            </Link>
                        </tr>
                        <tr>
                            <Link to={String("/domain/" + sciences[1].id + "/3")}>
                                {arrays[1][2]}
                            </Link>
                        </tr>
                        <tr>
                            <Link to={String("/domain/" + sciences[2].id + "/3")}>
                                {arrays[2][2]}
                            </Link>
                        </tr>
                        <tr>
                            <Link to={String("/domain/" + sciences[3].id + "/3")}>
                                {arrays[3][2]}
                            </Link>
                        </tr>
                        <tr>
                            <Link to={String("/domain/" + sciences[4].id + "/3")}>
                                {arrays[4][2]}
                            </Link>
                        </tr>
                    </td>
                    <td>
                        <tr>IV</tr>
                        <tr>
                            <Link to={String("/domain/" + sciences[0].id + "/4")}>
                                {arrays[0][3]}
                            </Link>
                        </tr>
                        <tr>
                            <Link to={String("/domain/" + sciences[1].id + "/4")}>
                                {arrays[1][3]}
                            </Link>
                        </tr>
                        <tr>
                            <Link to={String("/domain/" + sciences[2].id + "/4")}>
                                {arrays[2][3]}
                            </Link>
                        </tr>
                        <tr>
                            <Link to={String("/domain/" + sciences[3].id + "/4")}>
                                {arrays[3][3]}
                            </Link>
                        </tr>
                        <tr>
                            <Link to={String("/domain/" + sciences[4].id + "/4")}>
                                {arrays[4][3]}
                            </Link>
                        </tr>
                    </td>
                    <td>
                        <tr>Gratie I-II</tr>
                        <tr>
                            <Link to={String("/domain/" + sciences[0].id + "/5")}>
                                {arrays[0][4]}
                            </Link>
                        </tr>
                        <tr>
                            <Link to={String("/domain/" + sciences[1].id + "/5")}>
                                {arrays[1][4]}
                            </Link>
                        </tr>
                        <tr>
                            <Link to={String("/domain/" + sciences[2].id + "/5")}>
                                {arrays[2][4]}
                            </Link>
                        </tr>
                        <tr>
                            <Link to={String("/domain/" + sciences[3].id + "/5")}>
                                {arrays[3][4]}
                            </Link>
                        </tr>
                        <tr>
                            <Link to={String("/domain/" + sciences[4].id + "/5")}>
                                {arrays[4][4]}
                            </Link>
                        </tr>
                    </td>
                    <td>
                        <tr>Gratie II</tr>
                        <tr>
                            <Link to={String("/domain/" + sciences[0].id + "/6")}>
                                {arrays[0][5]}
                            </Link>
                        </tr>
                        <tr>
                            <Link to={String("/domain/" + sciences[1].id + "/6")}>
                                {arrays[1][5]}
                            </Link>
                        </tr>
                        <tr>
                            <Link to={String("/domain/" + sciences[2].id + "/6")}>
                                {arrays[2][5]}
                            </Link>
                        </tr>
                        <tr>
                            <Link to={String("/domain/" + sciences[3].id + "/6")}>
                                {arrays[3][5]}
                            </Link>
                        </tr>
                        <tr>
                            <Link to={String("/domain/" + sciences[4].id + "/6")}>
                                {arrays[4][5]}
                            </Link>
                        </tr>
                    </td>
                </Table>
            </AuthenticatedTemplate>
        </div>

    );
}