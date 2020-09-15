import React from "react";
import { NavLayout } from "../components";
import '../css/common.css'
import '../css/graph-solver.css'

const SolverpageContainer : React.FC = () => (
  <NavLayout disableContentContainer={true}>
      <section>
          <div className="flex-container-col">
              <div className="first-part-box">
                  <img src="/images/addins/solvers/first-image.svg" className="intro-graph"/>
                  <div className="justify-center-item text-center">
                      <p className="big-title not-wrap no-margin-padding">QuickCells <span className="green-letters">GRAPHS</span></p>
                      <p className="small-title not-wrap no-margin-padding">Un graphique vaut mille mots.</p>
                  </div>
              </div>
              <a href="#" className="general-button-style button-caption essay-button text-center" id="#essayer">Essayer QuickCells Graphs gratuitement.</a>
          </div>
      </section>
      <section className="graph-bkg">
          <div className="flex-container-col">
              <img src="/images/addins/graphs/tete.svg" className="tete-picture"/>
              <div className="tete-text">
                  <p className="desc-title no-margin-padding">Plus de 35 graphiques vous sont proposés</p>
                  <p className="desc-style text-center tete-margin">Tous personnalisables à votre convenance.</p>
              </div>
          </div>

          <div className="flex-container-row-fix bundle-part">
              <img src="/images/addins/solvers/bundle-picture.svg" className="bundle-pic-style-solv" />
              <div className="efficar-text">
                  <p className="desc-title no-margin-padding">Efficacité.</p>
                  <p className="desc-style efficar-margin">Résolvez automatiquement vos problèmes, pour les rendre moins chronophages et énergivores</p>
              </div>
          </div>

          <div className="flex-container-col cross-part">
              <div className="contain-each-part">
                  <img src="/images/addins/solvers/img-1.svg" className="first-img desktop"/>
                  <img src="/images/addins/solvers/mob-img-1.svg" className="first-img mobile"/>
                  <div className="text-first img-margin-1">
                      <div className="text-box-first">
                        <p className="desc-title no-margin-padding">Nouveautés</p>
                        <p className="desc-style text-first-margin">Les solutions proposées par QuickCells Solvers résultent de problématiques réelles rencontrées par bon nombre de professionnels. L’objectif est simple et novateur : simplifier les calculs complexes et les rendre accessible à tous.</p>
                      </div>
                  </div>
              </div>
              <div className="contain-each-part">
                  <div className="text-second img-margin-2">
                      <div className="text-box-first">
                        <p className="desc-title no-margin-padding">Fonctionnalités</p>
                        <p className="desc-style text-first-margin">Choisissez le <span className="green-letters">format de vos résultats</span>, QuickCells Solvers vous renvoie des résultats exacts ou approximatifs, dans le domaine de l’imaginaire ou du réel.</p>
                      </div>
                  </div>
                  <img src="/images/addins/solvers/img-2.svg" className="second-img desktop"/>
                  <img src="/images/addins/solvers/mob-img-2.svg" className="second-img mobile"/>
              </div>
              <div className="contain-each-part">
                  <img src="/images/addins/solvers/img-3.svg" className="first-img desktop"/>
                  <img src="/images/addins/solvers/mob-img-3.svg" className="first-img mobile"/>
                  <div className="text-first img-margin-3">
                      <div className="text-box-first">
                        <p className="desc-title no-margin-padding">Visualisation</p>
                        <p className="desc-style text-first-margin">Visualisez dans un format mathématique, grâce au <span className="green-letters">panneau Display</span>, toutes les fonctions proposées par le complément QuickCells Solvers. Vous pourrez mieux appréhender toute l’analyse des données.</p>
                      </div>
                  </div>
              </div>
              <div className="contain-each-part">
                  <div className="text-second img-margin-4">
                      <div className="text-box-first">
                        <p className="desc-title no-margin-padding">Apprentissage</p>
                        <p className="desc-style text-first-margin">Apprenez grâce à la <span className="green-letters">méthodologie</span> de calcul précise du panneau “QuickCells display”, tel un cours d’école, et fonctionnant pour toutes les expressions. Fonctionnalité disponible pour diverses fonctions tel quel les dérivées et les intégrales.</p>
                      </div>
                  </div>
                  <img src="/images/addins/solvers/img-4.svg" className="second-img desktop"/>
                  <img src="/images/addins/solvers/mob-img-4.svg" className="second-img mobile"/>
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
    SolverpageContainer as default,
    SolverpageContainer,
};
