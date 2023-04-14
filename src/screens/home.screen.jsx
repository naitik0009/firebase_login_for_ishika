import {  SafeAreaView,  StyleSheet,Text} from "react-native";
import { HeaderComponent } from "../components/home/header.component";


import React, { useContext, useEffect } from "react";
import { UserContext } from "../context/user.context";
export const HomeScreen = ({navigation})=>{
const {user} = useContext(UserContext);

useEffect(()=>{

},[user]);

    return (
        <>
        <SafeAreaView style={styles.container}>
            <Text style={{color:"white"}}>{`Welcome ${user}`}</Text>
            <HeaderComponent navigation={navigation} />
        </SafeAreaView>
        </>
    )

}
const styles = StyleSheet.create({
    container:{backgroundColor:"black",flex:1,justifyContent:"center",alignItems:"center"}
})

