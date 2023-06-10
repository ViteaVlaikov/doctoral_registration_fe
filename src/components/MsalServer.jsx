import useFetchWithMsal from "../hooks/useFetchWithMsal";
import {protectedResources} from "../authConfig";
import {useEffect, useState} from "react";

export class MsalServer {
    static serverData;

    constructor() {
        MsalContext();
    }
}
const MsalContext = () => {
    const {error, execute} = useFetchWithMsal({
        scopes: protectedResources.specialities.scopes.read,
    });

    const [specialityData, setSpecialityData] = useState(null);
    useEffect(() => {
            execute("GET", protectedResources.specialities.endpoint)
                .then((response) => {
                    MsalServer.serverData = response;
                    console.log(response);

                });
    }, [execute, specialityData])

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    // return <>{specialityData ? <div> {specialityData.map(speciality=><div>{speciality.id}</div>)} </div> : null}</>;
    return specialityData.map(speciality=>{speciality.id});
}