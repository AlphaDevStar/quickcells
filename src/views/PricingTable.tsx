import React from "react";
import { Typography, makeStyles, Button, Container, Input, FormControl } from "@material-ui/core";
import { NavLayout, ContentContainer } from "../components";
import { useTheme } from "@material-ui/core/styles";
import clsx from "clsx";
import { FullscreenExit } from "@material-ui/icons";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
    containerFirstPart: {
      position: 'relative'
    },
    bkg: {
      display: 'flex',
      width: '25%',
      margin: 'auto',
      padding: '40px 0 0 0',
      [theme.breakpoints.between(600, 786)]: {
          padding: "20px 0 10px 0",
      },
      [theme.breakpoints.down(600)]: {
        padding: "20px 0 10px 0",
        width: '50%'
    }
    }, 
    caption: {
        display: 'contents',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '30px',
        lineHeight: '35px',
        textAlign: 'center',
        [theme.breakpoints.down(786)]: {
            fontSize: '20px',
            lineHeight: '23px'
        }
    },
    greenLetter: {
        color: '#54C278'
    },
    centerCaption: {
        left: '50%',
        top: '50%',
        position: 'absolute',
        transform: 'translate(-50%, -50%)'
    }, 
    subCaption: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '15px',
        lineHeight: '18px',
        textAlign: 'center',
        [theme.breakpoints.down(786)]: {
            fontSize: '10px',
            lineHeight: '12px'
        }
    }, 
    flexContainerCol: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        margin: '40px 20px 90px 20px'
    },
    flexContainerRow: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        [theme.breakpoints.down(786)]: {
            flexDirection: 'column'
        }
    }, 
    pricingTableWidth: {
        width: '50%',
        [theme.breakpoints.down(786)]: {
            width: '100%'
        }
    }, 
    descriptionBox: {
        position: 'relative',
        padding: '47px 0px',
        width: '50%',
        border: '3px solid #F8F8F8',
        boxSizing: 'border-box',
        borderRadius: '28px',
        background: '#FFFFFF',
        [theme.breakpoints.down(786)]: {
            width: '60%', 
            padding: '40px 0'
        }
    }, 
    inboxText: {
        width: '75%',
        margin: 'auto',
        textAlign: 'center',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '15px',
        lineHeight: '18px',
        [theme.breakpoints.down(786)]: {
            fontSize: '10px',
            lineHeight: '12px',
        }
    }, 
    bottomCenterButton: {
        position: 'absolute',
        left: '50%',
        top: '100%',
        transform: 'translate(-50%, -50%)'
    }, 
    smallFontStyle: {
        fontWeight: 500,
        fontSize: '10px',
        lineHeight: '12px',
        color: '#C4C4C4'
    },
    smallFontMargin: {
        margin: '0 0 30px 0'
    },
    smallPriceMargin: {
        margin: '0 0 35px 0'
    },
    buttonTitleStyle: {
        background: '#54C278',
        boxShadow: '7px 7px 17px rgba(84, 194, 120, 0.34)',
        borderRadius: '58px',
        textAlign: 'center',
        color: 'white'
    }, 
    buttonPersonPadding: {
        padding: '10px 55px',
        [theme.breakpoints.down(786)]: {
            width: '70%',
            padding: '10px 0'
        }
    }, 
    pricingTableContainer: {
        width: '48%',
        background: 'white',
        border: '3px solid #F8F8F8',
        borderRadius: '28px',
        boxSizing: 'border-box',
        padding: '20px 39px 50px 20px',
        position: 'relative',
        marginBottom: '100px',
        [theme.breakpoints.down(786)]: {
            width: '70%',
            marginBottom: '50px'
        }
    }, 
    pricingInnerTable: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    }, 
    dropdownStyle: {
      borderRadius: '5px',
      backgroundColor: '#F8F8F8', 
      transform: 'matrix(1, 0, 0, -1, 0, 0)'
    }, 
    selectOptionText: {
        color: '#c5c5c5'
    }, 
    pricingCaption: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '15px',
        lineHeight: '18px',
        textAlign: 'center',
        margin: '0 0 30px 0'
    }, 
    pricingStyle: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 900,
        textAlign: 'center',
        margin: '0 0 15px 0'
    }, 
    pricingNumStyle: {
        fontSize: '40px',
        lineHeight: '47px'
    },
    pricingSmallNumStyle: {
        fontSize: '20px',
        lineHeight: '47px'
    },
    pricingPerStyle: {
        fontSize: '20px',
        lineHeight: '47px'
    },
    pricingExtraStyle: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '15px',
        lineHeight: '18px',
        textAlign: 'center'
    }, 
    invisible: {
        visibility: 'hidden'
    },
    selectFormStyle: {
        background: 'white',
        border: '1px solid #C4C4C4',
        boxSizing: 'border-box',
        borderRadius: '6px'
    },
    selectFontStyle: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '12px',
        lineHeight: '14px',
    }, 
    selectBoxPadding: {
        padding: '10px 15px 10px 20px'
    }, 
    selectBoxContainer: {
        width: '70%',
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'column'
    }
  }));
