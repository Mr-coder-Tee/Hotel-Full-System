import { StyleSheet,StatusBar, Dimensions } from "react-native";
const screenWidth=Dimensions.get('screen').width
const screenHieght=Dimensions.get('screen').height
const margintop = StatusBar.currentHeight + 50;


const styles=StyleSheet.create({
    container:{
        marginTop:StatusBar.currentHeight,
        flex:1,
    },
    viewContainer:{
        marginTop:margintop,

    },
    imgContainer:{
        width:100,
        height:100,
        backgroundColor:'red',
        borderRadius:15,
        position:'relative',

        
    },
    holder:{
        justifyContent:'center',
        alignContent:'center',
        flexDirection:'row',
    }
    
});
export default styles