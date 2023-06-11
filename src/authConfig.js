/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import {LogLevel} from "@azure/msal-browser";

/**
 * Configuration object to be passed to MSAL instance on creation.
 * For a full list of MSAL.js configuration parameters, visit:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/configuration.md
 */
export const msalConfig = {
    auth: {
        clientId: "3290a8de-07b9-47b3-b0f3-1cab68ee6e8d", // This is the ONLY mandatory field that you need to supply.
        authority: "https://login.microsoftonline.com/792c38e4-acd6-467c-99ca-014e27a0dc15", // Defaults to "https://login.microsoftonline.com/common"
        redirectUri: "http://localhost:3000/", // You must register this URI on Azure Portal/App Registration. Defaults to window.location.origin
        postLogoutRedirectUri: "https://localhost:8080/logout/", // Indicates the page to navigate after logout.
        clientCapabilities: ["CP1"] // this lets the resource owner know that this client is capable of handling claims challenge.
    },
    cache: {
        cacheLocation: "localStorage", // Configures cache location. "sessionStorage" is more secure, but "localStorage" gives you SSO between tabs.
        storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    },
    system: {
        loggerOptions: {
            /**
             * Below you can configure MSAL.js logs. For more information, visit:
             * https://docs.microsoft.com/azure/active-directory/develop/msal-logging-js
             */
            loggerCallback: (level, message, containsPii) => {
                if (containsPii) {
                    return;
                }
                switch (level) {
                    case LogLevel.Error:
                        console.error(message);
                        return;
                    case LogLevel.Info:
                        console.info(message);
                        return;
                    case LogLevel.Verbose:
                        console.debug(message);
                        return;
                    case LogLevel.Warning:
                        console.warn(message);
                        return;
                }
            }
        }
    }
};

/**
 * Add here the endpoints and scopes when obtaining an access token for protected web APIs. For more information, see:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/resources-and-scopes.md
 */
export const protectedResources = {
    specialities: {
        endpoint: "http://localhost:8080/api/sciences/specialities",
        scopes: {
            read: ["api://3290a8de-07b9-47b3-b0f3-1cab68ee6e8d/Todolist.Read"],
        },
    },
    supervisors: {
        endpoint: "http://localhost:8080/api/supervisors",
        scopes: {
            read: ["api://3290a8de-07b9-47b3-b0f3-1cab68ee6e8d/Todolist.Read"],
        }
    },
    schools: {
        endpoint: "http://localhost:8080/api/schools",
        scopes: {
            read: ["api://3290a8de-07b9-47b3-b0f3-1cab68ee6e8d/Todolist.Read"],
        }
    },
    students: {
        endpoint: "http://localhost:8080/api/students",
        scopes: {
            read: ["api://3290a8de-07b9-47b3-b0f3-1cab68ee6e8d/Todolist.Read"],
        }
    },
    count_of_students: {
        endpoint: "http://localhost:8080/api/sciences/schools/years",
        scopes: {
            read: ["api://3290a8de-07b9-47b3-b0f3-1cab68ee6e8d/Todolist.Read"],
        }
    },
    domain: {
        endpoint: "http://localhost:8080/api/sciences/domains",
        scopes: {
            read: ["api://3290a8de-07b9-47b3-b0f3-1cab68ee6e8d/Todolist.Read"],
        }
    },
    country: {
        endpoint: "http://localhost:8080/api/countries",
        scopes: {
            read: ["api://3290a8de-07b9-47b3-b0f3-1cab68ee6e8d/Todolist.Read"],
        }
    },

}

/**
 * Scopes you add here will be prompted for user consent during sign-in.
 * By default, MSAL.js will add OIDC scopes (openid, profile, email) to any login request.
 * For more information about OIDC scopes, visit:
 * https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-permissions-and-consent#openid-connect-scopes
 */
export const loginRequest = {
    scopes: [...protectedResources.specialities.scopes.read,
        ...protectedResources.supervisors.scopes.read,
        ...protectedResources.schools.scopes.read,
        ...protectedResources.students.scopes.read,
        ...protectedResources.domain.scopes.read,
        ...protectedResources.count_of_students.scopes.read,
        ...protectedResources.country.scopes.read,
    ]
};