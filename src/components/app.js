import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { I18n, Trans } from 'react-i18next';
import Header from './inclus/header';
import Footer from './inclus/footer';

export default class App extends Component {
  render() {
    return (
      <I18n ns="translations">
        {
          (t, { i18n }) => (
      <div>
        <Header />
      <div id="phoneBackground" className="row">
        <div id="img_container" className="hidden-xs gray-background">
          <img className="img-responsive" style={{maxHeight: 728 }} src={t('accueils1image')} />
          <a className="btn btn-lg greenReserveButton" href={t('linkInscription')}>{t('réservez')}</a>
        </div>
        <div id="" className="hidden-lg hidden-sm hidden-md hidden-xl gray-background">
          <img className="img-responsive img-center" style={{width: '100%'}} src={t('accueils1image')} />
          <a className="btn btn-lg greenReserveButton" href={t('linkInscription')}>{t('réservez')}</a>
        </div>
      </div>
      <div className="row m0 greenBackground home mt-5">
        <div className="row m0">
          <div className="col-xs-offset-1 col-md-offset-2">
            <div className=" col-md-2 col-xs-12">
              <img className="v-align-img img-center center-block wp-image-223" src={t('accueilImg5')} />
              <p className="md-v-align-text">{t('Location à l’heure en libre-service')}</p>
            </div>
            <div className="col-md-2 col-xs-12">
              <img className="alignnone size-full wp-image-226 v-align-img img-center center-block" src={t('accueilImg6')} alt="icone-eco-sociale" />
              <p className="md-v-align-text">{t('Solution écosociale')}</p>
            </div>
            <div className="col-md-2 col-xs-12">
              <img className="alignnone size-full wp-image-227 v-align-img" src={t('accueilImg7')} alt="icone-inclusions" width="130" height="142" />
              <p className="md-v-align-text">{t('Essence et protections incluses')}</p>
            </div>
            <div className="col-md-2 col-xs-12">
              <img className="alignnone size-full wp-image-224 v-align-img" src={t('accueilImg8')} alt="icone-cochonnet" width="140" height="142" />
              <p className="md-v-align-text">{t('Aucuns frais d’inscription')}</p>
            </div>
          </div>
        </div>
        <div className="row m0" style={{margin: 'auto'}}>
          <div className="center-block center-inside">
            <a className="btn btn-lg mb50 mt50 inline-block whitesubsribeButton" href={t('linkInscription')}>{t('inscrivez-vous')}</a>
          </div>
        </div>
      </div>

      <div className="row m0 mt30">
        <div className="col-lg-3 col-lg-offset-2 hidden-md hidden-sm hidden-xs ">
          <img className="center-block" src={t('accueils3image1')} />
          <div className="center-block center-inside">
            <a className="btn btn-lg greensubsribeButton inline-block" style={{margin: '20px auto 60px auto'}} href={t('linkInscription')}>{t('inscrivez-vous')}</a>
          </div>
        </div>
        <div className="col-lg-4 col-lg-offset-1 col-xs-10 col-xs-offset-1">
          <p className="header text-green">{t('accueils3header')}</p>
          <p className="normalText">{t('accueils3t1')}</p>
          <p className="normalText">{t('accueils3t2')}</p>
          <div className="row m0">
            <img className="img-responsive img-center" src={t('accueils3image2')} />
          </div>
          <div className="row text-center">
            <Link to="/tarifs">{t('Tarifs')}</Link>
            <p className="tinyText mt30">{t('accueils3sub1')}<a href="https://www.discountquebec.com/libreservice/faq-fr/">{t('cliquez ici')}</a>{t('accueils3sub2')}</p>
          </div>
        </div>
      </div>
      <div className="row m0 greenBackground">
        <div className="row m0">
          <div className="col-md-6 col-md-offset-2 col-lg-4 col-lg-offset-2 col-xs-10 col-xs-offset-1" style={{zIndex: 10}}>
            <img id="leaf" className="center-block mt30" src={t('accueilImg6')} />
            <p className="header text-white mt15 ">{t('Une solution Écosociale')}</p>
            <p className="textNormal text-white">{t('accueils4sub1')}</p>
            <p className="textNormal text-white">{t('accueils4sub2')}</p>
            <Link to="/solution">{t('Solution Écosociale')}</Link>
          </div>
          <img className="img-responsive hidden-sm hidden-xs" style={{position: 'relative', top: -200, marginBottom: -150}} src={t('accueilImg12')} />
        </div>
      </div>
      <div className="row m0 blueBackground m0">
        <p className="text-center text-white header mt60 mb30">{t('Comment ça fonctionne?')}</p>
        <div className="col-lg-8 col-lg-offset-2 col-xs-10 col-xs-offset-1 no-padding">
          <div className="row m0 mb60">
            <div className="imageLeftText">
              <img style={{float: 'left'}} src={t('UserIcon')} />
            </div>
            <div className="textRight">
              <p className="header text-white pl30">{t('accueils5header1')}</p>
              <p className="normalText text-white">{t('accueils5text1')}</p>
            </div>
          </div>
          <div className="row m0 mb60">
            <div className="imageLeftText">
              <img style={{float: 'left'}} src={t('calendarIcon')} />
            </div>
            <div className="textRight">
              <p className="header text-white">{t('accueils5header2')}</p>
              <p className="normalText text-white">{t('accueils5text2')}</p>
            </div>
          </div>
          <div className="row m0 mb60">
            <div className="imageLeftText">
              <img style={{float: 'left'}} src={t('unlockIcon')} />
            </div>
            <div className="textRight">
              <p className="header text-white">{t('accueils5header3')}</p>
              <p className="normalText text-white">{t('accueils5text3')}</p>
            </div>
          </div>
          <div className="row m0 mb30">
            <div className="imageLeftText">
              <img style={{float: 'left'}} src={t('volantIcon')} />
            </div>
            <div className="textRight">
              <p className="header text-white">{t('accueils5header4')}</p>
              <p className="normalText text-white">{t('accueils5text4')}</p>
            </div>
          </div>
          <div className="center-block center-inside">
            <a className="btn btn-lg inline-block greensubsribeButton mt30" href={t('linkInscription')}>{t('inscrivez-vous')}</a>
          </div>
        </div>
      </div>
      <div className="row m0">
        <div className="col-lg-4 col-lg-offset-2 col-xs-10 col-xs-offset-1 no-padding">
          <p className="mt30 text-green subheader mdCenter">{t('accueils5text1')}</p>
          <ul className="check mt15">
            <li>{t('accueils6text2')}</li>
            <li>{t('accueils6text3')}</li>
            <li>{t('accueils6text4')}</li>
            <li>{t('accueils6text5')}</li>
            <li>{t('accueils6text6')}</li>
          </ul>
        </div>
        <div className="mb30 mt15 col-lg-2 mt100 col-xs-12 hidden-md hidden-sm hidden-xs">
          <div className="center-block center-inside">
            <a className="btn btn-lg mt30 inline-block greensubsribeButton" href={t('linkInscription')}>{t('Réservez maintenant!')}</a>
          </div>
        </div>
        <div className="mb30 mt15 col-lg-6 mt15 col-xs-12 hidden-xl hidden-lg">
          <div className="center-block center-inside">
            <a className="btn btn-lg mb30 inline-block greensubsribeButton" href={t('linkInscription')}>{t('Réservez maintenant!')}</a>
          </div>
        </div>
      </div>

      <div className="row m0 text-center hidden-md hidden-sm hidden-xs mt50">
        <p className="text-blue header">{t('Tout ça')}</p>
        <p className="text-green header-first">{t('Réservez maintenant!')}</p>
      </div>
      <Footer />
    </div>
  )
      }
    </I18n>
    );
  }
}