export interface PriceList {
    title: string;
    vis: boolean;
    price: string;
    per: string;
}
const PricingTable: React.FC = () => {
    const classes = useStyles();
    const theme = useTheme();
    const PricingTable: React.FC<PriceList> = ({ title, vis, price, per }) => (
        <div className={clsx(classes.pricingTableContainer)}>
            <div className={clsx(classes.pricingInnerTable)}>
                <p className={clsx(classes.pricingCaption)}>Paiement <span className={clsx(classes.greenLetter)}>{title}</span></p>
                <p className={clsx(classes.pricingStyle, classes.pricingNumStyle)}><span>{price}.</span><span className={clsx(classes.pricingSmallNumStyle)}>95</span>€ <span className={clsx(classes.pricingSmallNumStyle)}>/{per}</span></p>
                {!vis ? (<p className={clsx(classes.pricingExtraStyle, classes.invisible, classes.smallPriceMargin)}>19.16€ /mois</p>) : (<p className={clsx(classes.pricingExtraStyle, classes.smallPriceMargin)}>19.16€ /mois</p>)}
                <div className={clsx(classes.selectBoxContainer)}>
                    <p className={clsx(classes.smallFontStyle, classes.smallFontMargin)}>Nombre de licenses :</p>
                    <Select
                        inputProps={{
                            name: 'num',
                            id: 'filled-num-native-simple'
                        }} 
                        MenuProps={{classes: {
                            paper: classes.dropdownStyle
                        }}} 
                        className={clsx(classes.selectFormStyle, classes.selectFontStyle, classes.selectBoxPadding)}
                        defaultValue={1}
                        IconComponent={()=>(<svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5703 16.2712L17.9884 8.85314C18.3848 8.45668 19.0276 8.45669 19.4241 8.85314C19.8205 9.2496 19.8205 9.89238 19.4241 10.2888L11.2885 18.4244C11.2873 18.4256 11.2861 18.4268 11.2849 18.428C10.8882 18.8212 10.2478 18.8201 9.85246 18.4247L1.71687 10.2891C1.32041 9.89268 1.32041 9.2499 1.71687 8.85344C2.11332 8.45699 2.75611 8.45699 3.15256 8.85344L10.5703 16.2712Z" fill="#54C278"/>
                        </svg>
                        )}
                        disableUnderline={true} 
                        >
                            <MenuItem value={1} className={clsx(classes.selectOptionText)}>1</MenuItem>
                            <MenuItem value={2} className={clsx(classes.selectOptionText)}>2</MenuItem>
                            <MenuItem value={3} className={clsx(classes.selectOptionText)}>3</MenuItem>
                            <MenuItem value={4} className={clsx(classes.selectOptionText)}>4</MenuItem>
                            <MenuItem value={5} className={clsx(classes.selectOptionText)}>5</MenuItem>
                            <MenuItem value={6} className={clsx(classes.selectOptionText)}>6</MenuItem>
                            <MenuItem value={7} className={clsx(classes.selectOptionText)}>7</MenuItem>
                            <MenuItem value={8} className={clsx(classes.selectOptionText)}>8</MenuItem>
                            <MenuItem value={9} className={clsx(classes.selectOptionText)}>9</MenuItem>
                            <MenuItem value={10} className={clsx(classes.selectOptionText)}>10</MenuItem>
                    </Select>
                </div>
            </div>
            <Button className={clsx(classes.bottomCenterButton, classes.smallFontStyle, classes.buttonTitleStyle, classes.buttonPersonPadding)}>Payement {title}</Button>
        </div>
      );
    return (
        <NavLayout disableContentContainer={true}>
            <div className={classes.containerFirstPart}>
                <img src={process.env.PUBLIC_URL + "/images/cells/grey-white-background.jpg"} className={classes.bkg} alt="QuickCells logo" />
                <div className={classes.centerCaption}>
                    <span className={classes.caption}>QuickCells</span>
                    <span className={clsx(classes.caption, classes.greenLetter)}> PREMIUM</span>
                    <p className={clsx(classes.subCaption)}>Pour Professionnels</p>
                </div>
            </div>
            <div className={clsx(classes.flexContainerCol)}>
                <div className={clsx(classes.flexContainerRow, classes.pricingTableWidth)}>
                    <PricingTable title={'Mensuel'} vis={false} price={'22'} per={'mois'} />
                    <PricingTable title={'asdf'} vis={true} price={'229'} per={'an'} />
                    {/*<div className={clsx(classes.pricingTableContainer)}>
                        <div className={clsx(classes.pricingInnerTable)}>
                            <p className={clsx(classes.pricingCaption)}>Paiement <span className={clsx(classes.greenLetter)}>Mensuel</span></p>
                            <p className={clsx(classes.pricingStyle, classes.pricingNumStyle)}><span>22.</span><span className={clsx(classes.pricingSmallNumStyle)}>95</span>€ <span className={clsx(classes.pricingSmallNumStyle)}>/mois</span></p>
                            <p className={clsx(classes.pricingExtraStyle, classes.invisible, classes.smallPriceMargin)}>19.16€ /mois</p>
                            <div className={clsx(classes.selectBoxContainer)}>
                                <p className={clsx(classes.smallFontStyle, classes.smallFontMargin)}>Nombre de licenses :</p>
                                <Select
                                    inputProps={{
                                        name: 'num',
                                        id: 'filled-num-native-simple'
                                    }} 
                                    MenuProps={{classes: {
                                        paper: classes.dropdownStyle
                                    }}} 
                                    className={clsx(classes.selectFormStyle, classes.selectFontStyle, classes.selectBoxPadding)}
                                    defaultValue={1}
                                    IconComponent={()=>(<svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5703 16.2712L17.9884 8.85314C18.3848 8.45668 19.0276 8.45669 19.4241 8.85314C19.8205 9.2496 19.8205 9.89238 19.4241 10.2888L11.2885 18.4244C11.2873 18.4256 11.2861 18.4268 11.2849 18.428C10.8882 18.8212 10.2478 18.8201 9.85246 18.4247L1.71687 10.2891C1.32041 9.89268 1.32041 9.2499 1.71687 8.85344C2.11332 8.45699 2.75611 8.45699 3.15256 8.85344L10.5703 16.2712Z" fill="#54C278"/>
                                    </svg>
                                    )}
                                    disableUnderline={true} 
                                    >
                                        <MenuItem value={1} className={clsx(classes.selectOptionText)}>1</MenuItem>
                                        <MenuItem value={2} className={clsx(classes.selectOptionText)}>2</MenuItem>
                                        <MenuItem value={3} className={clsx(classes.selectOptionText)}>3</MenuItem>
                                        <MenuItem value={4} className={clsx(classes.selectOptionText)}>4</MenuItem>
                                        <MenuItem value={5} className={clsx(classes.selectOptionText)}>5</MenuItem>
                                        <MenuItem value={6} className={clsx(classes.selectOptionText)}>6</MenuItem>
                                        <MenuItem value={7} className={clsx(classes.selectOptionText)}>7</MenuItem>
                                        <MenuItem value={8} className={clsx(classes.selectOptionText)}>8</MenuItem>
                                        <MenuItem value={9} className={clsx(classes.selectOptionText)}>9</MenuItem>
                                        <MenuItem value={10} className={clsx(classes.selectOptionText)}>10</MenuItem>
                                </Select>
                            </div>
                        </div>
                        <Button className={clsx(classes.bottomCenterButton, classes.smallFontStyle, classes.buttonTitleStyle, classes.buttonPersonPadding)}>Payement Mensuel</Button>
                    </div>

                    <div className={clsx(classes.pricingTableContainer)}>
                        <div className={clsx(classes.pricingInnerTable)}>
                            <p className={clsx(classes.pricingCaption)}>Paiement <span className={clsx(classes.greenLetter)}>Annuel</span></p>
                            <p className={clsx(classes.pricingStyle, classes.pricingNumStyle)}><span>229.</span><span className={clsx(classes.pricingSmallNumStyle)}>95</span>€ <span className={clsx(classes.pricingSmallNumStyle)}>/an</span></p>
                            <p className={clsx(classes.pricingExtraStyle, classes.smallPriceMargin)}>19.16€ /mois</p>
                            <div className={clsx(classes.selectBoxContainer)}>
                                <p className={clsx(classes.smallFontStyle, classes.smallFontMargin)}>Nombre de licenses :</p>
                                <Select
                                    inputProps={{
                                        name: 'num',
                                        id: 'filled-num-native-simple'
                                    }} 
                                    MenuProps={{classes: {
                                        paper: classes.dropdownStyle
                                    }}} 
                                    className={clsx(classes.selectFormStyle, classes.selectFontStyle, classes.selectBoxPadding)}
                                    defaultValue={1}
                                    IconComponent={()=>(<svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5703 16.2712L17.9884 8.85314C18.3848 8.45668 19.0276 8.45669 19.4241 8.85314C19.8205 9.2496 19.8205 9.89238 19.4241 10.2888L11.2885 18.4244C11.2873 18.4256 11.2861 18.4268 11.2849 18.428C10.8882 18.8212 10.2478 18.8201 9.85246 18.4247L1.71687 10.2891C1.32041 9.89268 1.32041 9.2499 1.71687 8.85344C2.11332 8.45699 2.75611 8.45699 3.15256 8.85344L10.5703 16.2712Z" fill="#54C278"/>
                                    </svg>
                                    )}
                                    disableUnderline={true} 
                                    >
                                        <MenuItem value={1} className={clsx(classes.selectOptionText)}>1</MenuItem>
                                        <MenuItem value={2} className={clsx(classes.selectOptionText)}>2</MenuItem>
                                        <MenuItem value={3} className={clsx(classes.selectOptionText)}>3</MenuItem>
                                        <MenuItem value={4} className={clsx(classes.selectOptionText)}>4</MenuItem>
                                        <MenuItem value={5} className={clsx(classes.selectOptionText)}>5</MenuItem>
                                        <MenuItem value={6} className={clsx(classes.selectOptionText)}>6</MenuItem>
                                        <MenuItem value={7} className={clsx(classes.selectOptionText)}>7</MenuItem>
                                        <MenuItem value={8} className={clsx(classes.selectOptionText)}>8</MenuItem>
                                        <MenuItem value={9} className={clsx(classes.selectOptionText)}>9</MenuItem>
                                        <MenuItem value={10} className={clsx(classes.selectOptionText)}>10</MenuItem>
                                </Select>
                            </div>
                        </div>
                        <Button className={clsx(classes.bottomCenterButton, classes.smallFontStyle, classes.buttonTitleStyle, classes.buttonPersonPadding)}>Payement Annuel</Button>
                    </div>
                     */}
                </div>
                <div className={clsx(classes.descriptionBox)}>
                    <p className={clsx(classes.inboxText)}>Pour les professionnels souhaitant acheter plus de n licenses, nous vous invitons à remplire une demande de devis personnalisé.</p>
                    <Button className={clsx(classes.bottomCenterButton, classes.smallFontStyle, classes.buttonTitleStyle, classes.buttonPersonPadding)} >Devis personnalisé</Button>
                </div>
            </div>
        </NavLayout>
  );
};

export {
    PricingTable as default,
    PricingTable,
};
