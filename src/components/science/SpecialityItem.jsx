import Form from "react-bootstrap/Form";
import ListGroup from "react-bootstrap/ListGroup";


export const SpecialityItem = (props) => {
    const viewTemplate = (
        <div className="todo-view">
            <Form.Group>
                <label className="todo-label" htmlFor={props.id}>
                    {props.name}
                </label>
            </Form.Group>
        </div>
    );
    return <ListGroup.Item className="todo-item">{viewTemplate}</ListGroup.Item>;
}