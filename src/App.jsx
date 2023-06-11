import {Route, Routes} from "react-router-dom";
import {MsalProvider} from "@azure/msal-react";

import {PageLayout} from "./main/react/doctoral_registration/components/layout/PageLayout";

import "./styles/App.css";
import StudentFilterPage from "./main/react/doctoral_registration/pages/StudentFilterPage";
import SupervisorPage from "./main/react/doctoral_registration/pages/SupervisorPage";
import StudentFormPage from "./main/react/doctoral_registration/pages/StudentFormPage";

const Pages = () => {
    return (
        <Routes>
            <Route path="/" element={<StudentFilterPage/>}/>
            <Route path="/create_student" element={<StudentFormPage/>}/>
            <Route path="/supervisors" element={<SupervisorPage/>}/>
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
const App = ({instance}) => {

    return (
        <MsalProvider instance={instance}>
            <PageLayout>
                <Pages/>
            </PageLayout>
        </MsalProvider>
    );
};

export default App;
