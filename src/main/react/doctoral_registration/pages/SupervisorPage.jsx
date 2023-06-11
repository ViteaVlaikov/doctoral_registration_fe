import React, {useEffect, useState} from 'react';
import {Offcanvas} from "react-bootstrap";
import SupervisorForm from "../components/inputform/supervisor/SupervisorForm";
import Server from "../server/Server";
import SupervisorList from "../components/list/supervisor/SupervisorList";
import Supervisor from "../components/domains/Supervisor";
import ControlBox from "../components/controlbox/ControlBox";
import ButtonUp from "../components/controlbox/ButtonUp";
import School from "../components/domains/School";
import ButtonBox from "../components/controlbox/ButtonBox";
import Images from "../../../resources/settings/Images";
import {useFetchWithMsalWrapper} from "../../../../hooks/useFetchWithMsalWrapper";
import {protectedResources} from "../../../../authConfig";
import LoadingSpinner from "../components/spinner/LoadingSpinner";

const SupervisorPage = () => {

    const {result, execute} = useFetchWithMsalWrapper({
        scopes: protectedResources.country.scopes.read,
    })

    const [supervisors, setSupervisors] = useState([]);

    const [schools, setSchools] = useState([]);

    const [supervisor, setSupervisor] = useState(null);

    const [isVisible, setVisible] = useState(false);

    const [title, setTitle] = useState();

    const CREATE = 'Inregistratea';

    const UPDATE = 'Editarea datelor';

    useEffect(() => {
        if (result)
            Server.get(execute, Server.GET_ALL.SUPERVISORS, setSupervisors)
                .map(Supervisor.fromObject).build();
    }, [result])

    useEffect(() => {
        if (result)
            Server.get(execute, Server.GET_ALL.SCHOOLS, setSchools)
                .map(School.fromObject).build();
    }, [result]);

    const onSelect = (s) => {
        s === null ? setTitle(CREATE) : setTitle(UPDATE);
        setSupervisor(() => s);
        setVisible(true);
    }

    const onSave = (s) => {
        if (s.id !== null) {
            Server.update(execute, Server.GET_ALL.SUPERVISORS + "/" + s.id, s).then(s => {
                let supervisor = supervisors
                    .filter(supervisor => supervisor.id === s.id)[0];
                supervisor.copy(s);
                setSupervisors(() => supervisors);
            });
        } else {
            Server.post(execute, Server.GET_ALL.SUPERVISORS, s).then(s => {
                setSupervisors(supervisors => [s, ...supervisors]);
            });
        }
        setVisible(false);
    }

    if (!result) {
        return <LoadingSpinner/>
    }

    return (
        <div>
            <SupervisorList
                supervisors={supervisors}
                onSelectedSupervisor={onSelect}/>
            <Offcanvas
                show={isVisible}
                onHide={() => setVisible(false)}
                placement={'start'}
                name={'form'}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>{title}</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <SupervisorForm
                        supervisor={supervisor}
                        setSupervisor={onSave}
                        schools={schools}/>
                </Offcanvas.Body>
            </Offcanvas>
            <ControlBox>
                <ButtonBox
                    image={Images.ADD}
                    onClick={() => onSelect(null)}/>
                <ButtonUp/>
            </ControlBox>
        </div>
    );
};

export default SupervisorPage;