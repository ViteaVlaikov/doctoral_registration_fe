import { useEffect, useState } from 'react';
import { MsalAuthenticationTemplate } from '@azure/msal-react';
import { InteractionType } from '@azure/msal-browser';
import { loginRequest, protectedResources } from "../authConfig";
import useFetchWithMsal from '../hooks/useFetchWithMsal';
import {StudentList} from "../components/student/StudentList";

const StudentsContext = () => {
    const { error, execute } = useFetchWithMsal({
        scopes: protectedResources.students.scopes.read,
    });

    const [studentData, setStudentData] = useState(null);

    useEffect(() => {
        if (!studentData) {
            execute("GET", protectedResources.students.endpoint)
                .then((response) => {
                    setStudentData(response);
                });
        }
    }, [execute, studentData])

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return <>{studentData ? <StudentList studentData={studentData} /> : null}</>;
}
export const Student = () => {
    const authRequest = {
        ...loginRequest,
    };

    return (
        <MsalAuthenticationTemplate
            interactionType={InteractionType.Redirect}
            authenticationRequest={authRequest}
        >
            <StudentsContext />
        </MsalAuthenticationTemplate>
    );
};