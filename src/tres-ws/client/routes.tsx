import * as React from 'react';
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory, IndexRedirect } from 'react-router';

import { App } from './containers/app';
import { Main } from './containers/main';

import { MainAdministration } from './containers/main_administration';
import { AdMain } from './components/main_administration/adMain';
import { AdData } from './components/main_administration/adData';

export default render((
    <Router history={ browserHistory }>
        <Route path='/' component={ App } >
            <Route path="main" component={ Main }>
                <IndexRedirect to="/main/administration/admain" />
                <Route path="administration" component={ MainAdministration }>
                    <IndexRoute component={ AdMain }/>
                    <Route path="admain" component={ AdMain }/>
                    <Route path="addata" component={ AdData }/>
                </Route>
            </Route>
        </Route>
    </Router>

), document.getElementById("main"));
