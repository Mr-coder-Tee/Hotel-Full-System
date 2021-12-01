import { StyleSheet,StatusBar, Dimensions } from "react-native";
const screenWidth=Dimensions.get('screen').width
const screenHieght=Dimensions.get('screen').height

const styles=StyleSheet.create({
    container:{
        marginTop:StatusBar.currentHeight,
        width:screenWidth,
        height:screenHieght,
        flex:1,
        alignItems:'center',
    },
    img:{
        position:'absolute',
        bottom:10,
    }
    
});
export default styles