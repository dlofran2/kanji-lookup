import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import AppContainer from '../containers/App';
import HomeContainer from '../containers/Home';
import AboutContainer from '../containers/About';
import KanjiDataContainer from '../containers/KanjiData';

const routes = (
  <BrowserRouter>
    <div>
      <Route path='/' component={AppContainer} />
      <Route exact path='/' component={HomeContainer} />
      <Route path='/about' component={AboutContainer} />
      <Route path='/kanji' component={KanjiDataContainer} />
    </div>
  </BrowserRouter>
)

export default routes
