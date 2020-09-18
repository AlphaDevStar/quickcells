import React from "react";
import { Typography, makeStyles, Button} from "@material-ui/core";
import { NavLayout, ContentContainer } from "../components";
import { useTheme } from "@material-ui/core/styles";
import clsx from "clsx";
import { Translate } from "@material-ui/icons";
import { RSA_NO_PADDING } from "constants";
import { relative } from "path";

const useStyles = makeStyles((theme) => ({
    greenLetter: {
        color: 'rgb(84, 194, 120)',
    }, 
    fullWidth: {
        width: '100%',
    },
    flexContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        [theme.breakpoints.down(786)]: {
            flexDirection: 'column',
        },
    }, 
    avatarPart: {
        width: '252px',
        textAlign: 'center',

        [theme.breakpoints.down(786)]: {
            width: '100%',
            backgroundImage: 'none',
        },
        [theme.breakpoints.up(786)]: {
            boxShadow: '15px 0px 70px rgba(84, 194, 120, 0.13)'
        },
    }, 
    mainPart: {
        width: 'calc(100% - 252px)',
        padding: '60px 0 60px 5%',
        [theme.breakpoints.down(786)]: {
            width: '100%',
            padding: '30px 0 100px 0',
        },
    },
    flexAvatar: {
        display: 'flex',
        justifyContent:'space-between',
        flexDirection: 'column',
        alignItems: 'center',
        alignSelf: 'stretch',
    },
    flexMain: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection: 'column',
        [theme.breakpoints.down(786)]: {
            alignItems: 'center',
        },
    },
    avatarContain: {
        width: '50%',
        marginTop: '40px',
    }, 
    emitTypoMargin: {
        margin: 0,
        padding: 0
    }, 
    userNameStyle: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '12px',
        lineHeight: '14px',
        margin: '25px 0',
        [theme.breakpoints.down(786)]: {
            display: 'none',
        },
    },
    buttonGroup: {
        padding: '20px 0',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
    }, 
    greenButton: {
        background: '#54C278',
        borderRadius: '24px',
        color: 'white',
        marginBottom: '10px',
        width: '161px',
    }, 
    whiteButton: {
        background: 'white',
        borderRadius: '24px',
        border: '1px solid #C5C5C5',
        boxSizing: 'border-box',
        color: 'black',
        width: '161px',
    },
    commonButtonTitle: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '12px',
        lineHeight: '14px',
        textAlign: 'center',
    },
    tableFlex: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        [theme.breakpoints.down(786)]: {
            flexDirection: 'row',
        },
    },
    rowFlex: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        [theme.breakpoints.down(786)]: {
            flexDirection: 'column',
        },
    },
    helloStyle: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '12px',
        lineHeight: '14px',
        marginBottom: '40px',
    },
    commonTableStyle: {
        background: 'white',
        borderRadius: '12px',
        width: '75%',
        border: '1px solid #54C278',
        boxSizing: 'border-box',
        [theme.breakpoints.down(786)]: {
            width: '85%',
            margin: 'auto',
        },
    },
    commonTableTextStyle: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '9px',
        lineHeight: '11px',
    },
    theadStyle: {
        width: '100%',
        color: 'white',
        borderRadius: '12px 12px 0 0',
        background: '#54C278',
        [theme.breakpoints.down(786)]: {
            borderRadius: '12px 0 0 12px',
        },
    }, 
    textCenterOrLeft: {
        [theme.breakpoints.down(786)]: {
            textAlign: 'left !important',
            paddingLeft: '10%',
        },
    },
    tcontentStyle: {
        width: '100%',
    },
    tr1Width: {
        wordBreak: 'break-word',
        width: '18%',
        textAlign: 'center',
        borderRight: '1px solid #54C278',
        alignSelf: 'stretch',
        [theme.breakpoints.down(786)]: {
            width: '100%',
            borderRight: 0,
            borderBottom: '1px solid rgba(92, 167, 120, 0.33)',
        },
        [theme.breakpoints.down(360)]: {
            height: '30px',
        },
    },
    tr2Width: {
        wordBreak: 'break-word',
        width: '20%',
        textAlign: 'center',
        borderRight: '1px solid #54C278',
        alignSelf: 'stretch',
        [theme.breakpoints.down(786)]: {
            width: '100%',
            borderRight: 0,
            borderBottom: '1px solid rgba(92, 167, 120, 0.33)',
        },
    },
    tr3Width: {
        wordBreak: 'break-word',
        width: '14%',
        textAlign: 'center',
        borderRight: '1px solid #54C278',
        alignSelf: 'stretch',
        [theme.breakpoints.down(786)]: {
            width: '100%',
            borderRight: 0,
            borderBottom: '1px solid rgba(92, 167, 120, 0.33)',
        },
    },
    tr4Width: {
        wordBreak: 'break-word',
        width: '28%',
        textAlign: 'center',
        borderRight: '1px solid #54C278',
        alignSelf: 'stretch',
        [theme.breakpoints.down(786)]: {
            width: '100%',
            borderRight: 0,
            borderBottom: '1px solid rgba(92, 167, 120, 0.33)',
        },
    },
    tr5Width: {
        wordBreak: 'break-word',
        width: '20%',
        textAlign: 'center',
        alignSelf: 'stretch',
        [theme.breakpoints.down(786)]: {
            width: '100%',
        },
    }, 
    marginBetween: {
        marginTop: '20px',
        marginBottom: '35px',
    },
    downPart: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '75%',
        [theme.breakpoints.down(786)]: {
            width: '85%', 
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    greyLetter: {
        color: '#C4C4C4',
    },
    downloadGroup: {
        display: 'inherit'
    },
    positionRel: {
        position: 'relative',
    },
    setBkg: {
        position: 'absolute',
        transform: 'rotate(-34.65deg)',
        left: '-10%',
        top: '-5%',
        width: '100%',
        opacity: 0.09,
        zIndex: 1
    },
    responsMob: {
        display: 'none',
        [theme.breakpoints.down(786)]: {
            display: 'inherit'
        },
    }, 
    responsDes: {
        display: 'inherit',
        [theme.breakpoints.down(786)]: {
            display: 'none',
        },
    }
  }));
