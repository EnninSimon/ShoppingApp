import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { ceil } from 'react-native-reanimated';
import shopping3 from '../../assets/shopping3.png';

const AddToCart = ({ route, navigation }) => {
    console.log(route.params)
    const {newTitle} = route.params
    return (
        <View style={styles.container}>
            <View style={styles.mHorizontal}>
                <Text style={styles.title}>{newTitle}</Text>
                <Text style={styles.description}>Lorem is simply dummy text of the printing and type
                seting industry. Lorem ipsum has been the industry's
                standard dummy text ever since the 1500s,
                  when an unknown printer took a galley</Text>
            </View>
            <View style={styles.mHorizontal}>
                <Image source={shopping3} style={styles.image} />
            </View>


            <View style={styles.nextContainer}>
                <TouchableOpacity onPress={() => {
                    navigation.navigate("PaymentSuccessfull")
                }} style={styles.button}>
                    <Text style={styles.next}>Next</Text>
                </TouchableOpacity>
            </View>
            
            <View style={styles.swiperContainer}>
                <TouchableOpacity onPress={()=>{
                    navigation.navigate("OnlineShopping")
                }}>
                <Text style={styles.previous}>Previous</Text>
                </TouchableOpacity>
                <View style={styles.swiper}>
                    <TouchableOpacity><Text style={styles.mainSwipe}></Text></TouchableOpacity>
                    <TouchableOpacity><Text style={styles.mainSwipeDiffrent}></Text></TouchableOpacity>
                    <TouchableOpacity><Text style={styles.mainSwipe}></Text></TouchableOpacity>
                </View>
                <TouchableOpacity onPress={()=>{
                    navigation.navigate("PaymentSuccessfull")
                }}>
                <Text style={styles.skip}>Skip</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 27,
        marginHorizontal: 20,
        marginVertical: 15
    },
    description: {
        fontSize: 16,
        marginHorizontal: 20,
        marginBottom: 25,
        color: '#595959'
    },
    image: {
        width: 365,
        height: 300,
    },
    button: {
        backgroundColor: '#3466ff',
        borderRadius: 25,
        height: 48,
        width: 120,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 110,
        marginTop: 80,
    },
    next: {
        fontSize: 19,
        fontWeight: 'bold',
        color: '#fff',
    },
    nextContainer : {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20,
    },
    swiperContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginVertical: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    swiper: {
        display: 'flex',
        flexDirection: 'row',
        marginHorizontal: 90,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 85
        
    },
    mainSwipe: {
        backgroundColor: '#8e8e8e',
        borderRadius: 10,
        height: 10,
        width: 9,
        marginHorizontal: 2,
        justifyContent: 'center',
        
    },
    mainSwipeDiffrent: {
        backgroundColor: '#3466ff',
        borderRadius: 10,
        height: 10,
        width: 18,
    },
    previous: {
        fontWeight: 'bold',
        fontSize: 15,
        color: '#8e8e8e'
    },
    skip: {
        fontWeight: 'bold',
        fontSize: 15,
        color: '#8e8e8e'
    }

})

export default AddToCart;


