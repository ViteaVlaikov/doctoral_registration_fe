import React, {useState} from 'react';
import FilterAccordion from "../components/filter/student/FilterAccordion";
import {ButtonGroup, ButtonToolbar} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Server from "../server/Server";
import Student from "../components/domains/Student";
import ControlBox from "../components/controlbox/ControlBox";
import ButtonUp from "../components/controlbox/ButtonUp";
import ButtonBox from "../components/controlbox/ButtonBox";
import Images from "../../../resources/settings/Images";
import StudentList from "../components/list/student/StudentList";
import StudentModalView from "../components/view/student/StudentModalView";
import {protectedResources} from "../../../../authConfig";
import {useFetchWithMsalWrapper} from "../../../../hooks/useFetchWithMsalWrapper";
import LoadingSpinner from "../components/spinner/LoadingSpinner";

const StudentFilterPage = () => {

    const {result, execute} = useFetchWithMsalWrapper({
        scopes: protectedResources.country.scopes.read,
    })

    const [students, setStudents] = useState([]);

    const [visible, setVisible] = useState(false);

    const [selectStudent, setSelectStudent] = useState(null);

    async function getSchools() {
        return Server.request(execute, Server.GET_ALL.SCHOOLS);
    }

    async function getDomains(schoolId) {
        return Server.request(execute, Server.GET_BY_ID.DOMAINS_BY_SCHOOL + schoolId);
    }

    async function getCountries() {
        return Server.request(execute, Server.GET_ALL.COUNTRIES);
    }


    async function getSupervisorsBySchoolId(id) {
        return Server.request(execute, Server.GET_BY_ID.SUPERVISORS_BY_SCHOOL + id);
    }


    const getAllStudents = () => {
        Server.get(execute, Server.GET_ALL.STUDENTS, setStudents,).map(Student.fromServer).build();
    }

    const getStudentsByFilter = (params) => {
        Server.get(execute, Server.FILTER.STUDENTS, setStudents)
            .params(params).map(Student.fromServer).build();
    }

    const [requestMap, setRequestMap] = useState(new Map());

    const LIST = 1;

    const EXCEL = 2;

    const prepareMapToRequest = (type) => {
        console.log(requestMap);
        let request = "?";
        requestMap.forEach((values, key) => {
            let list = values.join(',');
            request += key + "=" + list + "&";
        })
        request = request.slice(0, -1);
        console.log(request);
        if (request === '') {
            if (type === LIST) {
                getAllStudents();
            }
            if (type === EXCEL) {

            }
        } else {
            if (type === LIST) {
                getStudentsByFilter(request);
            }
        }
    }

    const onSelectedStudent = (student) => {
        setSelectStudent(() => Student.fromObject(student));
        setVisible(true);
    }
    const hideViewWindow = () => {
        setVisible(false);
    }

    if (!result) {
        return <LoadingSpinner/>
    }

    return (
        <div>
            <FilterAccordion
                getSchools={getSchools}
                getDomains={getDomains}
                getSupervisors={getSupervisorsBySchoolId}
                getCountries={getCountries}
                requestMap={requestMap}
                setRequestMap={setRequestMap}>
            </FilterAccordion>
            <br/>
            <ButtonToolbar>
                <ButtonGroup className="me-2">
                    <Button
                        onClick={() => prepareMapToRequest(LIST)}>Lista</Button>
                    <Button
                        onClick={() => prepareMapToRequest(EXCEL)}>Excel</Button>
                </ButtonGroup>
                <div style={{width: "1em"}}></div>
            </ButtonToolbar>
            <br/>
            {students.length ?
                <StudentList
                    students={students}
                    onSelectedStudent={onSelectedStudent}
                /> : <></>
            }
            <StudentModalView
                isVisible={visible}
                onHide={hideViewWindow}
                student={selectStudent}
            />
            <ControlBox>
                <ButtonBox image={Images.ADD} onClick={console.log}/>
                <ButtonUp/>
            </ControlBox>
        </div>
    );
};

export default StudentFilterPage;