import { Route, Switch } from 'react-router-dom';
import AppRoute from './AppRoute';
import PrivateRoute from './PrivateRoute';
import PrivateLayout from '../Layout/Private';
import PublicLayout from '../Layout/Public';
import Login from '../Components/Login/Login';
import Dashboard from '../Containers/Dashboard';

const Routing = () => {
    return (
        <Switch>
            <AppRoute
                exact
                path="/login"
                component={Login}
                layout={PublicLayout} />

            <PrivateRoute
                exact
                path="/"
                component={Dashboard}
                layout={PrivateLayout} />

            <Route
                path="*"
                component={() => (
                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100vh"
                    }}>
                        <h1 style={{ color: "#000", fontSize: "2rem" }}>Page Not Found!!</h1>
                    </div>
                )}
            />
        </Switch>
    )
}
export default Routing;
