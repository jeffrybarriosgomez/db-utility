import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Imporar from './components/importar';
import Qsql from './components/qsql';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Imporar} />
        <Route exact path="/qsql" component={Qsql} />
    </Switch>
);

export default Routes;