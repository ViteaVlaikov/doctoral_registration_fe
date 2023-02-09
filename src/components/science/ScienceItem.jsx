import Form from "react-bootstrap/Form";
import ListGroup from "react-bootstrap/ListGroup";


export let ScienceItem = (props) => {
    const viewTemplate = (
        <div className="todo-view">
            <Form.Group>
                <td>
                    <tr></tr>
                    <tr>{props.science}</tr>
                </td>
                <td>
                    <tr>I</tr>
                    <tr>{props.array[0]}</tr>
                </td>
                <td>
                    <tr>II</tr>
                    <tr>{props.array[1]}</tr>
                </td>
                <td>
                    <tr>III</tr>
                    <tr>{props.array[2]}</tr>
                </td>
                <td>
                    <tr>IV</tr>
                    <tr>{props.array[3]}</tr>
                </td>
                <td>
                    <tr>Gratie I-II</tr>
                    <tr>{props.array[4]}</tr>
                </td>
                <td>
                    <tr>Gratie II</tr>
                    <tr>{props.array[5]}</tr>
                </td>
                <td></td>
                <td></td>
                {/*<label className="todo-label" htmlFor={props.id}>*/}
                {/*    {props.science}*/}
                {/*</label>*/}
                {/*<label className="todo-label" htmlFor={props.id}>*/}
                {/*    {props.array}*/}
                {/*</label>*/}
            </Form.Group>
        </div>
    );
    return <ListGroup.Item className="todo-item">{viewTemplate}</ListGroup.Item>;
}