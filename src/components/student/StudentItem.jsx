import Form from "react-bootstrap/Form";
import {Link} from "react-router-dom";


export const StudentItem = (props) => {
    return (
        <div className="todo-view">
            <Form.Group>
                <Link to={String("/student/" + props.student.firstName + '/' + props.student.lastName)}>
                    <td>{props.student.firstName}</td>
                    <td>{props.student.lastName}</td>
                </Link>
            </Form.Group>
        </div>
    );
}