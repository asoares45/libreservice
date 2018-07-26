import React from 'react';
import ReactDOM from 'react-dom';
import { I18nextProvider } from "react-i18next";
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import i18n from "./i18n";

import App from './components/app';
import FAQ from './components/FAQ';
import Tarifs from './components/tarifs';
import ContactezNous from './components/contactezNous';
import Fonctionnement from './components/fonctionnement';
import SolutionEcosociale from './components/SolutionEcosociale';

ReactDOM.render(
  <I18nextProvider i18n={i18n}>
  <BrowserRouter>
    <Switch>
      <Route component={Tarifs} path="/tarifs"/>
      <Route component={FAQ} path="/FAQ"/>
      <Route component={ContactezNous} path="/contactez_nous"/>
      <Route component={Fonctionnement} path="/fonctionnement"/>
      <Route component={SolutionEcosociale} path="/Solution"/>
      <Route component={App} />
    </Switch>
  </BrowserRouter>
  </I18nextProvider>
  , document.querySelector('.racine'));
