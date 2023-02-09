import Form from "react-bootstrap/Form";
import ListGroup from "react-bootstrap/ListGroup";


export const StudentItem = (props) => {
    const viewTemplate = (
        <div className="todo-view">
            <Form.Group>
                <td>{props.student.firstName}</td>
                <td>{props.student.lastName}</td>
                {/*<label className="todo-label" htmlFor={props.student.id}>*/}
                {/*    {props.student.firstName}*/}
                {/*</label>*/}
            </Form.Group>
        </div>
    );
    // return <ListGroup.Item className="todo-item">{viewTemplate}</ListGroup.Item>;
    return props.student
}