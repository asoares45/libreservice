import React, { Component } from 'react';
import { I18n, Trans } from 'react-i18next';
import Header from './inclus/header';
import Footer from './inclus/footer';

export default class ContactezNous extends Component {
  render() {
    return (
      <I18n ns="translations">
        {
          (t, { i18n }) => (
            <div>
            <Header />
              <div id="phoneBackground" className="row">
                <div id="img_container" className="hidden-xs">
                  <img className="img-responsive" style={{width: '100%'}} src="./image/header-pub.png"/>
                </div>
                <div className="hidden-lg hidden-sm hidden-md hidden-xl">
                  <img className="img-center img-responsive alignnone wp-image-246 size-full" src="./image/pub-header-2.png" width={640} height={375} srcSet="https://www.discountquebec.com/libreservice/wp-content/uploads/2016/04/pub-header-2.png 640w, https://www.discountquebec.com/libreservice/wp-content/uploads/2016/04/pub-header-2-300x176.png 300w" sizes="(max-width: 640px) 100vw, 640px" />
                </div>
              </div>
              <div id="cardList" className="row greenBackground text-center">
                <div className="col-lg-10 col-lg-offset-1">
                  <div className="col-lg-4 col-lg-offset-0 col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 mr1 mb60 card">
                    <div className="col-xs-12">
                      <img className="img-responsive img-center circleImage mb10" src="./image/icone-telephone.png" />
                    </div>
                    <p className="text-blue subheader">{t('Par téléphone')}</p>
                    <p className="text-light-gray bigText">{t('numeroTelephone')}</p>
                  </div>
                  <div className="col-lg-4 col-lg-offset-0 col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 mr1 mb60 card">
                    <div className="col-xs-12">
                      <img className="img-responsive img-center circleImage mb10" src="./image/icone-poste.png"/>
                    </div>
                    <p className="text-blue subheader">{t('Par courriel')}</p>
                    <p className="text-light-gray mediumText">{t('courriel')}</p>
                  </div>
                  <div className="col-lg-4 col-lg-offset-0 col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 mr1 mb60 card">
                    <div className="col-xs-12">
                      <img className="img-responsive img-center circleImage mb10" src="./image/icone-email.png" />
                    </div>
                    <p className="text-blue subheader">{t('Par la poste')}</p>
                    <p className="text-light-gray mediumText">{t('FullAdress')}</p>
                  </div>
                </div>
              </div>
              <div className="row light-gray-background m0">
                <div className="col-xs-10 col-xs-offset-1 mt60 pl0 ">
                  <p className="largeText text-light-gray bBottom">{t('Écrivez-nous!')}</p>
                  <div id="ninja_forms_form_6_cont" className="ninja-forms-cont">
                    <div id="ninja_forms_form_6_wrap" className="ninja-forms-form-wrap">
                      <div id="ninja_forms_form_6_response_msg" style={{}} className="ninja-forms-response-msg " />
                        <form id="ninja_forms_form_6" encType="multipart/form-data" method="post" action="http://www.discountquebec.com/libreservice/wp-admin/admin-ajax.php?action=ninja_forms_ajax_submit" className="ninja-forms-form">
                        <input type="hidden" id="_wpnonce" name="_wpnonce" defaultValue="caac300061" />
                        <input type="hidden" name="_wp_http_referer" defaultValue="/libreservice/contactez-nous/" />
                        <input type="hidden" name="_ninja_forms_display_submit" defaultValue={1} />
                        <input type="hidden" name="_form_id" id="_form_id" defaultValue={6} />
                        <div className="hp-wrap">
                          <label>{t('MessageSecret1')}.
                            <input type="text" name="_g01FY" />
                            <input type="hidden" defaultValue="_g01FY" name="_hp_name" />
                          </label>
                        </div>
                        <div id="ninja_forms_form_6_all_fields_wrap" className="ninja-forms-all-fields-wrap">
                          <div className="field-wrap text-wrap label-above col-lg-6-wrap form-control-wrap left-wrap" id="ninja_forms_field_7_div_wrap" data-visible={1}>
                            <input type="hidden" id="ninja_forms_field_7_type" defaultValue="text" />
                            <label htmlFor="ninja_forms_field_7" id="ninja_forms_field_7_label">{t('Prénom')}
                              <span className="ninja-forms-req-symbol">
                                <strong>*</strong>
                              </span>
                            </label>
                            <input id="ninja_forms_field_7" data-mask data-input-limit data-input-limit-type="char" data-input-limit-msg="character(s) left" name="ninja_forms_field_7" type="text" className="ninja-forms-field  ninja-forms-req col-lg-6 form-control left " rel={7} />
                            <div id="ninja_forms_field_7_error" style={{display: 'none'}} className="ninja-forms-field-error">
                            </div>
                          </div>
                          <div className="field-wrap text-wrap label-above form-control-wrap col-lg-6-wrap right-wrap" id="ninja_forms_field_8_div_wrap" data-visible={1}>
                            <input type="hidden" id="ninja_forms_field_8_type" defaultValue="text" />
                            <label htmlFor="ninja_forms_field_8" id="ninja_forms_field_8_label" >{t('Nom')}
                              <span className="ninja-forms-req-symbol">
                                <strong>*</strong>
                              </span>
                            </label>
                            <input id="ninja_forms_field_8" data-mask data-input-limit data-input-limit-type="char" data-input-limit-msg="character(s) left" name="ninja_forms_field_8" type="text" className="ninja-forms-field  ninja-forms-req form-control col-lg-6 right " rel={8} />
                            <div id="ninja_forms_field_8_error" style={{display: 'none'}} className="ninja-forms-field-error">
                            </div>
                          </div>
                          <div className="field-wrap text-wrap label-above form-control-wrap" id="ninja_forms_field_9_div_wrap" data-visible={1}>
                            <input type="hidden" id="ninja_forms_field_9_type" defaultValue="text" />
                            <label htmlFor="ninja_forms_field_9" id="ninja_forms_field_9_label" >{t('Téléphone')}
                              <span className="ninja-forms-req-symbol">
                                <strong>*</strong>
                              </span>
                            </label>
                            <input id="ninja_forms_field_9" data-mask="(999) 999-9999" data-input-limit data-input-limit-type="char" data-input-limit-msg="character(s) left" name="ninja_forms_field_9" type="text" className="ninja-forms-field  ninja-forms-req form-control ninja-forms-mask" rel={9} />
                            <div id="ninja_forms_field_9_error" style={{display: 'none'}} className="ninja-forms-field-error">
                            </div>
                          </div>
                          <div className="field-wrap text-wrap label-above form-control-wrap" id="ninja_forms_field_10_div_wrap" data-visible={1}>
                            <input type="hidden" id="ninja_forms_field_10_type" defaultValue="text" />
                            <label htmlFor="ninja_forms_field_10" id="ninja_forms_field_10_label">{t('Courriel')}
                              <span className="ninja-forms-req-symbol">
                                <strong>*</strong>
                              </span>
                            </label>
                            <input id="ninja_forms_field_10" data-mask data-input-limit data-input-limit-type="char" data-input-limit-msg="character(s) left" name="ninja_forms_field_10" type="text" className="ninja-forms-field  ninja-forms-req form-control email " rel={10} />
                            <div id="ninja_forms_field_10_error" style={{display: 'none'}} className="ninja-forms-field-error">
                            </div>
                          </div>
                          <div className="field-wrap textarea-wrap label-above form-control-wrap text-gray-wrap" id="ninja_forms_field_11_div_wrap" data-visible={1}>
                            <input type="hidden" id="ninja_forms_field_11_type" defaultValue="textarea" />
                            <label htmlFor="ninja_forms_field_11" id="ninja_forms_field_11_label">{t('Commentaires')}</label>
                            <textarea name="ninja_forms_field_11" id="ninja_forms_field_11" className="ninja-forms-field  form-control text-gray" rel={11} data-input-limit data-input-limit-type="char" data-input-limit-msg="character(s) left" defaultValue={""} />
                            <div id="ninja_forms_field_11_error" style={{display: 'none'}} className="ninja-forms-field-error">
                            </div>
                          </div>
                          <div className="field-wrap submit-wrap label-above btn-wrap btn-lg-wrap green-background-wrap text-white-wrap text-uppercase-wrap" id="ninja_forms_field_13_div_wrap" data-visible={1}>
                            <input type="hidden" id="ninja_forms_field_13_type" defaultValue="submit" />
                            <div id="nf_submit_6">
                              <input type="submit" name="_ninja_forms_field_13" className="ninja-forms-field  btn btn-lg green-background text-white text-uppercase" id="ninja_forms_field_13" defaultValue="Soumettre" rel={13} />
                            </div>
                            <div id="nf_processing_6" style={{display: 'none'}}>
                              <input type="submit" name="_ninja_forms_field_13" className="ninja-forms-field  btn btn-lg green-background text-white text-uppercase" id="ninja_forms_field_13" defaultValue="Processing" rel={13} disabled />
                            </div>
                            <div id="ninja_forms_field_13_error" style={{display: 'none'}} className="ninja-forms-field-error">
                            </div>
                          </div>
                        </div>
                      </form>
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
