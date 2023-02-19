import React, {useState} from "react";
import {Nav} from "react-bootstrap";
import {SpecialityList} from "./SpecialityList";
import {AuthenticatedTemplate} from "@azure/msal-react";
import {Link} from "react-router-dom";

export const ScienceList = (props) => {
    const sciences = props.scienceData;
    // console.log(sciences);
    const scienceDomains = Array();
    sciences.forEach((science)=>{
        scienceDomains.push(science.scienceDomains);
    });
    // console.log(scienceDomains);
    const scienceBranches = Array();
    scienceDomains.forEach((domain)=>{
        domain.forEach((el)=>{
            scienceBranches.push(el.scienceBranches);
        })
    });
    // console.log(scienceBranches);
    const scienceProfiles = Array();
    scienceBranches.forEach((branch)=>{
        branch.forEach((el)=>{
            scienceProfiles.push(el.scienceProfiles);
        })
    });
    //console.log(scienceProfiles);
    const specialities = Array();
    scienceProfiles.forEach((profile)=>{
        profile.forEach((el)=>{
            specialities.push(el.specialities);
        })
    });
    console.log(specialities);
        return (
        <div className="data-area-div">
            <AuthenticatedTemplate>
                <table>
                    <td>
                        <tr></tr>
                        <tr>{sciences[0].name} {sciences[0].id}</tr>
                        <tr>{sciences[1].name} {sciences[0].id}</tr>
                        <tr>{sciences[2].name} {sciences[0].id}</tr>
                        <tr>{sciences[3].name} {sciences[0].id}</tr>
                        <tr>{sciences[4].name} {sciences[0].id}</tr>
                    </td>
                </table>
            </AuthenticatedTemplate>
        </div>

    );
}