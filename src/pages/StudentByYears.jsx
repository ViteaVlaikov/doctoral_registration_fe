import { useEffect, useState } from 'react';
import { MsalAuthenticationTemplate } from '@azure/msal-react';
import { InteractionType } from '@azure/msal-browser';
import { loginRequest, protectedResources } from "../authConfig";
import useFetchWithMsal from '../hooks/useFetchWithMsal';
import {StudentList} from "../components/student/StudentList";
import {useParams} from "react-router-dom";
import {StudentByYearsList} from "../components/science/list_view/StudentByYearsList";

const StudentsByYearsContext = () => {
    const { error, execute } = useFetchWithMsal({
        scopes: protectedResources.students.scopes.read,
    });

    const [studentData, setStudentData] = useState(null);
    const params = useParams();
    useEffect(() => {
        if (!studentData) {
            execute("GET", protectedResources.students.endpoint + '/specialities/' + params.speciality_id + '/' + params.year)
                .then((response) => {
                    setStudentData(response);
                });
        }
    }, [execute, studentData])

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return <>{studentData ? <StudentByYearsList studentData={studentData} /> : null}</>;
}
export const StudentByYears = () => {
    const authRequest = {
        ...loginRequest,
    };

    return (
        <MsalAuthenticationTemplate
            interactionType={InteractionType.Redirect}
            authenticationRequest={authRequest}
        >
            <StudentsByYearsContext />
        </MsalAuthenticationTemplate>
    );
};