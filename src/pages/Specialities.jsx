import { useEffect, useState } from 'react';
import { MsalAuthenticationTemplate } from '@azure/msal-react';
import { InteractionType } from '@azure/msal-browser';

import { ListView } from '../components/ListView';
import { loginRequest, protectedResources } from "../authConfig";
import useFetchWithMsal from '../hooks/useFetchWithMsal';

const SpecialitiesContent = () => {
    const { error, execute } = useFetchWithMsal({
        scopes: protectedResources.specialities.scopes.read,
    });

    const [specialitiesData, setSpecialitiesData] = useState(null);

    useEffect(() => {
        if (!specialitiesData) {
            execute("GET", protectedResources.specialities.endpoint).then((response) => {
                setSpecialitiesData(response);
            });
        }
    }, [execute, specialitiesData])

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return <>{specialitiesData ? <ListView specialitiesData={specialitiesData} /> : null}</>;

}

export const Specialities= () => {
    const authRequest = {
        ...loginRequest,
    };

    return (
        <MsalAuthenticationTemplate
            interactionType={InteractionType.Redirect}
            authenticationRequest={authRequest}
        >
            <SpecialitiesContent />
        </MsalAuthenticationTemplate>
    );
}