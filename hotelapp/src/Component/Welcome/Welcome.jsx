import React,{useState,useEffect} from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import styles from "./Styles";
import { Images, FONTS,COLORS,SIZES } from "../../../Constants/Index";
import { Button } from "react-native-elements";
import Paint from "../../ReusebleComponent/Paint";
const decoHeight = Dimensions.get("screen").height * 0.3;
const paintHieght=Dimensions.get('screen').height*.35

const Welcome = ({navigation}) => {



  const DecoImage = Images.DecoImage;

  const Deco = ({ img,...props }) => (
    <View
    {...props}
      style={{
       
        borderRadius: 10,
        position: "absolute",
        overflow: "hidden",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
      }}
    >
      <Image source={img} style={{ width: "100%", height: "100%" }} />
    </View>
  );
  return (
    <View style={styles.container}>
      <Paint height={paintHieght}/>
      <View style={styles.viewWelcome}>
        <Text style={{ textAlign: "center",...FONTS.body3, marginBottom:10,marginTop:10}}>
          find your hotel easily and book in few easy steps
        </Text>
        <View
          style={styles.decoStyle}
        >
          <Deco img={DecoImage[0]} height={decoHeight*.2} width={decoHeight*.2} left={-15} top={10}  />
          <Deco img={DecoImage[1]} height={decoHeight*.3} width={decoHeight*.3} left={50}  bottom={5} />
          <Deco img={DecoImage[2]} height={decoHeight*.28} width={decoHeight*.28} right={10} top={10}  />
          <Deco img={DecoImage[3]} height={decoHeight*.18} width={decoHeight*.18} left={90} top={-10}/>
          <Deco img={DecoImage[4]} height={decoHeight*.25} width={decoHeight*.25} right={-20} top={110} />
          <Deco img={DecoImage[5]} height={decoHeight*.35} width={decoHeight*.35} left={180} top={60}  />
          <Deco img={DecoImage[6]} height={decoHeight*.17} width={decoHeight*.17} left={290} bottom={10}  />
          <Deco img={DecoImage[7]} height={decoHeight*.22} width={decoHeight*.22} right={280} bottom={130}  />
          <Deco img={DecoImage[8]} height={decoHeight*.2} width={decoHeight*.2} right={140} bottom={30}  />
          <Deco img={DecoImage[9]} height={decoHeight*.22} width={decoHeight*.22} right={375} bottom={100}  />
        </View>
        <View style={styles.btnContainer}>
          <Button
            title="Create Account"
            style={{ width: '100%', height: 50 ,padding:10,}}
            containerStyle={{ borderRadius: 20 }}
            buttonStyle={{ backgroundColor: COLORS.buttonColor}}
            onPress={()=>navigation.navigate('Register')}
          />
          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:20}}>
            <Text style={{...FONTS.h4,}}>Alreay have an account?</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
              <Text style={{ color: COLORS.textLinks,...FONTS.h4, }}> Sign in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Welcome;
