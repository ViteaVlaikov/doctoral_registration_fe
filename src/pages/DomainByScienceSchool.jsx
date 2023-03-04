import {useEffect, useState} from 'react';
import {MsalAuthenticationTemplate} from '@azure/msal-react';
import {InteractionType} from '@azure/msal-browser';
import {loginRequest, protectedResources} from "../authConfig";
import useFetchWithMsal from '../hooks/useFetchWithMsal';
import {useParams} from "react-router-dom";
import {DomainByScienceSchoolList} from "../components/science/list_view/DomainByScienceSchoolList";

const DomainByScienceSchoolAndYearContext = () => {
    const {error, execute} = useFetchWithMsal({
        scopes: protectedResources.domain.scopes.read,
    });

    const [domainData, setDomainData] = useState(null);
    const {school_id} = useParams();
    const {year} = useParams();
    useEffect(() => {
        if (!domainData) {
            execute("GET", protectedResources.domain.endpoint + '/schools/' + school_id + '/' + year)
                .then((response) => {
                    setDomainData(response);
                });
        }
    }, [execute, domainData])

    if (error) {
        return <div>Error: {error.message}</div>;
    }
    return <>{domainData ? <DomainByScienceSchoolList year={year} domainData={domainData}/> : null}</>;
}
export const DomainByScienceSchool = () => {
    const authRequest = {
        ...loginRequest,
    };
    return (
        <MsalAuthenticationTemplate
            interactionType={InteractionType.Redirect}
            authenticationRequest={authRequest}
        >
            <DomainByScienceSchoolAndYearContext/>
        </MsalAuthenticationTemplate>
    );
};