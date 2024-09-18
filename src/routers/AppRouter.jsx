import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage";
import HomePage from "../pages/HomePage/HomePage";
import EmployeesPage from '../pages/EmployeesPage/EmployeesPage';
import PublicLayout from "../layouts/PublicLayout/PublicLayout";
import PrivateLayout from "../layouts/PrivateLayout/PrivateLayout";
import PrivateRouter from "./PrivateRouter";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import ViewEmployee from "../components/Employees/ViewEmployee/ViewEmployee";


const AppRouter = () => {
    return (
        <Router>
            <Routes>
                {/* Rutas Públicas */}
                <Route path="/" element={<PublicLayout />}>
                    <Route
                        path="/"
                        element={
                            <LoginPage />
                        } />
                </Route>

                {/* Rutas Privadas */}
                <Route path="/" element={<PrivateRouter><PrivateLayout /></PrivateRouter>}>

                    <Route
                        path="/home"
                        element={
                            <HomePage />
                        } />
                    <Route
                        path="/empleados"
                        element={
                            <EmployeesPage />
                        } />

                    <Route path="/empleados/:id" element={<ViewEmployee />} />
                </Route>

                <Route path="*" element={<NotFoundPage />} />

            </Routes>
        </Router>
    );
}


export default AppRouter;