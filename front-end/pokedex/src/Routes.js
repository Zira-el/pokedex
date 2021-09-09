import React from 'react';
import {
    BrowserRouter as Router, 
    Route, 
    Switch
} from  'react-router-dom';

import Main from './pages/Main';
import Capturados from './pages/Capturados';

function Routes() {
    return(
        <Router>
            <Switch>
                <Route path='/' exact component={Main} />
                <Route path='/capturados' component={Capturados} />
            </Switch>
        </Router>
    );
}

export default Routes;