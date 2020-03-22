import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Imporar from './components/importar';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Imporar} />
    </Switch>
);

export default Routes;