import {useMsal, useMsalAuthentication} from "@azure/msal-react";
import {InteractionType} from "@azure/msal-browser";

export const useFetchWithMsalAuthentication = (msalRequest) => {
    const { instance } = useMsal();
    const { result, error: msalError } = useMsalAuthentication(InteractionType.Popup, {
        ...msalRequest,
        account: instance.getActiveAccount(),
        redirectUri: '/redirect.html'
    });

    return {
        result,
        error: msalError
    };
};