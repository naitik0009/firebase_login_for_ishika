import { SafeAreaView,StyleSheet } from 'react-native'
import React from 'react'

import { RegisterComponent } from '../components/auth/register.component';

export const RegisterScreen= ({navigation})=> {
    const InstagramLogo = "https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png";
  return (
    <SafeAreaView style={styles.container}>

     <RegisterComponent navigation={navigation}/>
    
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        marginTop:50,
        paddingHorizontal:12,
        flex:1,

},
    image:{
        marginTop:60,
        alignItems:"center",
        width:100,
        height:100,
    }


});