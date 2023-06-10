import useFetchWithMsal from "../../../../hooks/useFetchWithMsal";
import {protectedResources} from "../../../../authConfig";

const Server = {
    SERVER_URL: "http://localhost:8080/api",
    SCIENCES_URL: "http://localhost:8081/api/sciences",
    GET_ALL: {
        SCHOOLS: "/schools",
        DOMAINS: "/domains",
        SPECIALITIES: "/specialities",
        COUNTRIES: "/countries",
        SUPERVISORS: "/supervisors",
        ORDER_TYPES: "/orders/types",
        STUDENTS: "/students",
    },
    GET_BY_ID: {
        SUPERVISORS_BY_SCHOOL: (schoolId) => `/supervisors/schools/${schoolId}`,
        SPECIALITIES_BY_SCHOOL: (schoolId) => `/specialities/schools/${schoolId}`,
        DOMAINS_BY_SCHOOL: (schoolId) => `/domains/school/${schoolId}`,
        STUDENT: (studentId) => `/students/${studentId}`,
    },
    FILTER: {
        STUDENTS: "/students/filter",
    },
    STRATEGY: {
        WRITE: 1,
        ADD: 2,
    },
    POSITION: {
        START: 1,
        END: 2,
    },
};

const useServerRequest = () => {
    const {error, execute} = useFetchWithMsal({
        scopes: protectedResources.specialities.scopes.read,
    });

    return async (method, path) => {
        const response = await execute(method, path)
        console.log(response)
        return response;
    };
};

const useServer = () => {
    const request = useServerRequest();

    const getAll = async (path) => {
        const response = await request("GET", path);
        return response;
    };

    const getById = async (path, id) => {
        const endpoint = path(id);
        const response = await request("GET", endpoint);
        return response;
    };

    return {
        getAll,
        getById,
    };
};

export default useServer;
