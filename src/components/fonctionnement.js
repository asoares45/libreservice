import React, { Component } from 'react';
import { I18n, Trans } from 'react-i18next';
import Header from './inclus/header';
import Footer from './inclus/footer';

export default class tarif extends Component {
  render() {
    return (
      <I18n ns="translations">
        {
          (t, { i18n }) => (
            <div>
            <Header />
              <div id="phoneBackground" className="row">
                <div id="img_container" className="hidden-xs">
                  <img className="img-responsive" style={{width: '100%'}} src={t('fonctionnementImg1')} />
                </div>
                <div className="hidden-lg hidden-sm hidden-md hidden-xl">
                  <img className="img-responsive img-center" style={{width: '100%'}} src={t('fonctionnementImg2')} />
                </div>
              </div>
              <div className="row m0">
                <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1 col-xs-12 col-xs-offset-0 no-padding">
                  <div className="yt-video-container">
                    <iframe width="100%" height="auto" src={t('fonctionnementVideo')} frameBorder="0" allowFullScreen=""></iframe>
                  </div>
                </div>
              </div>
              <div className="row m0 blueBackground">
                <div className="col-lg-8 col-lg-offset-2 col-xs-10 col-xs-offset-1 no-padding mt60">
                  <div className="row">
                    <div className="imageLeftText">
                      <img src={t('fonctionnementImg3')} />
                    </div>
                    <div className="textRight">
                      <p className="header text-white pl30">{t('fonctionnement1header1')}</p>
                      <p className="normalText text-white">{t('fonctionnement1Texte1')}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="imageLeftText">
                      <img src={t('fonctionnementImg4')} />
                    </div>
                    <div className="textRight">
                      <p className="header text-white">{t('fonctionnement2header1')}</p>
                      <p className="normalText text-white">{t('fonctionnement2Texte1')}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="imageLeftText">
                      <img src={t('fonctionnementImg5')} />
                    </div>
                    <div className="textRight">
                      <p className="header text-white">{t('fonctionnement3header1')}</p>
                      <p className="normalText text-white">{t('fonctionnement3Texte1')}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="imageLeftText">
                      <img src={t('fonctionnementImg6')} />
                    </div>
                    <div className="textRight">
                      <p className="header text-white">{t('fonctionnement4header1')}</p>
                      <p className="normalText text-white">{t('fonctionnement4Texte1')}</p>
                    </div>
                  </div>
                  <div className="center-block center-inside">
                    <a href="https://www4.rentcentric.com/Client6145/DiscountQuebecSelfServiceMobile/DQinscription.aspx?LocationCode=LAX&lang=fr" className="btn btn-lg inline-block greensubsribeButton">{t('inscrivez-vous')}</a>
                  </div>
                </div>
              </div>
              <Footer />
            </div>
          )
        }
   </I18n>
   );
 }
}
