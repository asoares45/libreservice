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
              <div>
                <div id="phoneBackground" className="row gray-background">
                  <div id="img_container" className="hidden-sm hidden-xs"><img className="img-responsive" src="./image/page-pub_FR.png" alt="pub-header" data-pagespeed-url-hash={881075418} onLoad="pagespeed.CriticalImages.checkImageForCriticality(this);" />
                    <a className="btn btn-lg greenReserveButtonTarif" href="https://www4.rentcentric.com/Client6145/DiscountQuebecSelfServiceMobile/DQinscription.aspx?LocationCode=LAX&lang=fr">{t('réservez')}</a></div>
                  <div className="hidden-md hidden-lg hidden-xl "><img className="img-responsive img-center" style={{width: '100%'}} src="./image/DISCOUNT-SINT-Libre-service-Tarifs-mobile-v3.png" alt="pub-header" data-pagespeed-url-hash={646489467} onLoad="pagespeed.CriticalImages.checkImageForCriticality(this);" />
                    <a className="btn btn-lg greenReserveButtonTarif" href="https://www4.rentcentric.com/Client6145/DiscountQuebecSelfServiceMobile/DQinscription.aspx?LocationCode=LAX&lang=fr">{t('réservez')}</a></div>
                  <div className="row hidden-xs hidden-sm hidden-md">
                    <div className="col-xs-5 col-xs-offset-6">
                      <p style={{fontSize: 11, position: 'relative', top: '-150px'}}>{t('actif1Texte1')} {t('actif1Texte2')}{t('actif1Texte3')}</p>
                    </div>
                  </div>
                </div>
                <div id="cardList" className="row greenBackground">
                  <div className="col-lg-10 col-lg-offset-3 mt60" style={{clear: 'both'}}>
                    <div className="left-column-card mt100 card mb10">
                      <div className="col-xs-10 col-xs-offset-1"><img className="img-responsive img-center circleImage" src="./image/img-savana.png" data-pagespeed-url-hash={1594893647} onLoad="pagespeed.CriticalImages.checkImageForCriticality(this);" /></div>
                      <div className="row m0">
                        <p className="text-green subheader text-center">{t('actif1Texte1')}</p>
                      </div>
                      <div className="row m0" style={{marginLeft: 0, marginRight: 0, display: 'flex', lineHeight: 30}}>
                        <div className="col-xs-6 left-column text-center green-background"><span className="text-white">{t('SEMAINE')}</span></div>
                        <div className="col-xs-6 right-column text-center blue-background"><span className="text-white">{t('FIN DE SEMAINE')}</span></div>
                      </div>
                      <div className="col-xs-6 text-center" style={{padding: 15}}>
                        <p className="normalText">{t('tarifHeureSemaine')}</p>
                        <p className="normalText">{t('tarifJourSemaine')}</p>
                      </div>
                      <div className="col-xs-6 text-center" style={{padding: 15}}>
                        <p className="normalText">{t('tarifHeureFinSemaine')}</p>
                        <p className="normalText">{t('tarifJourFinSemaine')}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8 col-xs-offset-4 col-sm-offset-5 col-lg-offset-4 mt0 mb0 cardListSubtext" style={{color: 'white'}}>{t('FinDeSemaine')}</div>
                  <div className="col-xs-12 mt30 mb60">
                    <div className="center-block center-inside mt0"><a className="inline-block btn btn-lg text-uppercase text-green whiteButton" style={{backgroundColor: 'white'}} href="https://www4.rentcentric.com/Client6145/DiscountQuebecSelfServiceMobile/DQinscription.aspx?LocationCode=LAX&lang=fr">{t('Inscrivez-vous')}</a></div>
                  </div>
                </div>
                <div className="row m0">
                  <div className="row m0">
                    <div className="col-lg-8 col-lg-offset-2 col-xs-10 col-xs-offset-1">
                      <p className="mt60 text-green subheader">{t('accueils6text1')}</p>
                    </div>
                  </div>
                  <div className="row m0">
                    <div className="col-lg-4 col-lg-offset-2 col-xs-10 col-xs-offset-1">
                      <ul className="check">
                        <li>{t('accueils6text2')}</li>
                        <li>{t('accueils6text3')}</li>
                        <li>{t('accueils6text4')}</li>
                        <li>{t('accueils6text5')}</li>
                        <li>{t('accueils6text6')}</li>
                      </ul>
                    </div>
                    <div className="col-lg-2 col-sm-10 col-xs-offset-1 hidden-md hidden-sm hidden-xs">
                      <div className="center-block center-inside"><a className="btn btn-lg mt60 inline-block greensubsribeButton" href="https://www4.rentcentric.com/Client6145/DiscountQuebecSelfServiceMobile/DQinscription.aspx?LocationCode=LAX&lang=fr">{t('inscrivez-vous')}</a></div>
                    </div>
                    <div className="col-lg-6 mt15 col-xs-11 col-xs-offset-1 hidden-xl hidden-lg">
                      <div className="center-block center-inside"><a className="btn btn-lg inline-block mb30 greensubsribeButton" href="https://www4.rentcentric.com/Client6145/DiscountQuebecSelfServiceMobile/DQinscription.aspx?LocationCode=LAX&lang=fr">{t('Réservez maintenant!')}</a></div>
                    </div>
                    <div className="col-xs-12 mb30 text-center hidden-md hidden-sm hidden-xs mt50">
                      <p className="text-blue header"><b>{t('Tout ça')}</b></p>
                      <p className="text-green header-first"><b>{t('Réservez maintenant!')}</b></p>
                    </div>
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
