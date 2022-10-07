import { setStatusBarBackgroundColor, StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { AntDesign,Entypo, FontAwesome,SimpleLineIcons, Ionicons, MaterialIcons } 
from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Ionicons style={styles.campana} name="notifications-outline" size={30} color="white" />
      <Text style={{paddingLeft: 13}}>Fasta Mb</Text>
      <Text style={{paddingLeft: 13}}>Personal Balance: R$0</Text>
      </View>
        <View style={styles.container_middle}>
         <Entypo style={styles.paddi} name="switch" size={24} color="green"/>
           <Text style={{paddingLeft: 12}}>Seller Mode</Text>
            <View style={styles.containerFooter}></View>
       </View>
       <View style={styles.containerFooter}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "70%"
  },
  header: {
    height: "30%",
    backgroundColor: "#00CF52",
  },
  paddi:{
    paddingLeft: "90%",
    position: 'absolute'
  },

  campana:{
    flexDirection: "row",
    paddingLeft: "90%",
    marginTop: 50,
    
  },

  container_middle: {
    width: "90%",
    absolute: 1,
    alignSelf: "center",
    height: 35,
    top: "28%",
    elevation: 4,
    borderRadius: 5,
    position: "absolute",
    justifyContent: "center",
    backgroundColor: "white",
  },
  containerFooter: {
   
    height: "90%",
    backgroundColor: "black",
    flexDirection: "row",
    margin: 20,
    justifyContent: "center",
    position: "absolute",
    bottom: 5,

  },
  comment: {
    color: "#c6c6c6",
    marginLeft: 50,
    marginBottom: 15,
  },
  textPrincipal: {
    marginHorizontal: 10,
    marginTop: 20,
    marginBottom: 10,
  },
  texto: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
