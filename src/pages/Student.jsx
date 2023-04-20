import { useEffect, useState } from 'react';
import { MsalAuthenticationTemplate } from '@azure/msal-react';
import { InteractionType } from '@azure/msal-browser';
import { loginRequest, protectedResources } from "../authConfig";
import useFetchWithMsal from '../hooks/useFetchWithMsal';
import {StudentList} from "../components/student/StudentList";
import axios from "axios";


const StudentsContext = () => {
    // const { error, execute } = useFetchWithMsal({
    //     scopes: protectedResources.students.scopes.read,
    // });

    const [studentData, setStudentData] = useState(null);

    async function getStudents() {
        console.log("StudentForm ---> load student ")
        const response = await axios.get('http://localhost:8080/api/students')
        console.log(response.data);
        setStudentData(response.data);
    }

    useEffect( () => {
        getStudents();
    }, [])


    // useEffect(() => {
    //     if (!studentData) {
    //         execute("GET", protectedResources.students.endpoint)
    //             .then((response) => {
    //                 setStudentData(response);
    //             });
    //     }
    // }, [execute, studentData])

    // if (error) {
    //     return <div>Error: {error.message}</div>;
    // }

    return <>{studentData ? <StudentList students={studentData} /> : null}</>;
}
export const Student = () => {
    // const authRequest = {
    //     ...loginRequest,
    // };

    return (
        // <MsalAuthenticationTemplate
        //     interactionType={InteractionType.Redirect}
        //     authenticationRequest={authRequest}
        // >
            <StudentsContext />
        // </MsalAuthenticationTemplate>
    );
};