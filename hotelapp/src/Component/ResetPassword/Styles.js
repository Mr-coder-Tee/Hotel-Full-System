import { StyleSheet,StatusBar, Dimensions } from "react-native";
const screenWidth=Dimensions.get('screen').width
const screenHieght=Dimensions.get('screen').height
const viewhieght=screenHieght*.3

const styles=StyleSheet.create({
    container:{
        marginTop:StatusBar.currentHeight,
        width:screenWidth,
        height:screenHieght,
        flex:1,
        alignItems:'center'
    },
    contentView:{
        height:viewhieght,
        width:screenWidth,
        backgroundColor:'white',
        borderTopRightRadius:40,
        borderTopLeftRadius:40,
        // position:'absolute',
        // bottom:0,
        // left:0,
        // right:0,
        padding:20
    }
    
});
export default styles