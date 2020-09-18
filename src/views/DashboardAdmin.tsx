import React from "react";
import { Typography, makeStyles, Button, Container, FormControl, Input } from "@material-ui/core";
import { NavLayout, ContentContainer } from "../components";
import { useTheme } from "@material-ui/core/styles";
import clsx from "clsx";
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { useSpring, animated } from 'react-spring/web.cjs';
import { Translate } from "@material-ui/icons";
import { RSA_NO_PADDING } from "constants";
import { relative } from "path";

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '12px',
        border: 'none',
        borderColor: 'white'
    },
    paper: {
        paddingTop: '20px',
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    modalButton: {
        width: '112px',
        color: 'white',
        borderRadius: '18px',
        background: '#54C278',
    },
    modalBGroup: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: '40px',
    },
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
        width: '85%',
        border: '1px solid #54C278',
        boxSizing: 'border-box',
        [theme.breakpoints.down(786)]: {
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
        width: '16%',
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
    tr3Width: {
        wordBreak: 'break-word',
        width: '11%',
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
    tr5Width: {
        wordBreak: 'break-word',
        width: '7%',
        textAlign: 'center',
        borderRight: '1px solid #54C278',
        alignSelf: 'stretch',
        [theme.breakpoints.down(786)]: {
            width: '100%',
            borderRight: 0,
            borderBottom: '1px solid rgba(92, 167, 120, 0.33)',
        },
    },
    tr6Width: {
        wordBreak: 'break-word',
        width: '17%',
        textAlign: 'center',
        borderRight: '1px solid #54C278',
        alignSelf: 'stretch',
        [theme.breakpoints.down(786)]: {
            width: '100%',
            borderRight: 0,
            borderBottom: '1px solid rgba(92, 167, 120, 0.33)',
        },
    },
    tr7Width: {
        wordBreak: 'break-word',
        width: '15%',
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
    }, 
    caption: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '12px',
        lineHeight: '14px',
    }, 
    firstTitle: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        [theme.breakpoints.down(786)]: {
            flexDirection: 'column',
            alignItems: 'flex-start',
        },
    },
    buttonMargin1: {
        marginLeft: '35px',
        paddingLeft: 0,
        [theme.breakpoints.down(786)]: {
            marginLeft: 0,
            marginTop: '20px',
        },
    },
    generalButtonStyle2: {
        background: 'white',
        border: '1px solid #54C278',
        boxSizing: 'border-box',
        borderRadius: '24px',
    },
    licButton: {
        width: '200px',
        marginTop: '15px',
        marginBottom: '30px',
        [theme.breakpoints.down(786)]: {
            marginTop: '20px',
            marginBottom: '40px',
        },
    },
    containerPart: {

        [theme.breakpoints.down(950)]: {
            '&::after': {
                content: '""',
                display: 'block',
                width: '25%',
                borderBottom: '2px solid #E7E7E7',
            },
            width: '70%',
        },
    },
    flexNouvel: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: '30px',
        [theme.breakpoints.down(950)]: {
            flexDirection: 'column',
            alignItems: 'flex-start',
        },
    }, 
    inputStyle: {
        width: '262px',
        borderRadius: '6px',
        padding: '10px 17px',
        background: '#F8F8F8',
    },
    marginCommon: {
        marginBottom: '20px',
    }, 
    addButton: {
        width: '120px',
    },
    formStyle: {
        borderRight: '0.5px solid rgba(84, 194, 120, 0.5)',
        [theme.breakpoints.down(950)]: {
            borderRight: 'none',
        },
    },
    someMargin: {
        paddingRight: '55px',
        marginRight: '55px',
        [theme.breakpoints.down(950)]: {
            marginRight: 0,
            paddingRight: 0
        },
    },
    emailPart1: {
        [theme.breakpoints.down(850)]: {
            marginTop: '40px',
            marginBottom: '20px',
        },
    }, 
    formPart1: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexDirection: 'column',
        alignSelf: 'stretch',
    },
    emailPartMargin: {
        marginBottom: '28px',
    },
    indivEmail: {
        width: '170px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    emailMargin: {
        marginBottom: '20px',
    },
    lastPart: {
        marginTop: '40px',
        marginBottom: '40px',
    }, 
    marginBetweentable: {
        marginBottom: '20px',
    },
    specButtonFont: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '13px',
        lineHeight: '15px',
    },
    specButtonWidth: {
        width: '262px',
    },
    iconButton: {
        float: 'left',
        position: 'absolute',
        left: '5px',
    },
    emailPart2: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexDirection: 'row',
        [theme.breakpoints.down(1150)]: {
            flexDirection: 'column',
            marginBottom: '40px',
        },
        [theme.breakpoints.down(950)]: {
            flexDirection: 'row',
            marginBottom: 0,
        },
        [theme.breakpoints.down(786)]: {
            flexDirection: 'column',
            marginBottom: '40px',
        },
        
    },
    emailBox: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexDirection: 'column',
        marginRight: '30px',
    },
  }));
