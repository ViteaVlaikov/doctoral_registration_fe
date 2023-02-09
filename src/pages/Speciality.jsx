import { useEffect, useState } from 'react';
import { MsalAuthenticationTemplate } from '@azure/msal-react';
import { InteractionType } from '@azure/msal-browser';
import { SpecialityList } from '../components/science/SpecialityList';
import { loginRequest, protectedResources } from "../authConfig";
import useFetchWithMsal from '../hooks/useFetchWithMsal';


const SpecialityListContext = () => {
    const { error, execute } = useFetchWithMsal({
        scopes: protectedResources.specialities.scopes.read,
    });

    const [specialityData, setSpecialityData] = useState(null);

    useEffect(() => {
        if (!specialityData) {
            execute("GET", protectedResources.specialities.endpoint)
                .then((response) => {
                    setSpecialityData(response);
                });
        }
    }, [execute, specialityData])

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return <>{specialityData ? <SpecialityList specialityData={specialityData} /> : null}</>;
}
export const Speciality = () => {
    const authRequest = {
        ...loginRequest,
    };

    return (
        <MsalAuthenticationTemplate
            interactionType={InteractionType.Redirect}
            authenticationRequest={authRequest}
        >
            <SpecialityListContext />
        </MsalAuthenticationTemplate>
    );
};