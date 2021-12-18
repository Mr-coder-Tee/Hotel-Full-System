import { StyleSheet,StatusBar, Dimensions } from "react-native";
const screenWidth=Dimensions.get('screen').width
const screenHieght=Dimensions.get('screen').height

const styles=StyleSheet.create({
    container:{
        marginTop:StatusBar.currentHeight,
        width:screenWidth,
        height:screenHieght,
        flex:1,

    },
    reviewContainer:{
        marginTop:StatusBar.currentHeight,
        flex:1,
        padding:20
    }
    
});
export default styles