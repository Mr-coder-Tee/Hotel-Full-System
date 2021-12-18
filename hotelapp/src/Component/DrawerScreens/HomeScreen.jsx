import React, { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  FlatList,
  ScrollView
} from "react-native";
import { Icon } from "react-native-elements";
import { SIZES, COLORS, FONTS, dummyData } from "../../../Constants/Index";
import NavBar from "../../ReusebleComponent/NavBar";
import SearchBottomSheet from "../../ReusebleComponent/SearchBottomSheet";
import HomapageCard from "../../ReusebleComponent/HomapageCard";

const HomeScreen = ({ navigation }) => {
  const bottomSheet = useRef();
  const [popular, setPopular] = useState([]);
  const [near,setNear]=useState([])

  const fullData = dummyData.hotels;

  useEffect(() => {
    var data = [];
    var near=[]
    const getPopular = () => {
      data = fullData.filter((hotel) => hotel.rating > 4);
    };
    const getNear=()=>{
        near=fullData.filter((hotel) => hotel.address ==='polokwane');
    }
    getPopular();
    getNear()
    setPopular(data);
    setNear(near)
  }, []);

  return (
    <View style={styles.container}>
      <SearchBottomSheet bottomSheet={bottomSheet} />
      <NavBar navigation={navigation} />
      <View style={styles.viewContent}>
        <View
          style={{
            paddingHorizontal: 20,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <Text style={{ ...FONTS.h1 }}>Search</Text>
          <TouchableOpacity
            onPress={() => bottomSheet.current.show()}
            activeOpacity={0.7}
          >
            <Icon
              name="search"
              type="font-awesome"
              containerStyle={{
                backgroundColor: "white",
                padding: 10,
                borderRadius: 20
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
      <View style={{ marginTop: 20}}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 20,
            marginBottom: 10
          }}
        >
          <Text>Popular</Text>
          <TouchableOpacity activeOpacity={0.7}>
            <Text style={{ color: COLORS.LinkbuttonColor }}>View all</Text>
          </TouchableOpacity>
        </View>
        <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
         data={popular} 
         renderItem={({item})=>(
            <HomapageCard hotel={item} navigation={navigation}/>
        )}
        keyExtractor={(item)=>item.id}
        />
      </View>
      <View style={{ marginTop: 20}}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 20,
            marginBottom: 10
          }}
        >
          <Text>Near you</Text>
          <TouchableOpacity activeOpacity={0.7}>
            <Text style={{ color: COLORS.LinkbuttonColor }}>View all</Text>
          </TouchableOpacity>
        </View>
        <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
         data={near} 
         renderItem={({item})=>(
            <HomapageCard hotel={item} navigation={navigation}/>
        )}
        keyExtractor={(item)=>item.id}
        />
      </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    flex: 1
  },
  viewContent: {
    marginTop: StatusBar.currentHeight + SIZES.screenHeight * 0.05
  }
});
