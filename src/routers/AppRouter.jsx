import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage";
import HomePage from "../pages/HomePage/HomePage";
import EmployeesPage from '../pages/EmployeesPage/EmployeesPage';
import PublicLayout from "../layouts/PublicLayout/PublicLayout";
import PrivateLayout from "../layouts/PrivateLayout/PrivateLayout";
import PrivateRouter from "./PrivateRouter";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";


const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <PublicLayout>
                            <LoginPage />
                        </PublicLayout>
                    } />
                <Route
                    path="/home"
                    element={
                        <PrivateRouter>
                            <PrivateLayout>
                                <HomePage />
                            </PrivateLayout>
                        </PrivateRouter>
                    } />
                <Route
                    path="/empleados"
                    element={

                        <PrivateRouter>
                            <PrivateLayout>
                                <EmployeesPage />
                            </PrivateLayout>
                        </PrivateRouter>

                    } />
                <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
        </Router>
    );
}


export default AppRouter;