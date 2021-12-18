import { StyleSheet,StatusBar, Dimensions } from "react-native";
const screenWidth=Dimensions.get('screen').width
const screenHieght=Dimensions.get('screen').height

const styles=StyleSheet.create({
    container:{
        width:screenWidth,
        height:screenHieght,
        flex:1,
        marginTop:10
    },
    img:{
        position:'absolute',
        bottom:10,
    }
    
});
export default styles