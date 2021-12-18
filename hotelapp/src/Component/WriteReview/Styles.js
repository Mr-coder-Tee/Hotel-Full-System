import { StyleSheet,StatusBar, Dimensions } from "react-native";
import { SIZES } from "../../../Constants/Index";


const styles=StyleSheet.create({
    container:{
        marginTop:StatusBar.currentHeight,
        flex:1,
    },
    viewContainer:{
        marginTop:-50,
        backgroundColor:'white',
        borderTopLeftRadius:40,
        borderTopRightRadius:40,
        flex:1,
        padding:20
    },
    
    
});
export default styles