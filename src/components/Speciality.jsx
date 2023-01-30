import ListGroup from "react-bootstrap/ListGroup";
import React from "react";
import Form from "react-bootstrap/Form";

export const Speciality = (props) =>{
    return (
    <ListGroup.Item className="todo-item">
        <div className="todo-view">
            <Form.Group>
                <Form.Check
                    inline
                    id={props.id}
                    type="checkbox"
                />
                <label className="todo-label" htmlFor={props.id}>
                    {props.id}
                </label>
                <label className="todo-label" htmlFor={props.id}>
                    {props.name}
                </label>
            </Form.Group>
        </div>
    </ListGroup.Item>
);
}