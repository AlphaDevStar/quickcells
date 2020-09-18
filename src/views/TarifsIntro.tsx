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
        backgroundImage: 'url(/images/tarifs/background.svg)',
        backgroundPosition: 'left top',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }, 
    marginBetweentwoParts: {
        paddingTop: '5%',
        [theme.breakpoints.down(786)]: {
            marginTop: '30px',
        }
    }, 
    textBox: {
        width: '48%',
        marginRight: '4%',
        textAlign: 'left',
        paddingLeft: '10%',
        paddingRight: '5%',
        float: 'left'
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
            marginTop: '0px',
            marginBottom: 0,
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
    }, 
    img1Width: {
        width: '48%',
        float: 'right'
    }, 
    img2Width: {
        width: '50%',
        [theme.breakpoints.down(786)]: {
            width: '70%',
        }
    },
    commonButtonStyle: {
        background: '#54C278',
        boxShadow: '7px 7px 17px rgba(84, 194, 120, 0.34)',
        borderRadius: '58px'
    },
    commonButtonFontStyle: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '25px',
        lineHeight: '29px',
        color: 'white',
        [theme.breakpoints.down(786)]: {
            fontSize: '13px',
            lineHeight: '15px',
        }
    }, 
    commonPaddingButton: {
        padding: '20px 0',
        [theme.breakpoints.down(786)]: {
            padding: '10px 0',
        }
    }, 
    marginButton1: {
        marginTop: '80px',
        marginBottom: '50px'
    },
    centerButton: {
        marginLeft: '25%',
        width: '50%',
        [theme.breakpoints.down(786)]: {
            width: '70%',
            marginLeft: '15%',
        }
    },
    img3Width: {
        width: '60%',
        marginTop: '10%',
        [theme.breakpoints.down(786)]: {
            width: '70%',
            marginLeft: '15%',
        }
    }, 
    img4width: {
        float: 'right',
        width: '30%',
        [theme.breakpoints.down(786)]: {
            display: 'none',
        }
    }, 
    margin3: {
        marginTop: '5%'
    }, 
    fontStyle: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '30px',
        lineHeight: '35px',
        [theme.breakpoints.down(786)]: {
            fontSize: '15px',
            lineHeight: '18px',
        }
    }, 
    textContainer: {
        textAlign: 'center',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '30px',
        lineHeight: '35px',
        marginTop: '20%',
        marginBottom: '5%',
        [theme.breakpoints.down(786)]: {
            fontSize: '20px',
            lineHeight: '23px',
        }
    },
    introBoxContainer: {
        width: '50%',
        [theme.breakpoints.down(786)]: {
            width: '70%',
        }
    }, 
    flexCol: {
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'row',
        [theme.breakpoints.down(786)]: {
            flexDirection: 'column',
            alignItems: 'center',
        }
    }, 
    justifyFirst: {
        justifyContent: 'space-between',
    },
    justifySecond: {
        justifyContent: 'space-around'
    },
    commonBoxStyle: {
        background: 'white',
        boxSizing: 'border-box',
        border: '3px solid #F8F8F8',
        borderRadius: '28px',
    },
    individualBox: {
        width: '40%', 
        padding: '20px 0',
        marginBottom: '100px',
        [theme.breakpoints.down(786)]: {
            width: '100%',
            marginBottom: '70px',
        }
    }, 
    commonFontStyle: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '20px',
        lineHeight: '23px',
        textAlign: 'center',
    },
    titleInBox: {
        marginBottom: '50px',
        [theme.breakpoints.down(786)]: {
            marginBottom: '35px',
        }
    }, 
    titleInTotalBox: {
        marginBottom: '50px',
        [theme.breakpoints.down(786)]: {
            marginBottom: '15px'
        }
    }, 
    itemInBox: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '10px',
        lineHeight: '12px',
        textAlign: 'center',
        marginBottom: '40px',
    }, 
    positionRel: {
        position: 'relative',
    }, 
    checkImage: {
        float: 'left',
    },
    checkPadding: {
        [theme.breakpoints.down(786)]: {
            paddingLeft: '10%',
        }
    },
    addImage: {
        width: '31px',
        marginBottom: '15px'
    },
    checkImagePaddingIn: {
        paddingLeft: '10%'
    },
    bottomCenterButton: {
        position: 'absolute',
        left: '50%',
        top: '100%',
        transform: 'translate(-50%, -50%)'
    },
    buttonFont: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '10px',
        lineHeight: '12px',
        color: 'white',
    },
    individualButtonWidth: {
        width: '50%'
    }, 
    totalBoxButtonWidth: {
        width: '25%',
        [theme.breakpoints.down(786)]: {
            width: '50%',
        }
    }, 
    buttonSmallPadding: {
        padding: '10px'
    }, 
    totalBoxContainer: {
        width: '50%',
        marginBottom: '20%',
        [theme.breakpoints.down(786)]: {
            width: '70%',
        }
    },
    totalBoxPadding: {
        padding: '30px 5%', 
    }, 
    fullWidth: {
        width: '100%',
    },
    titleInToalBox: {
        color: 'white',
        background: '#54C278',
        borderRadius: '28px 28px 0 0',
        padding: '20px 0',
        width: '100%'
    }, 
    backgroundWhite: {
        background: 'white'
    }, 
    indivBoxInTotal: {
        width: '40%',
        border: 'none',
        [theme.breakpoints.down(786)]: {
            width: '100%',
        }
    },
    borderTitle: {
        border: '1px solid #C4C4C4',
        boxSizing: 'border-box',
        borderRadius: '58px',
    }, 
    responsVisible: {
        [theme.breakpoints.down(786)]: {
            display: 'none',
        }
    }, 
    givePadding: {
        padding: '6px 0',
    }, 
    visibleHidden: {
        visibility: 'hidden',
    },
    smallMarginGain: {
        marginTop: '100px',
        [theme.breakpoints.down(786)]: {
            marginTop: '10px',
        }
    },
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
                    <img src={process.env.PUBLIC_URL + "/images/tarifs/img1.svg"} className={clsx(classes.img1Width)} />
                    <img src={process.env.PUBLIC_URL + "/images/tarifs/img2.svg"} className={clsx(classes.img2Width)} />
                </div>
                <Button className={clsx(classes.commonButtonStyle, classes.marginButton1, classes.commonButtonFontStyle, classes.commonPaddingButton, classes.centerButton)}>Essayer QuickCells gratuitement.</Button>
                <div className={classes.smallMarginGain}>
                    <img src={process.env.PUBLIC_URL + "/images/tarifs/img3.svg"} className={clsx(classes.img3Width)} />
                    <img src={process.env.PUBLIC_URL + "/images/tarifs/img4.svg"} className={clsx(classes.img4width)} />
                </div>
                <div className={clsx(classes.textCenter, classes.margin3)}>
                    <p className={clsx(classes.emitTypoMargin, classes.fontStyle)}>Vous voulez profiter pleinement de </p>
                    <p className={clsx(classes.emitTypoMargin, classes.fontStyle)}>la solution <span className={clsx(classes.greenLetter)}>QuickCells</span> ?</p>
                </div>
                <div>
                    <img src={process.env.PUBLIC_URL + "/images/tarifs/img5.svg"} className={clsx(classes.img3Width)} />
                    <img src={process.env.PUBLIC_URL + "/images/tarifs/img6.svg"} className={clsx(classes.img4width)} />
                </div>
                <div className={clsx(classes.flexContainer)}>
                    <div className={clsx(classes.textContainer)}>
                        <p className={clsx(classes.emitTypoMargin, classes.greenLetter)}>ETAPE 1</p>
                        <p className={clsx(classes.emitTypoMargin)}>Choisissez votre plan.</p>
                    </div>
                    <div className={clsx(classes.introBoxContainer, classes.flexCol, classes.justifyFirst)}>
                        <div className={clsx(classes.individualBox, classes.commonBoxStyle, classes.positionRel)}>
                            <p className={clsx(classes.titleInBox, classes.commonFontStyle)}>QuickCells <span className={clsx(classes.greenLetter)}>GRAPHS</span></p>
                            <div className={clsx(classes.positionRel)}>
                                <img src={process.env.PUBLIC_URL + "/images/tarifs/check.svg"} className={clsx(classes.checkImage, classes.checkImagePaddingIn)} />
                                <p className={clsx(classes.itemInBox)}>Plus de 34 types de graphiques.</p>
                            </div>
                            <div className={clsx(classes.positionRel)}>
                                <img src={process.env.PUBLIC_URL + "/images/tarifs/check.svg"} className={clsx(classes.checkImage, classes.checkImagePaddingIn)} />
                                <p className={clsx(classes.itemInBox)}>Documents illimités.</p>
                            </div>
                            <div className={clsx(classes.positionRel)}>
                                <img src={process.env.PUBLIC_URL + "/images/tarifs/check.svg"} className={clsx(classes.checkImage, classes.checkImagePaddingIn)} />
                                <p className={clsx(classes.itemInBox)}>Personnalisation sans contraintes.</p>
                            </div>
                            <div className={clsx(classes.positionRel)}>
                                <img src={process.env.PUBLIC_URL + "/images/tarifs/check.svg"} className={clsx(classes.checkImage, classes.checkImagePaddingIn)} />
                                <p className={clsx(classes.itemInBox)}>Mise à jour en temps réel.</p>
                            </div>
                            <Button className={clsx(classes.individualButtonWidth, classes.bottomCenterButton, classes.buttonFont, classes.commonButtonStyle, classes.buttonSmallPadding)}>Démarrer</Button>
                        </div>

                        <div className={clsx(classes.individualBox, classes.commonBoxStyle, classes.positionRel)}>
                            <p className={clsx(classes.titleInBox, classes.commonFontStyle)}>QuickCells <span className={clsx(classes.greenLetter)}>SOLVERS</span></p>
                            <div className={clsx(classes.positionRel)}>
                                <img src={process.env.PUBLIC_URL + "/images/tarifs/check.svg"} className={clsx(classes.checkImage, classes.checkImagePaddingIn)} />
                                <p className={clsx(classes.itemInBox)}>Plus de 15 fonctions.</p>
                            </div>
                            <div className={clsx(classes.positionRel)}>
                                <img src={process.env.PUBLIC_URL + "/images/tarifs/check.svg"} className={clsx(classes.checkImage, classes.checkImagePaddingIn)} />
                                <p className={clsx(classes.itemInBox)}>Calculs illimités.</p>
                            </div>
                            <div className={clsx(classes.positionRel)}>
                                <img src={process.env.PUBLIC_URL + "/images/tarifs/check.svg"} className={clsx(classes.checkImage, classes.checkImagePaddingIn)} />
                                <p className={clsx(classes.itemInBox)}>Visualisation mathématique.</p>
                            </div>
                            <div className={clsx(classes.positionRel)}>
                                <img src={process.env.PUBLIC_URL + "/images/tarifs/check.svg"} className={clsx(classes.checkImage, classes.checkImagePaddingIn)} />
                                <p className={clsx(classes.itemInBox)}>Résultats instantanés.</p>
                            </div>
                            <Button className={clsx(classes.individualButtonWidth, classes.bottomCenterButton, classes.buttonFont, classes.commonButtonStyle, classes.buttonSmallPadding)}>Démarrer</Button>
                        </div>
                    </div>

                    <div className={clsx(classes.totalBoxContainer, classes.commonBoxStyle, classes.flexContainer)}>
                        <p className={clsx(classes.titleInToalBox, classes.commonFontStyle, classes.emitTypoMargin)}>Package PREMIUM</p>
                        <div className={clsx(classes.totalBoxPadding, classes.fullWidth, classes.backgroundWhite, classes.flexCol, classes.justifySecond, classes.positionRel)}>
                            <div className={clsx(classes.indivBoxInTotal)}>
                                <p className={clsx(classes.titleInTotalBox, classes.borderTitle, classes.commonFontStyle, classes.emitTypoMargin, classes.givePadding)}>QuickCells <span className={clsx(classes.greenLetter)}>GRAPHS</span></p>
                                <div className={clsx(classes.responsVisible)}>
                                    <div className={clsx(classes.positionRel)}>
                                        <img src={process.env.PUBLIC_URL + "/images/tarifs/check.svg"} className={clsx(classes.checkPadding, classes.checkImage)} />
                                        <p className={clsx(classes.itemInBox)}>Objets illimités.</p>
                                    </div>
                                    <div className={clsx(classes.positionRel)}>
                                        <img src={process.env.PUBLIC_URL + "/images/tarifs/check.svg"} className={clsx(classes.checkPadding, classes.checkImage)} />
                                        <p className={clsx(classes.itemInBox)}>Graphiques avancés.</p>
                                    </div>
                                    <div className={clsx(classes.positionRel)}>
                                        <img src={process.env.PUBLIC_URL + "/images/tarifs/check.svg"} className={clsx(classes.checkPadding, classes.checkImage)} />
                                        <p className={clsx(classes.itemInBox)}>Superposition des graphiques.</p>
                                    </div>
                                    <div className={clsx(classes.positionRel)}>
                                        <img src={process.env.PUBLIC_URL + "/images/tarifs/check.svg"} className={clsx(classes.checkPadding, classes.checkImage)} />
                                        <p className={clsx(classes.itemInBox)}>Un univers complet.</p>
                                    </div>
                                </div>
                            </div>

                            <img src={process.env.PUBLIC_URL + "/images/tarifs/add.svg"} className={clsx(classes.addImage)} />

                            <div className={clsx(classes.indivBoxInTotal)}>
                                <p className={clsx(classes.titleInBox, classes.givePadding, classes.borderTitle, classes.commonFontStyle, classes.emitTypoMargin)}>QuickCells <span className={clsx(classes.greenLetter)}>SOLVERS</span></p>
                                <div>
                                    <div className={clsx(classes.positionRel)}>
                                        <img src={process.env.PUBLIC_URL + "/images/tarifs/check.svg"} className={clsx(classes.checkPadding, classes.checkImage)} />
                                        <p className={clsx(classes.itemInBox)}>Requêtes illimitées.</p>
                                    </div>
                                    <div className={clsx(classes.positionRel)}>
                                        <img src={process.env.PUBLIC_URL + "/images/tarifs/check.svg"} className={clsx(classes.checkPadding, classes.checkImage)} />
                                        <p className={clsx(classes.itemInBox)}>Méthodologie de calculs.</p>
                                    </div>
                                    <div className={clsx(classes.positionRel)}>
                                        <img src={process.env.PUBLIC_URL + "/images/tarifs/check.svg"} className={clsx(classes.checkPadding, classes.checkImage)} />
                                        <p className={clsx(classes.itemInBox)}>Un gain de productivité.</p>
                                    </div>
                                    <div className={clsx(classes.positionRel, classes.visibleHidden)}>
                                        <img src={process.env.PUBLIC_URL + "/images/tarifs/check.svg"} className={clsx(classes.checkPadding, classes.checkImage)} />
                                        <p className={clsx(classes.itemInBox)}>Un univers complet.</p>
                                    </div>
                                </div>
                            </div>
                            <Button className={clsx(classes.totalBoxButtonWidth, classes.bottomCenterButton, classes.buttonFont, classes.commonButtonStyle, classes.buttonSmallPadding)}>Démarrer</Button>
                        </div>
                    </div>
                </div>
            </div>
            
        </NavLayout>
  );
};

export {
    TarifsIntro as default,
    TarifsIntro,
};
