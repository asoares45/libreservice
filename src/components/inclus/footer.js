import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { I18n, Trans } from 'react-i18next';

export default class footer extends Component {
  render() {
    return (
      <I18n ns="translations">
        {
          (t, { i18n }) => (
            <div id="footer" className="footer">
              <div className="container-fluid">
                <div className="row footer-top-row">
                  <div className=" col-xs-12  col-lg-12 col-xl-12">
                    <p>{t('Des questions?')}<br />{t('Appelez-nous!')}</p>
                  </div>
                </div>
                <div className="row footer-bottom-row">
                  <div className="col-lg-3 col-lg-offset-1 col-xs-6 no-padding">
                  <Link className="navbar-brand" to="/">
                    <img src={t('logo')} className="img-responsive logo" />
                  </Link>
                  </div>
                  <div className="pull-right mt30 col-lg-7 col-lg-pull-1">
                    <div className="menu-menu-container">
                      <ul id="menu-menu-2" className="nav navbar-nav  footerTabs ">
                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-22">
                          <Link to="/">{t('Accueil')}</Link>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-272">
                          <Link to="/tarifs">{t('Tarifs')}</Link>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-25">
                          <Link to="/fonctionnement">{t('Fonctionnement')}</Link>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-27">
                          <Link to="/solution">{t('Solution Écosociale')}</Link>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-251">
                            <Link to="/FAQ">{t('FAQ')}</Link>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-23">
                          <Link to="/contactez_nous">{t('Contactez-nous')}</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  )
      }
    </I18n>
    );
  }
}
