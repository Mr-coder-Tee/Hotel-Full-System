import { StyleSheet,StatusBar, Dimensions } from "react-native";
const screenWidth=Dimensions.get('screen').width
const screenHieght=Dimensions.get('screen').height
const viewhieght=screenHieght*.65
const paintHeight = screenHieght * 0.3;
const sub=paintHeight*.3

const styles=StyleSheet.create({
    container:{
        marginTop:StatusBar.currentHeight,
        width:screenWidth,
        height:screenHieght,
        flex:1,
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
        marginTop:paintHeight-sub,
        flex:1
    }
    
    
});
export default styles