import React from 'react'
import { View, Text } from 'react-native'
import styles from './Styles'
import Back from '../../ReusebleComponent/Back'
import Map from './Map'

const Location = ({navigation,route}) => {
    const {data}=route.params 
    return (
        <View style={styles.container}>
            <Back navigation={navigation}/>
            <View style={{flex:1}}>
                <Map data={data}/>
            </View>
            <View></View>
        </View>
    )
}

export default Location
