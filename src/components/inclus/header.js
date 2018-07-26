import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { I18n, Trans } from 'react-i18next';

export default class header extends Component {
  render() {
    return (
      <I18n ns="translations">
        {
          (t, { i18n }) => (
      <div>
        <div className="navbar twoRow">
          <div className="container-fluid navbarContainer">
            <div className="navbar-header">
              <div className="hidden-lg">
                <ul id="fluidTopMenu" className="topHeaderTabs nav navbar-top">
                <li className="lang-item lang-item-8 lang-item-en">
                    <a onClick={() => i18n.changeLanguage('en')}>{t('en')}</a>
                  </li>
                  <li className="lang-item lang-item-8 lang-item-en">
                    <a onClick={() => i18n.changeLanguage('fr')}>{t('fr')}</a>
                  </li>
                  <li className="blue-background menu-item roundRight roundLeft">
                    <a href="https://www4.rentcentric.com/Client6145/DiscountQuebecSelfServiceMobile/index.aspx?lang=fr">{t('Mon compte')}</a>
                  </li>
                </ul>
              </div>
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <img src="./image/menu-burger2.png" className="img-responsive" />
              </button>
              <Link className="navbar-brand" to="/">
                <img src={t('logo')} className="img-responsive logo" />
              </Link>
            </div>
            <div className="col-lg-6 col-lg-offset-6  col-md-2 col-md-offset-10 pull-right">
            <div className="hidden-sm hidden-md hidden-xs" id="accountAndSubscribe">
              <ul className="topHeaderTabs nav navbar-top">
                <li className="lang-item lang-item-8 lang-item-en">
                  <a onClick={() => i18n.changeLanguage('en')}>{t('en')}</a>
                </li>
                <li className="lang-item lang-item-8 lang-item-en">
                  <a onClick={() => i18n.changeLanguage('fr')}>{t('fr')}</a>
                </li>
                <li className="green-background menu-item roundLeft">
                  <a href="https://www4.rentcentric.com/Client6145/DiscountQuebecSelfServiceMobile/DQinscription.aspx?LocationCode=LAX&amp;lang=fr">{t('Inscription')}</a>
                </li>
                <li className="blue-background menu-item roundRight">
                  <a href="https://www4.rentcentric.com/Client6145/DiscountQuebecSelfServiceMobile/index.aspx?lang=fr">{t('Mon compte')}</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="pull-right no-padding collapse navbar-collapse" id="navi">
            <div className="hidden-md hidden-lg hidden-xl">
              <div className="menu-menu-container">
                <ul id="menu-menu" className="headerTabs nav navbar-nav col-xs-12 col-sm-pull-1 col-lg-pull-3 no-padding ">
                  <li id="menu-item-22" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-22">
                    <Link to="/">{t('Accueil')}</Link>
                  </li>
                  <li id="menu-item-272" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-272">
                    <Link to="/tarifs">{t('Tarifs')}</Link>
                  </li>
                  <li id="menu-item-25" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-25">
                    <Link to="/fonctionnement">{t('Fonctionnement')}</Link>
                  </li>
                  <li id="menu-item-27" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-27">
                    <Link to="/solution">{t('Solution Écosociale')}</Link>
                  </li>
                  <li id="menu-item-251" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-251">
                    <Link to="/FAQ">{t('FAQ')}</Link>
                  </li>
                  <li id="menu-item-23" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-23">
                    <Link to="/contactez_nous">{t('Contactez-nous')}</Link>
                  </li>
                </ul>
              </div>
            </div>
            {/*BEGIN NAV*/}
            <div className="hidden-xs hidden-sm">
              <div className="menu-menu-container">
                <ul id="menu-menu-1" className="headerTabs nav navbar-nav col-xs-12 col-sm-pull-1 col-lg-pull-3 no-padding ">
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
            {/*END NAV*/}

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
