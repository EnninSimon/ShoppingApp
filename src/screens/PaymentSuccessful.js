import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import shopping2 from '../../assets/shopping2.png'

const PaymentSuccessful = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>PAYMENT SUCCESSFUL</Text>
                <Text style={styles.description}>Lorem is simply dummy text of the printing and type
                seting industry. Lorem ipsum has been the industry's
                standard dummy text ever since the 1500s,
                  when an unknown printer took a galley</Text>
            </View>
            <View style={styles.imageContainer}>
                <Image source={shopping2} style={styles.image} />
            </View>

            <View style={styles.nextContainer}>
                <TouchableOpacity
                    style={styles.button}
                >
                    <Text style={styles.next}>Get Started</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.swiperContainer}>
                <TouchableOpacity onPress={()=>{
                    navigation.navigate("AddToCart")
                }}>
                <Text style={styles.previous}>Previous</Text>
                </TouchableOpacity>
                <View style={styles.swiper}>
                    <TouchableOpacity><Text style={styles.mainSwipe}></Text></TouchableOpacity>
                    <TouchableOpacity><Text style={styles.mainSwipe}></Text></TouchableOpacity>
                    <TouchableOpacity><Text style={styles.mainSwipeDiffrent}></Text></TouchableOpacity>
                </View>
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
        marginHorizontal: 95,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 140
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
        color: '#8e8e8e',
       paddingLeft: 5
    },

})

export default PaymentSuccessful;


