import {AuthenticatedTemplate, useMsal} from "@azure/msal-react";
import {Col, Container, Row, Table} from "react-bootstrap";
import {Science} from "./Science";
import useFetchWithMsal from "../hooks/useFetchWithMsal";
import {protectedResources} from "../authConfig";
import {useEffect, useState} from "react";
import {ScienceByYears} from "./ScieceByYears";

/***
 * Component to detail ID token claims with a description for each claim. For more details on ID token claims, please check the following links:
 * ID token Claims: https://docs.microsoft.com/en-us/azure/active-directory/develop/id-tokens#claims-in-an-id-token
 * Optional Claims:  https://docs.microsoft.com/en-us/azure/active-directory/develop/active-directory-optional-claims#v10-and-v20-optional-claims-set
 */
export const Home = () => {
    const {instance} = useMsal();
    const activeAccount = instance.getActiveAccount();

    return (
        <>
            <AuthenticatedTemplate>
                {
                    activeAccount ?
                        <Container>
                            <div>
                                Welcome {activeAccount.name}
                            </div>
                            <ScienceByYears/>
                        </Container>
                        :
                        null
                }
            </AuthenticatedTemplate>
        </>
    );
}
