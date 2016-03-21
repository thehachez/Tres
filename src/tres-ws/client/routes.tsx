import * as React from 'react';
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory, IndexRedirect } from 'react-router';

import { App } from './containers/app';
import { Main } from './containers/main';

export default render((
    <Router history={ browserHistory }>
        <Route path='/' component={ App } >
            <IndexRedirect to="/main" />
            <Route path="main" component={ Main }></Route> 
        </Route>
    </Router>
), document.getElementById("main"));
