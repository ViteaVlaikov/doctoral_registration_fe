import React, {useEffect, useState} from 'react';
import StudentForm from "../components/inputform/student/StudentForm";
import Server from "../server/Server";
import Country from "../components/domains/Country";
import School from "../components/domains/School";
import OrderType from "../components/domains/OrderType";
import ControlBox from "../components/controlbox/ControlBox";
import ButtonUp from "../components/controlbox/ButtonUp";
import {ItemsParser} from "../components/scrolllist/ScrollList";
import {useFetchWithMsalWrapper} from "../../../../hooks/useFetchWithMsalWrapper";
import {protectedResources} from "../../../../authConfig";
import LoadingSpinner from "../components/spinner/LoadingSpinner";
import Student from "../components/domains/Student";
import {useParams} from "react-router-dom";

const StudentFormPage = () => {

    const {result, execute} = useFetchWithMsalWrapper({
        scopes: protectedResources.country.scopes.read,
    })

    const [countries, setCountries] = useState(null);

    const [schools, setSchools] = useState(null);

    const [orderTypes, setOrdersTypes] = useState(null)

    const [specialities, setSpecialities] = useState();

    const [supervisors, setSupervisors] = useState();

    const [student, setStudent] = useState(null);

    const id = useParams().id;

    useEffect(() => {
        if (result) {
            if (id) {
                getStudentById(id);
            }
        }
    }, [result])

    const getStudentById = (id) => {
        Server.get(execute, Server.GET_BY_ID.STUDENT, setStudent).params(id).map(Student.fromServer).build();
    }

    useEffect(() => {
        if (result) {
            Server.get(execute, Server.GET_ALL.COUNTRIES, setCountries).map(Country.fromObject).build();
            Server.get(execute, Server.GET_ALL.SCHOOLS, setSchools).map(School.fromObject).build();
            Server.get(execute, Server.GET_ALL.ORDER_TYPES, setOrdersTypes).map(OrderType.fromObject).build();
        }
    }, [result])


    async function saveStudent(student) {
        if (id)
            Server.update(execute, Server.GET_ALL.STUDENTS + "/" + id, student).then()
        else
            Server.post(execute, Server.GET_ALL.STUDENTS, student).then()
    }

    async function getSpecialitiesBySchoolId(id) {
        Server.get(execute, Server.GET_BY_ID.SPECIALITIES_BY_SCHOOL, setSpecialities)
            .params(id).map(item => ItemsParser.toItem(ItemsParser.ENTITY.SPECIALITY, item)).build();
    }

    async function getSupervisorsBySchoolId(id) {
        Server.get(execute, Server.GET_BY_ID.SUPERVISORS_BY_SCHOOL, setSupervisors)
            .params(id).map(item => ItemsParser.toItem(ItemsParser.ENTITY.SUPERVISOR, item)).build();
    }

    if (id && !student) {
        return <LoadingSpinner/>
    }

    if (!result) {
        return <LoadingSpinner/>;
    }

    return (
        <>
            <StudentForm
                student={student}
                setStudent={setStudent}
                saveStudent={saveStudent}
                countries={countries}
                orderTypes={orderTypes}
                schools={schools}
                specialities={specialities}
                getSpecialities={getSpecialitiesBySchoolId}
                supervisors={supervisors}
                getSupervisors={getSupervisorsBySchoolId}
            />
            <ControlBox>
                <ButtonUp/>
            </ControlBox>
        </>
    );
};

export default StudentFormPage;