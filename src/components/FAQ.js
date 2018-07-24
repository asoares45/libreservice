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
              <div id="img_container" className="hidden-xs gray-background">
                <div id="img_container" className="hidden-xs gray-background">
                  <img className="img-responsive" style={{maxHeight: 728}} src={t('FAQImg1')} />
                </div>
                <div id className="hidden-lg hidden-sm hidden-md hidden-xl gray-background">
                  <img className="img-responsive img-center" style={{width: '100%'}} src={t('FAQImg2')}/>
                </div>
              </div>
              <div className="row m0">
                <div className="container">
                  <div className="col-xs-12 mb60">
                    <div className="subheader text-blue mt60 mb30 faqTitle">{t('Adhésion')}</div>
                      <p className="collapseomatic noarrow" id="id5809" tabIndex title="Qu'est-ce que Discount Libre-Service ?">{t('AdFAQ1Header1')}</p>
                    <div id="target-id5809" className="collapseomatic_content " style={{display: 'none'}}>
                      <p>{t('AdFAQ1Texte1')}</p>
                    </div>
                    <p className="collapseomatic noarrow" id="id3669" tabIndex title="Quels sont les critères d'éligibilité pour adhérer à  Discount Libre-service ?">{t('AdFAQ2Header1')}</p>
                      <div id="target-id3669" className="collapseomatic_content " style={{display: 'none'}}>
                        <ul>
                          <li>{t('AdFAQ2Texte1')}</li>
                          <li>{t('AdFAQ2Texte2')}</li>
                          <li>{t('AdFAQ2Texte3')}</li>
                          <li>{t('AdFAQ2Texte4')}</li>
                          <li>{t('AdFAQ2Texte5')}</li>
                        </ul>
                      </div>
                    <p className="collapseomatic noarrow" id="id7719" tabIndex title="à  partir de quel âge je peux devenir membre ?">{t('AdFAQ3Header1')}</p>
                    <div id="target-id7719" className="collapseomatic_content " style={{display: 'none'}}>
                      <p>{t('AdFAQ3Texte1')}</p>
                    </div>
                    <p className="collapseomatic noarrow" id="id2243" tabIndex title="Comment puis-je être membre ?">{t('AdFAQ4Header1')}</p>
                    <div id="target-id2243" className="collapseomatic_content " style={{display: 'none'}}>
                      <p>{t('AdFAQ4Texte1')}</p>
                    </div>
                    <p className="collapseomatic noarrow" id="id31" tabIndex title="Combien de temps dois-je attendre avant d'être accepté comme membre ?">{t('AdFAQ5Header1')}</p>
                    <div id="target-id31" className="collapseomatic_content " style={{display: 'none'}}>
                      <p>{t('AdFAQ5Texte1')}</p>
                    </div>
                    <p className="collapseomatic noarrow" id="id4994" tabIndex title="Comment vais-je savoir que je suis accepté ?">{t('AdFAQ6Header1')}</p>
                    <div id="target-id4994" className="collapseomatic_content " style={{display: 'none'}}>
                      <p>{t('AdFAQ6Texte1')}</p>
                    </div>
                    <p className="collapseomatic noarrow" id="id3619" tabIndex title="L'abonnement est pour combien de temps ?">{t('AdFAQ7Header1')}</p>
                    <div id="target-id3619" className="collapseomatic_content " style={{display: 'none'}}>
                      <p>{t('AdFAQ7Texte1')}</p>
                    </div>
                    <p className="collapseomatic noarrow" id="id5866" tabIndex title="Comment me désabonner du service ?">{t('AdFAQ8Header1')}</p>
                    <div id="target-id5866" className="collapseomatic_content " style={{display: 'none'}}>
                      <p>{t('AdFAQ8Texte1')}</p>
                    </div>
                    <p className="collapseomatic noarrow" id="id7631" tabIndex title="à  quel endroit puis-je télécharger l'application ?">{t('AdFAQ9Header1')}</p>
                    <div id="target-id7631" className="collapseomatic_content " style={{display: 'none'}}>
                      <p>{t('AdFAQ9Texte1')}</p>
                    </div>
                    <p className="collapseomatic noarrow" id="id6097" tabIndex title="Comment rejoindre le service à  la clientèle de Discount Libre-Service ?">{t('AdFAQ10Header1')}</p>
                    <div id="target-id6097" className="collapseomatic_content " style={{display: 'none'}}>
                      <p>{t('AdFAQ10Texte1')} {t('AdFAQ10courriel')}</p>
                    </div>
                    <p className="collapseomatic noarrow" id="id969" tabIndex title="Offrez-vous une adhésion pour les entreprises / organismes ?">{t('AdFAQ11Header1')}</p>
                    <div id="target-id969" className="collapseomatic_content " style={{display: 'none'}}>
                      <p>{t('AdFAQ11Texte1')}</p>
                    </div>
                    <p className="collapseomatic noarrow" id="id7309" tabIndex title="Est-ce que je peux adhérer avec un permis international ou d'une autre province ?">{t('AdFAQ12Header1')}</p>
                    <div id="target-id7309" className="collapseomatic_content " style={{display: 'none'}}>
                      <p>{t('AdFAQ12Texte1')}</p>
                    </div>
                    <p className="collapseomatic noarrow" id="id585" tabIndex title="Puis-je ajouter des conducteurs additionnels à  mon compte Discount Libre-Service ou à  ma location ?">{t('AdFAQ13Header1')}</p>
                    <div id="target-id585" className="collapseomatic_content " style={{display: 'none'}}>
                      <p>{t('AdFAQ13Texte1')}</p>
                    </div>
                    <p className="collapseomatic noarrow" id="id3024" tabIndex title="Où sont vos véhicules ?">{t('AdFAQ14Header1')}</p>
                    <div id="target-id3024" className="collapseomatic_content " style={{display: 'none'}}>
                      <p>{t('AdFAQ14Texte1')}</p>
                    </div>
                    <p className="collapseomatic noarrow" id="id5147" tabIndex title="Quels sont les tarifs  à  l'heure ou à  la journée ?">{t('AdFAQ15Header1')}</p>
                    <div id="target-id5147" className="collapseomatic_content " style={{display: 'none'}}>
                      <p>{t('AdFAQ15Texte1')}</p>
                    </div>
                    <p className="collapseomatic noarrow" id="id2832" tabIndex title="Quels sont les frais additionnels ?">{t('AdFAQ16Header1')}</p>
                    <div id="target-id2832" className="collapseomatic_content " style={{display: 'none'}}>
                      <p>{t('AdFAQ16Texte1')}</p>
                    </div>
                    <p className="collapseomatic noarrow" id="id1695" tabIndex title="Qu'arrive-t-il lorsque mon permis de conduire a changé de statut ?">{t('AdFAQ17Header1')}</p>
                    <div id="target-id1695" className="collapseomatic_content " style={{display: 'none'}}>
                      <p>{t('AdFAQ17Texte1')}</p>
                    </div>
                    <div className="subheader text-blue mt60 mb30">{t('Réservation')}</div>
                    <div className>
                      <p className="collapseomatic noarrow" id="id1495" tabIndex title="Comment puis-je faire une réservation ?">{t('ReFAQ1Header1')}</p>
                      <div id="target-id1495" className="collapseomatic_content " style={{display: 'none'}}>
                        <p>{t('ReFAQ1Texte1')}</p>
                      </div>
                      <p className="collapseomatic noarrow" id="id8277" tabIndex title="Comment puis-je savoir que ma réservation est confirmée ?">{t('ReFAQ2Header1')}</p>
                      <div id="target-id8277" className="collapseomatic_content " style={{display: 'none'}}>
                        <p>{t('ReFAQ2Texte1')}</p>
                      </div>
                      <p className="collapseomatic noarrow" id="id6245" tabIndex title="Combien de temps à  l'avance puis-je réserver un véhicule ?">{t('ReFAQ3Header1')}</p>
                      <div id="target-id6245" className="collapseomatic_content " style={{display: 'none'}}>
                        <p>{t('ReFAQ3Texte1')}</p>
                      </div>
                      <p className="collapseomatic noarrow" id="id8077" tabIndex title="Les véhicules sont munis d'une transmission automatique ou manuelle ?">{t('ReFAQ4Header1')}</p>
                      <div id="target-id8077" className="collapseomatic_content " style={{display: 'none'}}>
                        <p>{t('ReFAQ4Texte1')}</p>
                      </div>
                      <p className="collapseomatic noarrow" id="id4582" tabIndex title="Puis-je réserver un camion à  sens unique ?">{t('ReFAQ5Header1')}</p>
                      <div id="target-id4582" className="collapseomatic_content " style={{display: 'none'}}>
                        <p>{t('ReFAQ5Texte1')}</p>
                      </div>
                      <p className="collapseomatic noarrow" id="id604" tabIndex title="Est-ce que nous pouvons réserver un véhicule avec un chauffeur ?">{t('ReFAQ6Header1')}</p>
                      <div id="target-id604" className="collapseomatic_content " style={{display: 'none'}}>
                        <p>{t('ReFAQ6Texte1')}</p>
                      </div>
                      <p className="collapseomatic noarrow" id="id6506" tabIndex title="Quelle est la politique de modification et d'annulation de la réservation ?">{t('ReFAQ7Header1')}</p>
                      <div id="target-id6506" className="collapseomatic_content " style={{display: 'none'}}>
                        <p>{t('ReFAQ7Texte1')}</p>
                        <p>{t('ReFAQ7Texte2')}</p>
                        <p>{t('ReFAQ7Texte3')}</p>
                        <p>{t('ReFAQ7Texte4')}</p>
                      </div>
                      <p className="collapseomatic noarrow" id="id3675" tabIndex title="Est-ce qu'il y a une limite au nombre de réservation que je peux faire ?">{t('ReFAQ8Header1')}</p>
                      <div id="target-id3675" className="collapseomatic_content " style={{display: 'none'}}>
                        <p>{t('ReFAQ8Texte1')}</p>
                      </div>
                      <p className="collapseomatic noarrow" id="id413" tabIndex title="Avez-vous des sièges d'auto ou d'appoint ?">{t('ReFAQ9Header1')}</p>
                      <div id="target-id413" className="collapseomatic_content " style={{display: 'none'}}>
                        <p>{t('ReFAQ9Texte1')}</p>
                      </div>
                      <div className="subheader text-blue mt60 mb30">{t('Location')}</div>
                      <p className="collapseomatic noarrow" id="id9808" tabIndex title="à  quel endroit puis-je prendre et rendre un véhicule Discount Libre-Service ?">{t('LoFAQ1Header1')}</p>
                      <div id="target-id9808" className="collapseomatic_content " style={{display: 'none'}}>
                        <p>{t('LoFAQ1Texte1')}</p>
                        <p>{t('LoFAQ1Texte2')}</p>
                      </div>
                      <p className="collapseomatic noarrow" id="id9240" tabIndex title="Qu'arrive-t-il lorsque l'espace de stationnement de Discount Libre-Service est pris ou bloqué ?">{t('LoFAQ2Header1')}</p>
                      <div id="target-id9240" className="collapseomatic_content " style={{display: 'none'}}>
                        <p>{t('LoFAQ2Texte1')}</p>
                      </div>
                      <p className="collapseomatic noarrow" id="id5075" tabIndex title="Qu'arrive-t-il si le véhicule réservé n'est pas encore retourné ?">{t('LoFAQ3Header1')}</p>
                      <div id="target-id5075" className="collapseomatic_content " style={{display: 'none'}}>
                        <p>{t('LoFAQ3Texte1')}</p>
                      </div>
                      <p className="collapseomatic noarrow" id="id7880" tabIndex title="Comment mettre fin à  ma location ?">{t('LoFAQ4Header1')}</p>
                      <div id="target-id7880" className="collapseomatic_content " style={{display: 'none'}}>
                        <p>{t('LoFAQ4Texte1')}</p>
                      </div>
                      <p className="collapseomatic noarrow" id="id2361" tabIndex title="Que faire si je retourne le véhicule plus tard que prévu ?">{t('LoFAQ5Header1')}</p>
                      <div id="target-id2361" className="collapseomatic_content " style={{display: 'none'}}>
                        <p>{t('LoFAQ5Texte1')}</p>
                      </div>
                      <p className="collapseomatic noarrow" id="id4773" tabIndex title="Que faire si je retourne le véhicule sale et à  court de carburant ?">{t('LoFAQ6Header1')}</p>
                      <div id="target-id4773" className="collapseomatic_content " style={{display: 'none'}}>
                        <p>{t('LoFAQ6Texte1')}</p>
                        <p>{t('LoFAQ6Texte2')}</p>
                      </div>
                      <p className="collapseomatic noarrow" id="id6963" tabIndex title="Puis-je conduire à  l'extérieur du Québec ? du Canada ?">{t('LoFAQ7Header1')}</p>
                      <div id="target-id6963" className="collapseomatic_content " style={{display: 'none'}}>
                        <p>{t('LoFAQ7Texte1')}</p>
                      </div>
                      <p className="collapseomatic noarrow" id="id3113" tabIndex title="Est-ce que je peux payer avec ma carte de crédit, mais laisser quelqu'un d'autre conduire ?">{t('LoFAQ8Header1')}</p>
                      <div id="target-id3113" className="collapseomatic_content " style={{display: 'none'}}>
                        <p>{t('LoFAQ8Texte1')}</p>
                      </div>
                      <p className="collapseomatic noarrow" id="id623" tabIndex title="Est-ce que vous prélevez un montant sur ma carte de crédit ?">{t('LoFAQ9Header1')}</p>
                      <div id="target-id623" className="collapseomatic_content " style={{display: 'none'}}>
                        <p>{t('LoFAQ9Texte1')}</p>
                      </div>
                      <p className="collapseomatic noarrow" id="id1657" tabIndex title="Où sont les clés du véhicule ?">{t('LoFAQ10Header1')}</p>
                      <div id="target-id1657" className="collapseomatic_content " style={{display: 'none'}}>
                        <p>{t('LoFAQ10Texte1')}</p>
                      </div>
                      <p className="collapseomatic noarrow" id="id2412" tabIndex title="Comment déverrouiller le véhicule ?">{t('LoFAQ11Header1')}</p>
                      <div id="target-id2412" className="collapseomatic_content " style={{display: 'none'}}>
                        <p>{t('LoFAQ11Texte1')}</p>
                      </div>
                      <p className="collapseomatic noarrow" id="id9063" tabIndex title="Est-ce-que je peux prendre le véhicule plus tôt ?">{t('LoFAQ12Header1')}</p>
                      <div id="target-id9063" className="collapseomatic_content " style={{display: 'none'}}>
                        <p>{t('LoFAQ12Texte1')}</p>
                      </div>
                      <p className="collapseomatic noarrow" id="id3360" tabIndex title="Puis-je utiliser les services d'un valet durant ma location ?">{t('LoFAQ13Header1')}</p>
                      <div id="target-id3360" className="collapseomatic_content " style={{display: 'none'}}>
                        <p>{t('LoFAQ13Texte1')}</p>
                      </div>
                      <p className="collapseomatic noarrow" id="id6022" tabIndex title="Puis-je stationner dans une zone commerciale ?">{t('LoFAQ14Header1')}</p>
                      <div id="target-id6022" className="collapseomatic_content " style={{display: 'none'}}>
                        <p>{t('LoFAQ14Texte1')}</p>
                      </div>
                      <p className="collapseomatic noarrow" id="id9582" tabIndex title="Quels documents dois-je avoir avec moi lors de la location ?">{t('LoFAQ15Header1')}</p>
                      <div id="target-id9582" className="collapseomatic_content " style={{display: 'none'}}>
                        <p>{t('LoFAQ15Texte1')}</p>
                      </div>
                      <p className="collapseomatic noarrow" id="id478" tabIndex title="Qu'arrive-t-il lorsque je récupère le véhicule plus tard que la réservation ?">{t('LoFAQ16Header1')}</p>
                      <div id="target-id478" className="collapseomatic_content " style={{display: 'none'}}>
                        <p>{t('LoFAQ16Texte1')}</p>
                      </div>
                      <p className="collapseomatic noarrow" id="id9680" tabIndex title="Comment faire l'inspection du véhicule ? ">{t('LoFAQ17Header1')}/p>
                      <div id="target-id9680" className="collapseomatic_content " style={{display: 'none'}}>
                        <p>{t('LoFAQ17Texte1')}</p>
                      </div>
                      <div className="subheader text-blue mt60 mb30">{t('Protections et dommages')}</div>
                      <p className="collapseomatic noarrow" id="id882" tabIndex title="Avez-vous l'assistance routière ?">{t('PrFAQ1Header1')}</p>
                      <div id="target-id882" className="collapseomatic_content " style={{display: 'none'}}>
                        <p>{t('PrFAQ1Texte1')}</p>
                      </div>
                      <p className="collapseomatic noarrow" id="id7412" tabIndex title="Est-ce que je peux fumer dans le véhicule ?">{t('PrFAQ2Header1')}</p>
                      <div id="target-id7412" className="collapseomatic_content " style={{display: 'none'}}>
                        <p>{t('PrFAQ2Texte1')}</p>
                      </div>
                      <p className="collapseomatic noarrow" id="id8938" tabIndex title="Est-ce que je peux transporter mes animaux dans le véhicule ?">{t('PrFAQ3Header1')}</p>
                      <div id="target-id8938" className="collapseomatic_content " style={{display: 'none'}}>
                        <p>{t('PrFAQ3Texte1')}</p>
                      </div>
                      <p className="collapseomatic noarrow" id="id3877" tabIndex title="Que faire si j'oublie ou trouve quelque chose  dans le véhicule ?">{t('PrFAQ4Header1')}</p>
                      <div id="target-id3877" className="collapseomatic_content " style={{display: 'none'}}>
                        <p>{t('PrFAQ4Texte1')}</p>
                      </div>
                      <p className="collapseomatic noarrow" id="id490" tabIndex title="Que faire si je fais un accident avec le véhicule ?">{t('PrFAQ5Header1')}</p>
                      <div id="target-id490" className="collapseomatic_content " style={{display: 'none'}}>
                        <p>{t('PrFAQ5Texte1')}</p>
                      </div>
                      <p className="collapseomatic noarrow" id="id4793" tabIndex title="Que faire si je reçois une contravention au cours de ma location (billet de stationnement) ?">{t('PrFAQ6Header1')}</p>
                      <div id="target-id4793" className="collapseomatic_content " style={{display: 'none'}}>
                        <p>{t('PrFAQ6Texte1')}</p>
                      </div>
                      <p className="collapseomatic noarrow" id="id9928" tabIndex title="Qu'est-ce que la protection de base ?">{t('PrFAQ7Header1')}</p>
                      <div id="target-id9928" className="collapseomatic_content " style={{display: 'none'}}>
                        <p>{t('PrFAQ7Texte1')}</p>
                      </div>
                      <p className="collapseomatic noarrow" id="id1519" tabIndex title="Puis-je me procurer des couvertures d'assurance additionnelles ?">{t('PrFAQ8Header1')}</p>
                      <div id="target-id1519" className="collapseomatic_content " style={{display: 'none'}}>
                        <p>{t('PrFAQ8Texte1')}</p>
                      </div>
                      <p className="collapseomatic noarrow" id="id4503" tabIndex title="Est-ce que ma carte de crédit va couvrir les dommages au véhicule ?">{t('PrFAQ9Header1')}</p>
                      <div id="target-id4503" className="collapseomatic_content " style={{display: 'none'}}>
                        <p>{t('PrFAQ9Texte1')}</p>
                        <p>{t('PrFAQ9Texte2')}</p>
                      </div>
                      <p className="collapseomatic noarrow" id="id3091" tabIndex title="Est-ce que mon assurance de véhicule va couvrir les dommages au véhicule ?">{t('PrFAQ10Header1')}</p>
                      <div id="target-id3091" className="collapseomatic_content " style={{display: 'none'}}>
                        <p>{t('PrFAQ10Texte1')}</p>
                      </div>
                      <p className="collapseomatic noarrow" id="id663" tabIndex title="Qu'arrive-t-il lors de l'enquête de l'accident / mon accident ?">{t('PrFAQ11Header1')}</p>
                      <div id="target-id663" className="collapseomatic_content " style={{display: 'none'}}>
                        <p>{t('PrFAQ11Texte1')}</p>
                      </div>
                      <p className="collapseomatic noarrow" id="id4258" tabIndex title="Qu'arrive-t-il s'il y a une réclamation d'assurance ?">{t('PrFAQ12Header1')}</p>
                      <div id="target-id4258" className="collapseomatic_content " style={{display: 'none'}}>
                        <p>{t('PrFAQ12Texte1')}</p>
                      </div>
                      <p className="collapseomatic noarrow" id="id6671" tabIndex title="Qu'est-ce que je fais si le véhicule est endommagé ?">{t('PrFAQ13Header1')}</p>
                      <div id="target-id6671" className="collapseomatic_content " style={{display: 'none'}}>
                        <p>{t('PrFAQ13Texte1')}</p>
                      </div>
                      <p className="collapseomatic noarrow" id="id8166" tabIndex title="Que faire s'il y a un pneu plat avant ou durant la location ?">{t('PrFAQ14Header1')}</p>
                      <div id="target-id8166" className="collapseomatic_content " style={{display: 'none'}}>
                        <p>{t('PrFAQ14Texte1')}</p>
                      </div>
                      <p className="collapseomatic noarrow" id="id1064" tabIndex title="Dois-je payer ma location durant la panne du véhicule ?">{t('PrFAQ15Header1')}</p>
                      <div id="target-id1064" className="collapseomatic_content " style={{display: 'none'}}>
                        <p>{t('PrFAQ15Texte1')}</p>
                      </div>
                      <p className="collapseomatic noarrow" id="id9745" tabIndex title="Le véhicule tombe en panne durant la location et je le retourne en retard ? Dois-je payer des frais ?">{t('PrFAQ16Header1')}</p>
                      <div id="target-id9745" className="collapseomatic_content " style={{display: 'none'}}>
                        <p>{t('PrFAQ16Texte1')}</p>
                      </div>
                      <p className="collapseomatic noarrow" id="id80" tabIndex title="Qu'arrive-t-il si je me fais remorquer ou apposer un sabot durant la location ?">{t('PrFAQ17Header1')}</p>
                      <div id="target-id80" className="collapseomatic_content " style={{display: 'none'}}>
                        <p>{t('PrFAQ17Texte1')}</p>
                      </div>
                      <div className="subheader text-blue mt60 mb30">{t('Facturation')}</div>
                      <p className="collapseomatic noarrow" id="id6604" tabIndex title="Est-ce que je reçois un crédit si je retourne le véhicule plus tôt ?">{t('FaFAQ1Header1')}</p>
                      <div id="target-id6604" className="collapseomatic_content " style={{display: 'none'}}>
                        <p>{t('FaFAQ1Texte1')}</p>
                      </div>
                      <p className="collapseomatic noarrow" id="id9887" tabIndex title="Combien de kilométrage est inclus ?">{t('FaFAQ2Header1')}</p>
                      <div id="target-id9887" className="collapseomatic_content " style={{display: 'none'}}>
                        <p>{t('FaFAQ2Texte1')}</p>
                      </div>
                      <p className="collapseomatic noarrow" id="id8242" tabIndex title="à  quel moment est-ce que je serai facturé sur ma carte de crédit ? ">{t('FaFAQ3Header1')}</p>
                      <div id="target-id8242" className="collapseomatic_content " style={{display: 'none'}}>
                        <p>{t('FaFAQ3Texte1')}</p>
                      </div>
                      <p className="collapseomatic noarrow" id="id1499" tabIndex title="Que faire si j'utilise des routes ayant un système de péage ?">{t('FaFAQ4Header1')}</p>
                      <div id="target-id1499" className="collapseomatic_content " style={{display: 'none'}}>
                        <p>{t('FaFAQ4Texte1')}</p>
                        <p>{t('FaFAQ4Texte2')}</p>
                      </div>
                      <p className="collapseomatic noarrow" id="id1617" tabIndex title="Qui paie pour l'essence et les assurances ?">{t('FaFAQ5Header1')}</p>
                      <div id="target-id1617" className="collapseomatic_content " style={{display: 'none'}}>
                        <p>{t('FaFAQ5Texte1')}</p>
                      </div>
                      <p className="collapseomatic noarrow" id="id6806" tabIndex title="Est-ce que le paiement est sécurisé ?">{t('FaFAQ6Header1')}</p>
                      <div id="target-id6806" className="collapseomatic_content " style={{display: 'none'}}>
                        <p>{t('FaFAQ6Texte1')}</p>
                      </div>
                      <p className="collapseomatic noarrow" id="id1164" tabIndex title="Puis-je changer le mode de paiement ? ">{t('FaFAQ7Header1')}</p>
                      <div id="target-id1164" className="collapseomatic_content " style={{display: 'none'}}>
                        <p>{t('FaFAQ7Texte1')}</p>
                      </div>
                      <p className="collapseomatic noarrow" id="id4791" tabIndex title="Où dois-je changer mes informations de la carte de crédit ?">{t('FaFAQ8Header1')}</p>
                      <div id="target-id4791" className="collapseomatic_content " style={{display: 'none'}}>
                        <p>{t('FaFAQ8Texte1')}</p>
                      </div>
                      <div className="subheader text-blue mt60 mb30">{t('Mon compte')}</div>
                      <p className="collapseomatic noarrow" id="id5605" tabIndex title="Comment accéder à  mon compte ou comment puis-je faire la mise à  jour de mes informations dans mon compte client?">{t('CoFAQ1Header1')}</p>
                      <div id="target-id5605" className="collapseomatic_content " style={{display: 'none'}}>
                        <p>{t('CoFAQ1Texte1')}</p>
                      </div>
                      <p className="collapseomatic noarrow" id="id1992" tabIndex title="Où puis-je trouver mes réservations antérieures ? ">{t('CoFAQ2Header1')}</p>
                      <div id="target-id1992" className="collapseomatic_content " style={{display: 'none'}}>
                        <p>{t('CoFAQ2Texte1')}</p>
                      </div>
                      <p className="collapseomatic noarrow" id="id9645" tabIndex title="Comment puis-je avoir une copie d'une facture ?">{t('CoFAQ3Header1')}</p>
                      <div id="target-id9645" className="collapseomatic_content " style={{display: 'none'}}>
                        <p>{t('CoFAQ3Texte1')}</p>
                      </div>
                      </p>
                    </div>
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
