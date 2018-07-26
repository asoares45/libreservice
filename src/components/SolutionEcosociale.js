import React, { Component } from 'react';
import { I18n, Trans } from 'react-i18next';
import Header from './inclus/header';
import Footer from './inclus/footer';

export default class Solution extends Component {
  render() {
    return (
      <I18n ns="translations">
        {
          (t, { i18n }) => (
            <div>
              <Header />
              <div id="phoneBackground" className="row gray-background">
                <div id="img_container" className="hidden-xs">
                  <img className="img-responsive" src={t('solutionImg1')}/>
                </div>
                <div className="hidden-lg hidden-sm hidden-md hidden-xl">
                  <img src={t('solutionImg6')} className="img-responsive img-center" style={{width: '100%'}} />
                </div>
              </div>
              <div className="row greenBackground mt-5">
                <div className="col-md-8 col-md-offset-2 text-white normalText mt60 mb60" style={{lineHeight: 2}}>
                  {t('Solution1Texte1')}
                </div>
              </div>
              <div className="row mt60 m0">
                <div className="col-xs-10 col-xs-offset-1">
                  <p className="header-first text-green ">{t('Solution2Texte1')}</p>
                  <p className="italText text-blue">{t('Solution2Texte2')}</p>
                  <p className="italText text-blue">{t('Solution2Texte3')}</p>
                </div>
              </div>
              <div className="row m0">
                <div className="col-xs-10 col-xs-offset-1 ">
                  <p className="largeText text-light-gray bBottom pb5">{t('Solution3Header1')}</p>
                  <div id="ninja_forms_form_10_cont" className="ninja-forms-cont">
                    <div id="ninja_forms_form_10_wrap" className="ninja-forms-form-wrap">
                      <div id="ninja_forms_form_10_response_msg" style={{}} className="ninja-forms-response-msg " />
                      <form id="ninja_forms_form_10" encType="multipart/form-data" method="post" action="https://www.discountquebec.com/libreservice/solution/" className="ninja-forms-form">
                        <input type="hidden" id="_wpnonce" name="_wpnonce" defaultValue="0ae35f1968" />
                        <input type="hidden" name="_wp_http_referer" defaultValue="/libreservice/solution/" />
                        <input type="hidden" name="_ninja_forms_display_submit" defaultValue={1} />
                        <input type="hidden" name="_form_id" id="_form_id" defaultValue={10} />
                        <div className="hp-wrap">
                          <label>{t('MessageSecret1')}
                            <input type="text" defaultValue name="_OvvxW" />
                            <input type="hidden" defaultValue="_OvvxW" name="_hp_name" />
                          </label>
                        </div>
                        <div id="ninja_forms_form_10_all_fields_wrap" className="ninja-forms-all-fields-wrap">
                          <div className="field-wrap text-wrap label-above form-control-wrap" id="ninja_forms_field_21_div_wrap" data-visible={1}>
                            <input type="hidden" id="ninja_forms_field_21_type" defaultValue="text" />
                            <label htmlFor="ninja_forms_field_21" id="ninja_forms_field_21_label">{t('Organisme')}
                              <span className="ninja-forms-req-symbol">
                                <strong>*</strong>
                              </span>
                            </label>
                            <input id="ninja_forms_field_21" data-mask data-input-limit data-input-limit-type="char" data-input-limit-msg="character(s) left" name="ninja_forms_field_21" type="text" className="ninja-forms-field  ninja-forms-req form-control " rel={21} />
                            <div id="ninja_forms_field_21_error" style={{display: 'none'}} className="ninja-forms-field-error">
                            </div>
                          </div>
                          <div className="field-wrap text-wrap label-above form-control-wrap" id="ninja_forms_field_22_div_wrap" data-visible={1}>
                            <input type="hidden" id="ninja_forms_field_22_type" defaultValue="text" />
                            <label htmlFor="ninja_forms_field_22" id="ninja_forms_field_22_label">{t('Adresse')}
                              <span className="ninja-forms-req-symbol">
                                <strong>*</strong>
                              </span>
                            </label>
                            <input id="ninja_forms_field_22" data-mask data-input-limit data-input-limit-type="char" data-input-limit-msg="character(s) left" name="ninja_forms_field_22" type="text" className="ninja-forms-field  ninja-forms-req form-control " rel={22} />
                            <div id="ninja_forms_field_22_error" style={{display: 'none'}} className="ninja-forms-field-error">
                            </div>
                          </div>
                          <div className="field-wrap text-wrap label-above form-control-wrap" id="ninja_forms_field_23_div_wrap" data-visible={1}>
                            <input type="hidden" id="ninja_forms_field_23_type" defaultValue="text" />
                            <label htmlFor="ninja_forms_field_23" id="ninja_forms_field_23_label">{t('Ville')}
                              <span className="ninja-forms-req-symbol">
                                <strong>*</strong>
                              </span>
                            </label>
                            <input id="ninja_forms_field_23" data-mask data-input-limit data-input-limit-type="char" data-input-limit-msg="character(s) left" name="ninja_forms_field_23" type="text" className="ninja-forms-field  ninja-forms-req form-control " rel={23} />
                            <div id="ninja_forms_field_23_error" style={{display: 'none'}} className="ninja-forms-field-error">
                            </div>
                          </div>
                          <div className="field-wrap list-dropdown-wrap label-above form-control-wrap" id="ninja_forms_field_24_div_wrap" data-visible={1}>
                            <input type="hidden" id="ninja_forms_field_24_type" defaultValue="list" />
                            <input type="hidden" id="ninja_forms_field_24_list_type" defaultValue="dropdown" />
                            <label htmlFor="ninja_forms_field_24" id="ninja_forms_field_24_label">{t('Province')}
                              <span className="ninja-forms-req-symbol">
                                <strong>*</strong>
                              </span>
                            </label>
                            <select name="ninja_forms_field_24" id="ninja_forms_field_24" className="ninja-forms-field  ninja-forms-req form-control" rel={24}>
                              <option value="Alberta" style={{}}>{t('Alberta')}</option>
                              <option value="Colombie-Britanique" style={{}}>{t('Colombie-Britanique')}</option>
                              <option value="Ile-du-Prince-Édouard" style={{}}>{t('Ile-du-Prince-Édouard')}</option>
                              <option value="Manitoba" style={{}}>{t('Manitoba')}</option>
                              <option value="Nouveau-Brunswick" style={{}}>{t('Nouveau-Brunswick')}</option>
                              <option value="Nouvelle-Écosse" style={{}}>{t('Nouvelle-Écosse')}</option>
                              <option value="Nunavut" style={{}}>{t('Nunavut')}</option>
                              <option value="Ontario" style={{}}>{t('Ontario')}</option>
                              <option value="Québec" style={{}}>{t('Québec')}</option>
                              <option value="Saskatchewan" style={{}}>{t('Saskatchewan')}</option>
                              <option value="Terre Neuve et Labrador" style={{}}>{t('Terre Neuve et Labrador')}</option>
                              <option value="Territoire du Nord-Ouest" style={{}}>{t('Territoire du Nord-Ouest')}</option>
                              <option value="Territoire du Yukon" style={{}}>{t('Territoire du Yukon')}</option>
                            </select>
                            <div id="ninja_forms_field_24_error" style={{display: 'none'}} className="ninja-forms-field-error">
                            </div>
                          </div>
                          <div className="field-wrap text-wrap label-above form-control-wrap" id="ninja_forms_field_25_div_wrap" data-visible={1}>
                            <input type="hidden" id="ninja_forms_field_25_type" defaultValue="text" />
                            <label htmlFor="ninja_forms_field_25" id="ninja_forms_field_25_label">{t('Code Postal')}
                              <span className="ninja-forms-req-symbol">
                                <strong>*</strong>
                              </span>
                            </label>
                            <input id="ninja_forms_field_25" data-mask data-input-limit data-input-limit-type="char" data-input-limit-msg name="ninja_forms_field_25" type="text" className="ninja-forms-field  ninja-forms-req form-control address zip " rel={25} />
                            <div id="ninja_forms_field_25_error" style={{display: 'none'}} className="ninja-forms-field-error">
                            </div>
                          </div>
                          <div className="field-wrap textarea-wrap label-above form-control-wrap" id="ninja_forms_field_26_div_wrap" data-visible={1}>
                            <input type="hidden" id="ninja_forms_field_26_type" defaultValue="textarea" />
                            <label htmlFor="ninja_forms_field_26" id="ninja_forms_field_26_label">{t("Mission de l'organisme")}
                              <span className="ninja-forms-req-symbol">
                                <strong>*</strong>
                              </span>
                            </label>
                            <textarea name="ninja_forms_field_26" id="ninja_forms_field_26" className="ninja-forms-field  ninja-forms-req form-control" rel={26} data-input-limit data-input-limit-type="char" data-input-limit-msg="character(s) left" defaultValue={""} />
                            <div id="ninja_forms_field_26_error" style={{display: 'none'}} className="ninja-forms-field-error">
                            </div>
                          </div>
                          <p className="ninja-forms-field  largeText text-light-gray bBottom pb5 nf-desc" id="ninja_forms_field_29_div_wrap" style={{}} rel={29}>{t('Contact principal')}</p>
                          <div className="field-wrap text-wrap label-above form-control-wrap" id="ninja_forms_field_30_div_wrap" data-visible={1}>
                            <input type="hidden" id="ninja_forms_field_30_type" defaultValue="text" />
                            <label htmlFor="ninja_forms_field_30" id="ninja_forms_field_30_label">{t("Prénom")}
                              <span className="ninja-forms-req-symbol">
                                <strong>*</strong>
                              </span>
                            </label>
                            <input id="ninja_forms_field_30" data-mask data-input-limit data-input-limit-type="char" data-input-limit-msg="character(s) left" name="ninja_forms_field_30" type="text" className="ninja-forms-field  ninja-forms-req form-control " rel={30} />
                            <div id="ninja_forms_field_30_error" style={{display: 'none'}} className="ninja-forms-field-error">
                            </div>
                          </div>
                          <div className="field-wrap text-wrap label-above form-control-wrap" id="ninja_forms_field_31_div_wrap" data-visible={1}>
                            <input type="hidden" id="ninja_forms_field_31_type" defaultValue="text" />
                            <label htmlFor="ninja_forms_field_31" id="ninja_forms_field_31_label">{t("Nom")}
                              <span className="ninja-forms-req-symbol">
                                <strong>*</strong>
                              </span>
                            </label>
                            <input id="ninja_forms_field_31" data-mask data-input-limit data-input-limit-type="char" data-input-limit-msg="character(s) left" name="ninja_forms_field_31" type="text" className="ninja-forms-field  ninja-forms-req form-control " rel={31} />
                            <div id="ninja_forms_field_31_error" style={{display: 'none'}} className="ninja-forms-field-error">
                            </div>
                          </div>
                          <div className="field-wrap text-wrap label-above form-control-wrap" id="ninja_forms_field_32_div_wrap" data-visible={1}>
                            <input type="hidden" id="ninja_forms_field_32_type" defaultValue="text" />
                            <label htmlFor="ninja_forms_field_32" id="ninja_forms_field_32_label">{t("Courriel")}
                              <span className="ninja-forms-req-symbol">
                                <strong>*</strong>
                              </span>
                            </label>
                            <input id="ninja_forms_field_32" data-mask data-input-limit data-input-limit-type="char" data-input-limit-msg="character(s) left" name="ninja_forms_field_32" type="text" className="ninja-forms-field  ninja-forms-req form-control email " rel={32} />
                            <div id="ninja_forms_field_32_error" style={{display: 'none'}} className="ninja-forms-field-error">
                            </div>
                          </div>
                          <div className="field-wrap text-wrap label-above form-control-wrap clear-wrap" id="ninja_forms_field_33_div_wrap" data-visible={1}>
                            <input type="hidden" id="ninja_forms_field_33_type" defaultValue="text" />
                            <label htmlFor="ninja_forms_field_33" id="ninja_forms_field_33_label">{t("Cellulaire")}
                              <span className="ninja-forms-req-symbol">
                                <strong>*</strong>
                              </span>
                            </label>
                            <input id="ninja_forms_field_33" data-mask="(999) 999-9999" data-input-limit data-input-limit-type="char" data-input-limit-msg="character(s) left" name="ninja_forms_field_33" type="text" className="ninja-forms-field  ninja-forms-req form-control clear ninja-forms-mask" rel={33} />
                            <div id="ninja_forms_field_33_error" style={{display: 'none'}} className="ninja-forms-field-error">
                            </div>
                          </div>
                          <div className="field-wrap text-wrap label-above form-control-wrap" id="ninja_forms_field_34_div_wrap" data-visible={1}>
                            <input type="hidden" id="ninja_forms_field_34_type" defaultValue="text" />
                            <label htmlFor="ninja_forms_field_34" id="ninja_forms_field_34_label">{t("Téléphone")}
                              <span className="ninja-forms-req-symbol">
                                <strong>*</strong>
                              </span>
                            </label>
                            <input id="ninja_forms_field_34" data-mask="(999) 999-9999" data-input-limit data-input-limit-type="char" data-input-limit-msg="character(s) left" name="ninja_forms_field_34" type="text" className="ninja-forms-field  ninja-forms-req form-control ninja-forms-mask" rel={34} />
                            <div id="ninja_forms_field_34_error" style={{display: 'none'}} className="ninja-forms-field-error">
                            </div>
                          </div>
                          <p className="ninja-forms-field  largeText text-light-gray bBottom pb5 clear-wrap pt20 nf-desc" id="ninja_forms_field_35_div_wrap" style={{}} rel={35}>{t("Solution4Header1")}</p>
                          <div className="field-wrap textarea-wrap label-above" id="ninja_forms_field_37_div_wrap" data-visible={1}>
                            <input type="hidden" id="ninja_forms_field_37_type" defaultValue="textarea" />
                            <label htmlFor="ninja_forms_field_37" id="ninja_forms_field_37_label">{t("Solution4Texte1")}
                              <span className="ninja-forms-req-symbol">
                                <strong>*</strong>
                              </span>
                            </label>
                            <textarea name="ninja_forms_field_37" id="ninja_forms_field_37" className="ninja-forms-field  ninja-forms-req" rel={37} data-input-limit data-input-limit-type="char" data-input-limit-msg="character(s) left" defaultValue={""} />
                            <div id="ninja_forms_field_37_error" style={{display: 'none'}} className="ninja-forms-field-error">
                            </div>
                          </div>
                          <div className="field-wrap upload-wrap label-above" id="ninja_forms_field_54_div_wrap" data-visible={1}>
                            <input type="hidden" id="ninja_forms_field_54_type" defaultValue="upload" />
                            <label htmlFor="ninja_forms_field_54" id="ninja_forms_field_54_label">{t("Solution4Texte2")}</label>
                            <input type="hidden" name="MAX_FILE_SIZE" defaultValue={2097152} />
                            <input type="file" name="ninja_forms_field_54[new][]" id="ninja_forms_field_54" rel={54} />
                            <input type="hidden" name="ninja_forms_field_54[new][]" defaultValue rel={54} />
                            <input type="hidden" name="ninja_forms_field_54[]" defaultValue rel={54} />
                            <div id="ninja_forms_field_54_error" style={{display: 'none'}} className="ninja-forms-field-error">
                            </div>
                          </div>
                          <div className="field-wrap submit-wrap label-above btn-wrap btn-lg-wrap text-white-wrap text-uppercase-wrap mt30-wrap mb30-wrap green-background-wrap" id="ninja_forms_field_27_div_wrap" data-visible={1}>
                            <input type="hidden" id="ninja_forms_field_27_type" defaultValue="submit" />
                            <div id="nf_submit_10">
                              <input type="submit" name="_ninja_forms_field_27" className="ninja-forms-field  btn btn-lg text-white text-uppercase mt30 mb30 green-background" id="ninja_forms_field_27" defaultValue={t("Envoyer la demande")} rel={27} />
                            </div>
                            <div id="nf_processing_10" style={{display: 'none'}}>
                              <input type="submit" name="_ninja_forms_field_27" className="ninja-forms-field  btn btn-lg text-white text-uppercase mt30 mb30 green-background" id="ninja_forms_field_27" defaultValue="Processing" rel={27} disabled />
                            </div>
                            <div id="ninja_forms_field_27_error" style={{display: 'none'}} className="ninja-forms-field-error">
                            </div>
                          </div>
                          <div className="ninja-forms-field  nf-desc" id="ninja_forms_field_58_div_wrap" style={{}} rel={58}>
                            <p>{t("Solution4Texte3")}</p>
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
