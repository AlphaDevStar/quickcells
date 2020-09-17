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
        padding: '20px 0 20px 0'
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

const SolverpageContainer : React.FC = () => {
    const classes = useStyles();
    const theme = useTheme();
    return (
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
              <Button className={clsx(classes.commonButtonStyle, classes.commonButtonFontStyle, classes.buttonEssay)} id="#essayer">Essayer QuickCells Graphs gratuitement.</Button>
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
                  <img src="/images/addins/solvers/img-1.svg" className="sol-first-img desktop"/>
                  <img src="/images/addins/solvers/mob-img-1.svg" className="sol-first-img mobile"/>
                  <div className="sol-text-first img-center">
                      <div className="text-box-first">
                        <p className="desc-title no-margin-padding">Nouveautés</p>
                        <p className="desc-style text-first-margin">Les solutions proposées par QuickCells Solvers résultent de problématiques réelles rencontrées par bon nombre de professionnels. L’objectif est simple et novateur : simplifier les calculs complexes et les rendre accessible à tous.</p>
                      </div>
                  </div>
              </div>
              <div className="contain-each-part">
                  <div className="sol-text-second img-center">
                      <div className="text-box-first">
                        <p className="desc-title no-margin-padding">Fonctionnalités</p>
                        <p className="desc-style text-first-margin">Choisissez le <span className="green-letters">format de vos résultats</span>, QuickCells Solvers vous renvoie des résultats exacts ou approximatifs, dans le domaine de l’imaginaire ou du réel.</p>
                      </div>
                  </div>
                  <img src="/images/addins/solvers/img-2.svg" className="sol-second-img desktop"/>
                  <img src="/images/addins/solvers/mob-img-2.svg" className="sol-second-img mobile"/>
              </div>
              <div className="contain-each-part">
                  <img src="/images/addins/solvers/img-3.svg" className="sol-first-img desktop"/>
                  <img src="/images/addins/solvers/mob-img-3.svg" className="sol-first-img mobile"/>
                  <div className="sol-text-first img-center">
                      <div className="text-box-first">
                        <p className="desc-title no-margin-padding">Visualisation</p>
                        <p className="desc-style text-first-margin">Visualisez dans un format mathématique, grâce au <span className="green-letters">panneau Display</span>, toutes les fonctions proposées par le complément QuickCells Solvers. Vous pourrez mieux appréhender toute l’analyse des données.</p>
                      </div>
                  </div>
              </div>
              <div className="contain-each-part">
                  <div className="sol-text-second img-center">
                      <div className="text-box-first">
                        <p className="desc-title no-margin-padding">Apprentissage</p>
                        <p className="desc-style text-first-margin">Apprenez grâce à la <span className="green-letters">méthodologie</span> de calcul précise du panneau “QuickCells display”, tel un cours d’école, et fonctionnant pour toutes les expressions. Fonctionnalité disponible pour diverses fonctions tel quel les dérivées et les intégrales.</p>
                      </div>
                  </div>
                  <img src="/images/addins/solvers/img-4.svg" className="sol-second-img desktop"/>
                  <img src="/images/addins/solvers/mob-img-4.svg" className="sol-second-img mobile"/>
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
    SolverpageContainer as default,
    SolverpageContainer,
};
