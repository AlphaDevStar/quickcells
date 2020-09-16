import React from "react";
import { NavLayout } from "../components";
import '../css/common.css'
import '../css/graph-solver.css'

const GraphpageContainer: React.FC = () => (
  <NavLayout disableContentContainer={true}>
      <section>
          <div className="flex-container-col">
              <div className="first-part-box">
                  <img src="/images/addins/graphs/first-image.svg" className="intro-graph"/>
                  <div className="justify-center-item text-center">
                      <p className="big-title not-wrap no-margin-padding">QuickCells <span className="green-letters">GRAPHS</span></p>
                      <p className="small-title not-wrap no-margin-padding">Cent calculs en un.</p>
                  </div>
              </div>
              <a href="#" className="general-button-style button-caption essay-button text-center" id="#essayer">Essayer QuickCells Solvers gratuitement.</a>
          </div>
      </section>
      <section className="graph-bkg">
          <div className="flex-container-col">
              <img src="/images/addins/solvers/intro.svg" className="tete-picture"/>
              <div className="dynam-text">
                  <p className="desc-title no-margin-padding">Des tableurs dynamiques et évolutifs</p>
                  <p className="desc-style text-center tete-margin">Automatisez vos actions et gagnez du temps.</p>
              </div>
          </div>

          <div className="flex-container-row bundle-part">
              <img src="/images/addins/graphs/bundle-picture.svg" className="bundle-pic-style" />
              <div className="donnees-text">
                  <p className="desc-title no-margin-padding">Données dynamiques.</p>
                  <p className="desc-style donnees-margin">Connectez facilement les graphiques et les contrôles grâce à un tableau de bord interactif. Connectez-vous à vos données en temps réel à l'aide de divers outils.</p>
              </div>
          </div>

          <div className="flex-container-col cross-part">
              <div className="contain-each-part">
                  <img src="/images/addins/graphs/img-1.svg" className="first-img desktop"/>
                  <img src="/images/addins/graphs/mob-img-1.svg" className="first-img mobile"/>
                  <div className="text-first img-center">
                      <div className="text-box-first">
                        <p className="desc-title no-margin-padding">Révolution</p>
                        <p className="desc-style text-first-margin">Illustrez vos données dans vos présentations, vos rapports et plus généralement dans votre <span className="green-letters">vie professionnelle</span> comme <span className="green-letters">personnelle</span> avec des graphiques spécifiques et détaillés. Ne soyez plus limité par le logiciel mais par <span className="green-letters">vos idées</span>.</p>
                      </div>
                  </div>
              </div>
              <div className="contain-each-part">
                  <div className="text-second img-center">
                      <div className="text-box-first">
                        <p className="desc-title no-margin-padding">Personnalisation</p>
                        <p className="desc-style text-first-margin"><span className="green-letters">Personnalisez</span> vos graphiques à vos souhaits : tracés, textes, axes et légendes mais aussi la possibilité de combiner plusieurs graphiques tout en y insérant des boutons paramétrables.</p>
                      </div>
                  </div>
                  <img src="/images/addins/graphs/img-2.svg" className="second-img desktop"/>
                  <img src="/images/addins/graphs/mob-img-2.svg" className="second-img mobile"/>
              </div>
              <div className="contain-each-part">
                  <img src="/images/addins/graphs/img-3.svg" className="first-img desktop"/>
                  <img src="/images/addins/graphs/mob-img-3.svg" className="first-img mobile"/>
                  <div className="text-first img-center">
                      <div className="text-box-first">
                        <p className="desc-title no-margin-padding">Modernisation</p>
                        <p className="desc-style text-first-margin">Exploitez mieux vos données avec la nouvelle génération QuickCells Graphs. La <span className="green-letters">nouvelle génération</span> propose des graphiques vectoriels, surfaciques, tridimensionnels et bien plus encore.</p>
                      </div>
                  </div>
              </div>
              <div className="contain-each-part">
                  <div className="text-second img-center">
                      <div className="text-box-first">
                        <p className="desc-title no-margin-padding">Information</p>
                        <p className="desc-style text-first-margin">Schématisez vos idées à mesure qu’elles se développent tout en les gardant aussi <span className="green-letters">claires</span> que <span className="green-letters">précises</span>.</p>
                      </div>
                  </div>
                  <img src="/images/addins/graphs/img-4.svg" className="second-img desktop"/>
                  <img src="/images/addins/graphs/mob-img-4.svg" className="second-img mobile"/>
              </div>
          </div>

          <div className="flex-container-col last-part">
              <p className="desc-title text-center">N’attendez plus pour gagner en productivité.</p>
              <a className="general-button-style button-caption tarif-button text-center" id="#tarif">Voir les tarifs</a>
          </div>
      </section>
  </NavLayout>
);

export {
  GraphpageContainer as default,
  GraphpageContainer,
};
