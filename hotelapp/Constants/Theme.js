import { Dimensions ,StatusBar} from "react-native";
const{width,height}=Dimensions.get('screen')
const margintop = StatusBar.currentHeight + 50;


 
export const COLORS={
   LinkbuttonColor:'#0276FD',
   buttonColor:'#0BB5FF',
   backBtnColor:'',
   textLinks:'#0276FD',
   googleColor:'#DD4B39',
   facebookColor:'#55ACEE',
   phoneNumColor:'#4DC247',
   goldColor:'#FFD700',
   opacityColor:'rgba(18,194,233,.5)',
   dangerRed:'#FF0000',
   bottomBookColor:'rgba(246,79,89,.75)',
   succefulColor:'rgba(13,242,22,.4)',
   failColor:'rgba(255,0,0,.4)',
   warningColor:'rgba(255,204,0,.4)',
   gray:'rgba(196,196,196,.5)',
   black:'black',
   white:'white',
   primary:'rgba(246,79,89,.75)',
   secondary:'rgba(255,255,255,1)',
   Darkgray:'rgba(196,196,196,1)',
   AppBackgroundColor:'white'
}

export const SIZES={
   
    largeTitle:50,
    h1:36,
    h2:24,
    h3:18,
    h4:16,
    h5:14,
    h6:12,

    body1:22,
    body2:18,
    body3:16,
    body4:13,
    body5:12,
    screenWidth:width,
    screenHeight:height,
    marginFromBack:margintop,
}
export const FONTS={
    largeTitle: {fontSize:SIZES.largeTitle,lineHeight:40,fontWeight:'bold'},
    h1:{fontSize:SIZES.h1,lineHeight:36,fontWeight:'bold'},
    h2:{fontSize:SIZES.h2,lineHeight:30,fontWeight:'bold'},
    h3:{fontSize:SIZES.h3,lineHeight:22,fontWeight:'bold'},
    h4:{fontSize:SIZES.h4,lineHeight:22,fontWeight:'bold'},
    body1:{fontSize:SIZES.body1,lineHeight:36},
    body2:{fontSize:SIZES.body2,lineHeight:30},
    body3:{fontSize:SIZES.body3,lineHeight:22},
    body4:{fontSize:SIZES.body4,lineHeight:22},
    body5:{fontSize:SIZES.body5,lineHeight:22},
 }
 
 const appTheme={COLORS,SIZES,FONTS,width,height}
 
 export default appTheme


