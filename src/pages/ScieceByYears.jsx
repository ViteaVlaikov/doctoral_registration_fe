import {useEffect, useState} from 'react';
import {MsalAuthenticationTemplate} from '@azure/msal-react';
import {InteractionType} from '@azure/msal-browser';
import {loginRequest, protectedResources} from "../authConfig";
import useFetchWithMsal from '../hooks/useFetchWithMsal';
import {ScienceList} from "../components/science/list_view/ScienceList";
import {ScienceByYearsList} from "../components/science/list_view/ScienceByYearsList";


const ScienceContext = () => {
    const { error, execute } = useFetchWithMsal({
        scopes: protectedResources.count_of_students.scopes.read,
    });

    const [scienceData, setScienceData] = useState(null);

    useEffect(() => {
        if (!scienceData) {
            execute("GET", protectedResources.count_of_students.endpoint)
                .then((response) => {
                    setScienceData(response);

                });
        }
    }, [execute, scienceData])

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return <>{scienceData ? <ScienceByYearsList scienceData={scienceData} /> : null}</>;
}

export const ScienceByYears = () => {
    const authRequest = {
        ...loginRequest,
    };

    return (
        <MsalAuthenticationTemplate
            interactionType={InteractionType.Redirect}
            authenticationRequest={authRequest}
        >
            <ScienceContext />
        </MsalAuthenticationTemplate>
    );
};