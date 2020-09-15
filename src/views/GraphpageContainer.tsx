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
                  <p className="desc-title not-wrap no-margin-padding">Plus de 35 graphiques vous sont proposés</p>
                  <p className="desc-style not-wrap tete-margin">Tous personnalisables à votre convenance.</p>
              </div>
          </div>

          <div className="flex-container-row">
              <img src="/images/addins/graphs/bundle-picture.svg" className="bundle-pic-style" />
              <div className="donnees-text">
                  <p className="desc-title not-wrap no-margin-padding">Données dynamiques.</p>
                  <p className="desc-style not-wrap donnees-margin">Connectez facilement les graphiques et les contrôles grâce à un tableau de bord interactif. Connectez-vous à vos données en temps réel à l'aide de divers outils.</p>
              </div>
          </div>

          <div>

          </div>
      </section>
  </NavLayout>
);

export {
  GraphpageContainer as default,
  GraphpageContainer,
};
