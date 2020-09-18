import React from "react";
import { NavLayout } from "../components";
import { Typography, makeStyles, Button, Container } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import clsx from "clsx";
import '../css/common.css'
import '../css/graph-solver.css'
const useStyles = makeStyles((theme) => ({
    commonButtonStyle: {
      background: '#54C278',
      borderRadius: '58px',
      zIndex: 3,
      textDecoration: 'none'
    }, 
    buttonEssay: {
      width: '48%',
      padding: '1% 0 1% 0',
      marginBottom: '50px',
      [theme.breakpoints.down(786)]: {
        width: '75%',
        padding: '10px 0 10px 0',
        marginBottom: 0
      }
    }, 
    buttonTarif: {
      width: '249px',
      padding: '20px 0 20px 0',
      [theme.breakpoints.down(786)]: {
        width: '155px',
        padding: '10px 0 10px 0',
      }
    },
    textCenter: {
      textAlign: 'center'
    },
    buttonPadding2: {
      padding: '10px 60px 10px 60px'
    },
    commonButtonFontStyle: {
      color: 'white',
      fontWeight: 500,
      fontSize: '25px',
      lineHeight: '29px',
      [theme.breakpoints.down(786)]: {
        fontWeight: 500,
        fontSize: '13px',
        lineHeight: '15px',
      }
    },
    marginButton: {
      marginRight: '120px',
      [theme.breakpoints.down(786)]: {
        marginRight: 0,
        marginBottom: '30px'
      }
    }
  }));

const GraphpageContainer: React.FC = () => {
    const classes = useStyles();
    const theme = useTheme();
    return (
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
              <Button className={clsx(classes.commonButtonStyle, classes.commonButtonFontStyle, classes.buttonEssay)} id="#essayer">Essayer QuickCells Solvers gratuitement.</Button>
          </div>
      </section>
      <section className="graph-bkg">
          <div className="flex-container-col">
              <img src="/images/addins/graphs/tete.svg" className="tete-picture"/>
              <div className="dynam-text">
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
              <Button className={clsx(classes.commonButtonStyle, classes.commonButtonFontStyle, classes.buttonTarif)} id="#tarif">Voir les tarifs</Button>
          </div>
      </section>
  </NavLayout>
    );
};

export {
  GraphpageContainer as default,
  GraphpageContainer,
};
