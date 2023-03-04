import Form from "react-bootstrap/Form";
import ListGroup from "react-bootstrap/ListGroup";
import {Link} from "react-router-dom";


export const SpecialityItem = (props) => {
    const speciality = props.speciality;
    return (
        <Form.Group>
            <td>
                <tr></tr>
                <tr>
                    {speciality.name}
                </tr>
            </td>
            <td>
                <tr></tr>
                <tr>
                    <Link to={String("/students/" + speciality.id + "/" + props.year)}>{speciality.students.length}</Link>
                </tr>
            </td>
        </Form.Group>
    );
}