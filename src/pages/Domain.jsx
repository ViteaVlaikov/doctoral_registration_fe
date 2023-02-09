import {useEffect, useState} from 'react';
import {MsalAuthenticationTemplate} from '@azure/msal-react';
import {InteractionType} from '@azure/msal-browser';
import {loginRequest, protectedResources} from "../authConfig";
import useFetchWithMsal from '../hooks/useFetchWithMsal';
import {ScienceList} from "../components/science/ScienceList";
import {DomainList} from "../components/science/DomainList";
import {useParams} from "react-router-dom";

const DomainContext = () => {
    const { error, execute } = useFetchWithMsal({
        scopes: protectedResources.domain.scopes.read,
    });

    const [domainData, setDomainData] = useState(null);
    useEffect(() => {
        if (!domainData) {
            execute("GET", protectedResources.domain.endpoint)
                .then((response) => {
                    setDomainData(response);
                    console.log(response)
                });
        }
    }, [execute, domainData])

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return <>{domainData ? <DomainList domainData={domainData} /> : null}</>;
}
export const Domain = () => {
    const authRequest = {
        ...loginRequest,
    };
    const param = useParams();
    console.log(param);
    return (
        <MsalAuthenticationTemplate
            interactionType={InteractionType.Redirect}
            authenticationRequest={authRequest}
        >
            <DomainContext />
        </MsalAuthenticationTemplate>
    );
};