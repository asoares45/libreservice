import React, { Component } from 'react';
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
                    <a className="no-padding pull-left" href="https://www.discountquebec.com/libreservice/##">
                      <img src={t('logo')} className="img-responsive mt30" style={{marginLeft:'15%'}} />
                    </a>
                  </div>
                  <div className="pull-right mt30 col-lg-7 col-lg-pull-1">
                    <div className="menu-menu-container">
                      <ul id="menu-menu-2" className="nav navbar-nav  footerTabs ">
                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-22">
                          <a href="https://www.discountquebec.com/libreservice/?page_id=29">{t('Accueil')}</a>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-272">
                          <a href="https://www.discountquebec.com/libreservice/tarifs/">{t('Tarifs')}</a>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-25">
                          <a href="https://www.discountquebec.com/libreservice/fonctionnement/">{t('Fonctionnement')}</a>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-27">
                          <a href="https://www.discountquebec.com/libreservice/solution/">{t('Solution Écosociale')}</a>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-251">
                          <a href="https://www.discountquebec.com/libreservice/faq-fr/">{t('FAQ')}</a>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-23">
                          <a href="https://www.discountquebec.com/libreservice/contactez-nous/">{t('Contactez-nous')}</a>
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
