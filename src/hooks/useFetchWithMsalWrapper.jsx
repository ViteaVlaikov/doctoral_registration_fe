import {useFetchWithMsalAuthentication} from "./useFetchWithMsalAuthentication";
import useFetchWithMsal from "./useFetchWithMsal";

export const useFetchWithMsalWrapper = (msalRequest) => {
    const {result, errorAuth} = useFetchWithMsalAuthentication(msalRequest);
    const {execute, errorFetch} = useFetchWithMsal(result, errorAuth);

    return {
        result,
        execute,
        errorAuth,
        errorFetch
    };
};