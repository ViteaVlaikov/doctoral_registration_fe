import Form from "react-bootstrap/Form";
import React from "react";
import {Link} from "react-router-dom";
import {SpecialityItem} from "./SpecialityItem";

export const ProfileItem = (props) => {
    const profile = props.profile;
    const specialities = profile.specialities;
    let studentsCount = 0;
    specialities.forEach(speciality=>
        studentsCount+= speciality.students.length
    )
    return (
        <Form.Group>
            <td>
                <tr>{profile.name}</tr>
            </td>
            <td>
                {specialities.map(speciality=>
                    <SpecialityItem
                        key={speciality.id}
                        speciality={speciality}
                        year={props.year}
                    />
                )}
            </td>
        </Form.Group>
    );
}