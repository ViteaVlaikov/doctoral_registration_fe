import Form from "react-bootstrap/Form";
import ListGroup from "react-bootstrap/ListGroup";


export let ScienceItem = (props) => {
    const viewTemplate = (
        <div className="todo-view">
            <Form.Group>
                <label className="todo-label" htmlFor={props.id}>
                    {props.science}
                </label>
            </Form.Group>
        </div>
    );
    return <ListGroup.Item className="todo-item">{viewTemplate}</ListGroup.Item>;
}