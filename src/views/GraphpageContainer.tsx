import React from "react";
import { NavLayout } from "../components";
import '../css/common.css'
import '../css/graph.css'

const GraphpageContainer: React.FC = () => (
  <NavLayout disableContentContainer={true}>
      <section>
          <div className="flex-container-col">
              <div className="first-part-box">
                  <img src="/images/addins/graphs/first-image.svg" className="intro-graph"/>
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

          <div className="flex-container-row bundle-part">
              <img src="/images/addins/graphs/bundle-picture.svg" className="bundle-pic-style" />
              <div className="donnees-text">
                  <p className="desc-title no-margin-padding">Données dynamiques.</p>
                  <p className="desc-style donnees-margin">Connectez facilement les graphiques et les contrôles grâce à un tableau de bord interactif. Connectez-vous à vos données en temps réel à l'aide de divers outils.</p>
              </div>
          </div>

          <div className="flex-container-col">
              <div>
                  <img src="/images/addins/graphs/img-1.svg" />
                  <div>
                      <p>Révolution</p>
                      <p>Illustrez vos données dans vos présentations, vos rapports et plus généralement dans votre vie professionnelle comme personnelle avec des graphiques spécifiques et détaillés. Ne soyez plus limité par le logiciel mais par vos idées.</p>
                  </div>
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
