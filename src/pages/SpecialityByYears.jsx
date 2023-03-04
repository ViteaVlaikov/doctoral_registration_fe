import {useEffect, useState} from 'react';
import {MsalAuthenticationTemplate} from '@azure/msal-react';
import {InteractionType} from '@azure/msal-browser';
import {loginRequest, protectedResources} from "../authConfig";
import useFetchWithMsal from '../hooks/useFetchWithMsal';
import {ScienceList} from "../components/science/list_view/ScienceList";
import {ScienceByYearsList} from "../components/science/list_view/ScienceByYearsList";
import {useParams} from "react-router-dom";
import {SpecialityByYearsList} from "../components/science/list_view/SpecialityByYearsList";


const SpecialityContext = () => {
    const { error, execute } = useFetchWithMsal({
        scopes: protectedResources.specialities.scopes.read,
    });

    const [specialityData, setSpecialityData] = useState(null);
    const params = useParams();
    console.log(params);
    useEffect(() => {
        if (!specialityData) {
            execute("GET", protectedResources.specialities.endpoint + '/' + params.profile_id + '/' + params.year)
                .then((response) => {
                    setSpecialityData(response);
                    console.log(response);

                });
        }
    }, [execute, specialityData])

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return <>{specialityData ? <SpecialityByYearsList specialityData={specialityData} /> : null}</>;
}

export const SpecialityByYears = () => {
    const authRequest = {
        ...loginRequest,
    };

    return (
        <MsalAuthenticationTemplate
            interactionType={InteractionType.Redirect}
            authenticationRequest={authRequest}
        >
            <SpecialityContext />
        </MsalAuthenticationTemplate>
    );
};