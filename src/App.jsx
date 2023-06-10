import {Route, Routes} from "react-router-dom";
import {MsalProvider} from "@azure/msal-react";

import {PageLayout} from "./components/PageLayout";
import {Home} from "./pages/Home";
import {TodoList} from "./pages/TodoList";

import "./styles/App.css";
import {Speciality} from "./pages/Speciality";
import {Science} from "./pages/Science";
import {Student} from "./pages/Student";
import {Domain} from "./pages/Domain";
import {DomainByScienceSchool} from "./pages/DomainByScienceSchool";
import {SpecialityByYearsList} from "./components/science/list_view/SpecialityByYearsList";
import {SpecialityByYears} from "./pages/SpecialityByYears";
import {StudentByYearsList} from "./components/science/list_view/StudentByYearsList";
import {StudentByYears} from "./pages/StudentByYears";
import StudentFilterPage from "./main/react/doctoral_registration/pages/StudentFilterPage";
import {MsalServer} from "./components/MsalServer";

const Pages = () => {
    return (
        <Routes>
            <Route path="/specialities" element={<Speciality />} />
            <Route path="/specialities/:profile_id/:year" element={<SpecialityByYears />} />
            <Route path="/supervisors" element={<TodoList />} />
            <Route path="/science" element={<Science />} />
            <Route path="/student/:firstName/:lastName" element={<Student />} />
            <Route path="/students/:speciality_id/:year" element={<StudentByYears/>} />
            <Route path="/domain" element={<Domain />} />
            <Route path="/domain/:school_id/:year" element={<DomainByScienceSchool />} />

            <Route path="/" element={<Home />} />
            <Route path="/students" element={<StudentFilterPage/>} />
        </Routes>
    );
};

/**
 * msal-react is built on the React context API and all parts of your app that require authentication must be
 * wrapped in the MsalProvider component. You will first need to initialize an instance of PublicClientApplication
 * then pass this to MsalProvider as a prop. All components underneath MsalProvider will have access to the
 * PublicClientApplication instance via context as well as all hooks and components provided by msal-react. For more, visit:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-react/docs/getting-started.md
 */
const App = ({ instance }) => {
    return (
        <MsalProvider instance={instance}>
            <PageLayout>
                <Pages />
            </PageLayout>
        </MsalProvider>
    );
};

export default App;
