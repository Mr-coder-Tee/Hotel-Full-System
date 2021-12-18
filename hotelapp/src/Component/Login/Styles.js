import { StyleSheet,StatusBar, Dimensions } from "react-native";
const screenWidth=Dimensions.get('screen').width
const screenHieght=Dimensions.get('screen').height
const foreGround=screenHieght*.3
const viewhieght=screenHieght*.65
const sub=foreGround*.2

const styles=StyleSheet.create({
    container:{
        marginTop:StatusBar.currentHeight,
        width:screenWidth,
        height:screenHieght,
        flex:1,
    },
    backgroundImg:{
        height:foreGround,
        padding:30,
        position:'absolute',
        top:0,
        left:0,
        right:0,
    },
    contentView:{
        // height:viewhieght,
        // width:screenWidth,
        backgroundColor:'white',
        borderTopRightRadius:40,
        borderTopLeftRadius:40,
        // position:'absolute',
        // bottom:0,
        // left:0,
        // right:0,
        padding:20,
        marginTop:foreGround-sub,
        flex:1
    }
    
});
export default styles