interface ItableList {
    title: string;
};
interface IformList {
    title: string;
};
interface IemailList {
    caseInMOrG: number;
};
function render(caseInMOrGs:number) {
    if (caseInMOrGs === 1)
    {
        return 'google.svg';
    }
    else if (caseInMOrGs === 2) {
        return 'microsoft.svg'
    } 
    else {
        return 'unknown';
    }
}
const DashboardAdmin: React.FC = () => {
    const classes = useStyles();
    const theme = useTheme();
    const CustomTable: React.FC<ItableList> = ({ title }) => (
        <div className={clsx(classes.fullWidth)}>
            <div className={clsx(classes.tableFlex, classes.commonTableStyle, classes.commonTableTextStyle)}>
                <div className={clsx(classes.rowFlex, classes.theadStyle)}>
                    <div className={clsx(classes.tr1Width, classes.textCenterOrLeft)}><p>adresse mail du collaborateur</p></div>
                    <div className={clsx(classes.tr2Width, classes.textCenterOrLeft)}><p>ID de la commande</p></div>
                    <div className={clsx(classes.tr3Width, classes.textCenterOrLeft)}><p>ID de la license</p></div>
                    <div className={clsx(classes.tr4Width, classes.textCenterOrLeft)}><p>Plan sélectionné</p></div>
                    <div className={clsx(classes.tr5Width, classes.textCenterOrLeft)}><p>Statut</p></div>
                    <div className={clsx(classes.tr6Width, classes.textCenterOrLeft)}><p>Date de commencement du plan</p></div>
                    <div className={clsx(classes.tr7Width, classes.textCenterOrLeft)}><p>Date de fin du plan</p></div>
                </div>
                <div className={clsx(classes.rowFlex, classes.tcontentStyle)}>
                    <div className={clsx(classes.tr1Width)}><p>adresse.mail@gmail.com</p></div>
                    <div className={clsx(classes.tr2Width)}><p>0000000</p></div>
                    <div className={clsx(classes.tr3Width)}><p>00000000</p></div>
                    <div className={clsx(classes.tr4Width)}><p>{title}</p></div>
                    <div className={clsx(classes.tr5Width)}><p>Actif</p></div>
                    <div className={clsx(classes.tr6Width)}><p>00/00/0000</p></div>
                    <div className={clsx(classes.tr7Width)}><p>00/00/0000</p></div>
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
      const FormCommonPart: React.FC<IformList> = ({ title }) => (
            <div className={clsx(classes.formPart1)}>
                <Typography className={clsx(classes.caption, classes.greyLetter, classes.marginCommon)}>{title} :</Typography>
                <FormControl className={clsx(classes.someMargin, classes.formStyle)}>
                    <Input disableUnderline={true} placeholder={'Adresse mail'} className={clsx(classes.inputStyle, classes.marginCommon, classes.caption)}></Input>
                    <Button className={clsx(classes.generalButtonStyle2, classes.addButton, classes.caption)}>Ajouter</Button>
                </FormControl>
            </div>
      );
      const EmailCommonPart: React.FC<IemailList> = ({ caseInMOrG }) => (
        <div className={clsx(classes.emailPart2)}>
            <div className={clsx(classes.emailBox)}>
                <div className={clsx(classes.indivEmail)}>
                    <Typography className={clsx(classes.caption)}>adresse.mail@gmail.com</Typography>
                    <img src={process.env.PUBLIC_URL + "/images/dashboard/cancel.svg"} />
                </div>
                <Typography className={clsx(classes.caption, classes.greyLetter, classes.emailMargin)}>{caseInMOrG == 1? 'Google' : (caseInMOrG == 2 ? 'Microsoft' : 'Microsoft / Google')}</Typography>
            </div>
            {
                (caseInMOrG === 1 || caseInMOrG === 2) && (            <Button className={clsx(classes.specButtonFont, classes.generalButtonStyle2, classes.specButtonWidth)}>
                <img src={process.env.PUBLIC_URL + "/images/dashboard/"+render(caseInMOrG)} className={clsx(classes.iconButton)}/>
                Lier un compte Google
            </Button>)
            }
        </div>
        
    );
      const val = 3;
      const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    interface FadeProps {
        children?: React.ReactElement;
        in: boolean;
        onEnter?: () => {};
        onExited?: () => {};
      }
      
      const Fade = React.forwardRef<HTMLDivElement, FadeProps>(function Fade(props, ref) {
        const { in: open, children, onEnter, onExited, ...other } = props;
        const style = useSpring({
          from: { opacity: 0 },
          to: { opacity: open ? 1 : 0 },
          onStart: () => {
            if (open && onEnter) {
              onEnter();
            }
          },
          onRest: () => {
            if (!open && onExited) {
              onExited();
            }
          },
        });
      
        return (
          <animated.div ref={ref} style={style} {...other}>
            {children}
          </animated.div>
        );
      });
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
                    <div className={clsx(classes.containerPart)}>
                        <div className={clsx(classes.firstTitle)}>
                            <Typography className={classes.caption}><span className={classes.greyLetter}>Licenses restantes : </span> {val}</Typography>
                            <Button onClick={handleOpen} className={clsx(classes.caption, classes.greenLetter, classes.buttonMargin1)}>Supprimer</Button>

                            <Modal
                                aria-labelledby="spring-modal-title"
                                aria-describedby="spring-modal-description"
                                className={classes.modal}
                                open={open}
                                onClose={handleClose}
                                closeAfterTransition
                                BackdropComponent={Backdrop}
                                BackdropProps={{
                                timeout: 500,
                                }}
                            >
                                <Fade in={open}>
                                <div className={classes.paper}>
                                    <div>
                                        <Typography id="spring-modal-title" className={classes.caption}>Êtes-vous sûre de vouloir supprimer une license ?</Typography>
                                        <div id="spring-modal-description" className={clsx(classes.modalBGroup)}>
                                            <Button className={clsx(classes.modalButton, classes.caption)} onClick={handleClose}>Oui</Button>
                                            <Button className={clsx(classes.modalButton, classes.caption)} onClick={handleClose}>Non</Button>
                                        </div>
                                    </div>
                                </div>
                                </Fade>
                            </Modal>

                        </div>
                        <Button className={clsx(classes.licButton, classes.generalButtonStyle2, classes.caption)}>Acheter une nouvelle license</Button>
                    </div>

                    <div className={clsx(classes.containerPart, classes.flexNouvel)}>
                        <FormCommonPart title={'Ajouter un nouvel administrateur'} />
                        {/* <div className={clsx(classes.formPart1)}>
                            <Typography className={clsx(classes.caption, classes.greyLetter, classes.marginCommon)}>Ajouter un nouvel administrateur :</Typography>
                            <FormControl className={clsx(classes.someMargin, classes.formStyle)}>
                                <Input disableUnderline={true} placeholder={'Adresse mail'} className={clsx(classes.inputStyle, classes.marginCommon, classes.caption)}></Input>
                                <Button className={clsx(classes.generalButtonStyle2, classes.addButton, classes.caption)}>Ajouter</Button>
                            </FormControl>
                        </div> */}
                        <div className={clsx(classes.emailPart1, classes.formPart1)}>
                            <Typography className={clsx(classes.caption, classes.greyLetter, classes.emailPartMargin)}>Administrateurs :</Typography>
                            <div>
                                <Typography className={clsx(classes.caption)}>adresse.mail@gmail.com</Typography>
                                <img src={process.env.PUBLIC_URL + "/images/dashboard/cancel.svg"} />
                            </div>
                            <div className={clsx(classes.indivEmail, classes.emailMargin)}>
                                <Typography className={clsx(classes.caption)}>adresse.mail@gmail.com</Typography>
                                <img src={process.env.PUBLIC_URL + "/images/dashboard/cancel.svg"} />
                            </div>
                        </div>
                    </div>

                    <div className={clsx(classes.containerPart, classes.flexNouvel)}>
                        <FormCommonPart title={'Ajouter un nouvel administrateur'} />
                        <div className={clsx(classes.emailPart1, classes.formPart1)}>
                            <Typography className={clsx(classes.caption, classes.greyLetter, classes.emailPartMargin)}>Administrateurs :</Typography>
                            <EmailCommonPart caseInMOrG={0} />
                            <EmailCommonPart caseInMOrG={1} />
                            <EmailCommonPart caseInMOrG={2} />
                            {/* <div className={clsx(classes.emailPart2)}>
                                <div className={clsx(classes.emailBox)}>
                                    <div className={clsx(classes.indivEmail)}>
                                        <Typography className={clsx(classes.caption)}>adresse.mail@gmail.com</Typography>
                                        <img src={process.env.PUBLIC_URL + "/images/dashboard/cancel.svg"} />
                                    </div>
                                    <Typography className={clsx(classes.caption, classes.greyLetter, classes.emailMargin)}>{micro} / {goog}</Typography>
                                </div>
                                <Button className={clsx(classes.specButtonFont, classes.generalButtonStyle2, classes.specButtonWidth)}><img src={process.env.PUBLIC_URL + "/images/dashboard/microsoft.svg"}  className={clsx(classes.iconButton)}/>Lier un compte Google</Button>
                            </div> */}
                        </div>
                    </div>
                    <div className={clsx(classes.containerPart, classes.lastPart)}>
                        <Typography className={clsx(classes.caption, classes.greyLetter)}>Licenses :</Typography>
                        <Button className={clsx(classes.licButton, classes.generalButtonStyle2, classes.caption)}>Voir l’historique des opérations</Button>
                    </div>
                    <div className={clsx(classes.containerPart, classes.marginBetweentable)}>
                    <Typography className={clsx(classes.caption, classes.greyLetter)}>Collaborateurs :</Typography>
                    </div>
                    
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
    DashboardAdmin as default,
    DashboardAdmin,
};
