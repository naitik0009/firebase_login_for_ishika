import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { UserContext } from "../../context/user.context";
import { authentication } from "../../services/databases/firebase.config";
import React,{useContext} from "react";
export const HeaderComponent = ({navigation}) => {
    //we have to use context api or redux to bring this loading function into action
  const {setUser} = useContext(UserContext);  
  const [loading,setloading] = React.useState(false);
    const SignOut = async () => {
        try {
            setloading(true);
           await authentication.signOut().then((result)=>{setUser("")}).catch((error)=>{alert(error)}).finally(()=>setloading(false));
        } catch (error) {
            alert(error.message)
        }
    };
    
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={()=>SignOut()} style={styles.btn} >
              <Text style={{color:"white"}}>Logout</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { color:"white", alignItems: "center",justifyContent:"center",display:"flex",marginTop:100 },
    btn:{color:"white", alignItems: "center",justifyContent:"center",display:"flex" ,width:200,height:50,marginTop:200,borderWidth:1,borderColor:"grey"}

});