import {useEffect, useState} from 'react';
import {MsalAuthenticationTemplate} from '@azure/msal-react';
import {InteractionType} from '@azure/msal-browser';
import {loginRequest, protectedResources} from "../authConfig";
import useFetchWithMsal from '../hooks/useFetchWithMsal';
import {ScienceList} from "../components/science/list_view/ScienceList";


const ScienceContext = () => {
    const { error, execute } = useFetchWithMsal({
        scopes: protectedResources.science.scopes.read,
    });

    const [scienceData, setScienceData] = useState(null);

    useEffect(() => {
        if (!scienceData) {
            execute("GET", protectedResources.science.endpoint)
                .then((response) => {
                    setScienceData(response);
                    console.log(response);
                });
        }
    }, [execute, scienceData])

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return <>{scienceData ? <ScienceList scienceData={scienceData} /> : null}</>;
}

export const Science = () => {
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