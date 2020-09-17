import React from "react";
import { Typography, makeStyles, Button, Container } from "@material-ui/core";
import { NavLayout, ContentContainer } from "../components";
import { useTheme } from "@material-ui/core/styles";
import clsx from "clsx";
import { Translate } from "@material-ui/icons";
import { RSA_NO_PADDING } from "constants";

const useStyles = makeStyles((theme) => ({
    flexContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center', 
        flexDirection: 'column'
    }, 
    containerPadding: {
        padding: '0 15px'
    }, 
    imageContainer: {
        position: 'relative',
        marginTop: '50px'
    }, 
    defineImageWidth: {
        maxWidth: '100%'
    },
    positionCenter: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
    },
    textCenter: {
        textAlign: 'center',
    },
    bigTitle: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '38px',
        lineHeight: '45px',
        [theme.breakpoints.down(786)]: {
            fontSize: '20px',
            lineHeight: '23px',
        }
    }, 
    emitTypoMargin: {
        margin: 0,
        padding: 0
    }, 
    greenLetter: {
        color: 'rgb(84, 194, 120)',
    }, 
    smallChar: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '14px',
        lineHeight: '16px',
        [theme.breakpoints.down(786)]: {
            fontSize: '10px',
            lineHeight: '12px',
        }
    },
    marginBetweenChars: {
        marginTop: '30px !important',
    }, 
    bkgImage: {
        backgroundImage: 'url(/images/background-images/packages-content.svg)',
        backgroundPosition: 'left top',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }, 
    marginBetweentwoParts: {
        marginTop: '50px',
        [theme.breakpoints.down(786)]: {
            marginTop: '30px',
        }
    }, 
    textBox: {
        width: '48%',
        marginRight: '4%',
        textAlign: 'left',
        paddingLeft: '10%',
        paddingRight: '5%'
    }, 
    textBoxTitle: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '30px',
        lineHeight: '35px',
        color: '#54C278',
        marginTop: '30px',
        [theme.breakpoints.down(786)]: {
            fontSize: '20px',
            lineHeight: '23px',
        }
    }, 
    textBoxDesc: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '20px',
        lineHeight: '23px',
        color: 'black',
        marginTop: '30px',
        [theme.breakpoints.down(786)]: {
            fontSize: '10px',
            lineHeight: '12px',
            marginTop: '10px',
        }
    }
  }));

const TarifsIntro: React.FC = () => {
    const classes = useStyles();
    const theme = useTheme();
    return (
        <NavLayout disableContentContainer={true}>
            <div className={clsx(classes.flexContainer, classes.containerPadding)}>
                <div className={clsx(classes.imageContainer)}>
                    <img src={process.env.PUBLIC_URL + "/images/tarifs/background1.svg"} className={clsx(classes.defineImageWidth)} />
                    <div className={clsx(classes.positionCenter, classes.textCenter)}>
                        <p className={clsx(classes.bigTitle, classes.emitTypoMargin)}>Nos <span className={clsx(classes.greenLetter)}>packages</span></p>
                        <p className={clsx(classes.smallChar, classes.emitTypoMargin, classes.marginBetweenChars)}>Nous proposons ds solutions </p>
                        <p className={clsx(classes.smallChar, classes.emitTypoMargin)}>adaptées à vos besoins.</p>
                    </div>
                </div>
            </div>
            <div className={clsx(classes.bkgImage, classes.marginBetweentwoParts)}>
                <div>
                    <div className={clsx(classes.textBox)}>
                        <p className={clsx(classes.textBoxTitle)}>Visualisation</p>
                        <p className={clsx(classes.textBoxDesc)}>Visualisez dans un format mathématique, grâce au <span className={clsx(classes.greenLetter)}>panneau Display</span>, toutes les fonctions proposées par le complément QuickCells Solvers. Vous pourrez mieux appréhender toute l’analyse des données.</p>
                    </div>
                    <img src={process.env.PUBLIC_URL + "/images/tarifs/background1.svg"} className={clsx(classes.defineImageWidth)} />
                </div>
            </div>
        </NavLayout>
  );
};

export {
    TarifsIntro as default,
    TarifsIntro,
};
