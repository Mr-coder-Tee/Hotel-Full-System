import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Avatar } from 'react-native-elements'
import { COLORS,FONTS } from '../../Constants/Index'
import Rating from '../../src/ReusebleComponent/Rating'
const ReviewCard = ({review}) => {
    console.log(review)
    return (
        <View style={styles.container}> 
            <View style={styles.profile}>
                <Avatar size="medium" rounded source={{uri:review.avatar}} />
                <View style={{marginLeft:10}}>
                    <Text>{review.username}</Text>
                    <Rating rate={review.stars} showText={true}/>
                </View>
            </View>
            <View style={{marginVertical:10}}>
                <Text style={{color:COLORS.black}}>
                    {
                        review.comment
                    }
                </Text>
            </View>
        </View>
    )
}

export default ReviewCard

const styles = StyleSheet.create({
    container:{
        borderRadius:10,
        borderWidth:.5,
        borderColor:COLORS.gray,
        padding:10,
        backgroundColor:COLORS.gray,
        marginVertical:5
    },
    profile:{
        flexDirection:'row'
    }
})
