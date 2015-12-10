/**
 * Created by Shawn Liu on 2015/12/10.
 */
import React                 from 'react';
import { Route, IndexRoute } from 'react-router';
import App            from 'containers/App';
import HomeView              from 'containers/HomeView';
import AboutView             from 'containers/AboutView';

export default (
  <Route component={App} path='/'>
    <IndexRoute component={HomeView}/>
    <Route component={AboutView} path='/about'/>
  </Route>
);

