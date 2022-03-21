import React from 'react'
import { Route } from 'react-router-dom';

const AppRoute = ({
    component: Component,
    layout: Layout,
    ...rest }) => {
    return (
        <div className="auth-wrapper">
        <div className="auth-inner">
        <Route
            {...rest}
            render={(props) => (
                <Layout>
                    <Component {...props} />
                </Layout>
            )}
        />
         </div>
        </div>
    )
}

export default AppRoute