interface ItableList {
    title: string;
}
const DashboardPart: React.FC = () => {
    const classes = useStyles();
    const theme = useTheme();
    const CustomTable: React.FC<ItableList> = ({ title }) => (
        <div className={clsx(classes.fullWidth)}>
            <div className={clsx(classes.tableFlex, classes.commonTableStyle, classes.commonTableTextStyle)}>
                <div className={clsx(classes.rowFlex, classes.theadStyle)}>
                    <div className={clsx(classes.tr1Width, classes.textCenterOrLeft)}><p>ID de la commande</p></div>
                    <div className={clsx(classes.tr2Width, classes.textCenterOrLeft)}><p>Plan sélectionné</p></div>
                    <div className={clsx(classes.tr3Width, classes.textCenterOrLeft)}><p>Statut</p></div>
                    <div className={clsx(classes.tr4Width, classes.textCenterOrLeft)}><p>Date de commencement du plan</p></div>
                    <div className={clsx(classes.tr5Width, classes.textCenterOrLeft)}><p>Date de fin du plan</p></div>
                </div>
                <div className={clsx(classes.rowFlex, classes.tcontentStyle)}>
                    <div className={clsx(classes.tr1Width)}><p>0000000000</p></div>
                    <div className={clsx(classes.tr2Width)}><p>{title}</p></div>
                    <div className={clsx(classes.tr3Width)}><p>Actif</p></div>
                    <div className={clsx(classes.tr4Width)}><p>00/00/0000</p></div>
                    <div className={clsx(classes.tr5Width)}><p>00/00/0000</p></div>
                </div>
            </div>
            <div className={clsx(classes.marginBetween, classes.downPart, classes.commonTableTextStyle)}>
                <p className={clsx(classes.greenLetter)}>Annuler</p>
                <div className={clsx(classes.downloadGroup)}>
                    <p className={clsx(classes.greyLetter)}>Télécharger la facture</p>
                    <img src={process.env.PUBLIC_URL + "/images/dashboard/download.svg"} className={clsx(classes.responsDes)} />
                </div>
            </div>
        </div>
      );
    return (
        <NavLayout disableContentContainer={true}>
            <div className={clsx(classes.flexContainer)}>
                <div className={clsx(classes.avatarPart, classes.flexAvatar, classes.positionRel)}>
                    <img src={process.env.PUBLIC_URL + "/images/background-images/dots.svg"} className={clsx(classes.setBkg)} />
                    <div className={clsx(classes.avatarContain)}>
                        <img src={process.env.PUBLIC_URL + "/images/dashboard/avatar.svg"}/>
                        <p className={clsx(classes.emitTypoMargin, classes.userNameStyle)}>John Stone</p>
                    </div>
                    <div className={clsx(classes.buttonGroup, classes.responsDes)} >
                        <Button className={clsx(classes.greenButton, classes.commonButtonTitle)}>Lier mes comptes</Button>
                        <Button className={clsx(classes.whiteButton, classes.commonButtonTitle)}>Supprimer mon compte</Button>
                    </div>
                </div>
                <div className={clsx(classes.mainPart, classes.flexMain)}>
                    <p className={clsx(classes.helloStyle)}>Bonjour John Stone !</p>
                    
                    <CustomTable title={'Graphs - Abonnement mensuel'} />
                    <CustomTable title={'Solvers - Abonnement mensuel'} />
                    <CustomTable title={'Premium - Abonnement mensuel'} />
                    <div className={clsx(classes.buttonGroup, classes.responsMob)} >
                        <Button className={clsx(classes.greenButton, classes.commonButtonTitle)}>Lier mes comptes</Button>
                        <Button className={clsx(classes.whiteButton, classes.commonButtonTitle)}>Supprimer mon compte</Button>
                    </div>
                </div>
            </div>
        </NavLayout>
  );
};

export {
    DashboardPart as default,
    DashboardPart,
};
