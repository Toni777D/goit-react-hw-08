import { Suspense } from 'react';
import { Route, Routes} from 'react-router-dom';
import HomePage from '../../pages/HomePage/HomePage';
import RegistrationPage from '../../pages/RegistrationPage/RegistrationPage';
import LoginPage from '../../pages/LoginPage/LoginPage';
import ContactsPage from '../../pages/ContactsPage/ContactsPage';
import Layout from '../Layout/Layout'




export default function App(){
   return (
    <Layout>
        <Suspense>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/register" element={<RegistrationPage />}/>
                <Route path="/login" element={<LoginPage />}/>
                <Route path="/contacts " element={<ContactsPage/>}/>
            </Routes>
        </Suspense>
    </Layout>
   )
};



    
