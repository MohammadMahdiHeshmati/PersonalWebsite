import Organization from './pages/Organization'
import EmployeeInfo from './pages/EmployeeInfo'
import NotFound from './pages/NotFound'

const Routes = [
    { path: '/', element: <Organization /> },
    { path: '/employeeInfo/:employeeID', element: <EmployeeInfo /> },
    { path: '*', element: <NotFound /> }
]

export default Routes