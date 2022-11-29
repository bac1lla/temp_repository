import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {publicRoutes} from "../routes";
import Auth from "../pages/Auth";

const AppRouter = () => {
    const auth = true

    return (
        <Routes>
            {/*{auth && authRoutes.map(({path, Component}) =>*/}
            {/*    <Route key={path} path={path} element={Component}/>*/}
            {/*)}*/}
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={Component}/>
            )}
            <Route path='*' element={<Auth />} />
        </Routes>
    );
};

export default AppRouter;