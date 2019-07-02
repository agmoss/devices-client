import React from 'react';

import {Switch, Route} from 'react-router-dom';
import LineChart from '../../containers/LineChart';

const Main = props =>(
    <Switch>
        <Route exact path = "/" component={LineChart} />
    </Switch>
)

export default Main;