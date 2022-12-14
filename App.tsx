import { setStatusBarBackgroundColor, StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { AntDesign,Entypo, FontAwesome,SimpleLineIcons, Ionicons, MaterialIcons, MaterialCommunityIcons } 
from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
          <View style={styles.header}>
          <Image
              style={styles.imagenProfile}
              source={require("./assets/img/akali.jpg")}/>
            <Ionicons style={styles.campana} name="notifications-outline" size={30} color="white" />
            <Text style={styles.superior}>Fasta Mb</Text>
              <Text style={styles.superiorDOS}>Personal Balance: R$0</Text>
            </View>


        <View style={styles.container_middle}>
          <Entypo style={styles.paddi} name="switch" size={24} color="green"/>
            <Text style={{paddingLeft: 12}}>Seller Mode</Text>
            </View>

        <View style={styles.containerText}>
        <Text style={styles.textPrincipal}>My Fiverr</Text>
        </View>

        <View style={styles.containerText}>
          <View style={styles.containerComement2}>
            <FontAwesome style={styles.icon} name="diamond" size={24} color="gray" />
            <View>
                <Text style={styles.text}>Get Inspired</Text>
              </View>
                    <MaterialIcons style={styles.arrow} name="arrow-forward-ios" size={24} color="black" />
          </View>
          
          <View style={styles.containerComement2}>
              <AntDesign style={styles.icon} name="heart" size={24} color="gray" />
                <View>
                  <Text style={styles.text}>Save Gigs</Text>
                </View>
              <MaterialIcons style={styles.arrow} name="arrow-forward-ios" size={24} color="black" />
            </View>

            <View style={styles.containerComement2}>
            <AntDesign style={styles.icon} name="inbox" size={24} color="gray" />
                <View>
                  <Text style={styles.text}>My Interest</Text>
                </View>
                <MaterialIcons style={styles.arrow} name="arrow-forward-ios" size={24} color="black" />
            
          </View>
          </View>
          
          <View style={styles.containerText}>
          <Text style={styles.textPrincipal}>Buying</Text>

        </View>
        <View style={styles.containerText}>
          <View style={styles.containerComement2}>
          <SimpleLineIcons style={styles.icon} name="notebook" size={24} color="gray" />
            <View>
                <Text style={styles.text}>Post a Request</Text>
              </View>
                    <MaterialIcons style={styles.arrow} name="arrow-forward-ios" size={24} color="black" />
          </View>
          
          <View style={styles.containerComement2}>
          <Ionicons style={styles.icon} name="ios-pencil-outline" size={24} color="gray" />
                <View>
                  <Text style={styles.text}>Manage Request</Text>
                </View>
              <MaterialIcons style={styles.arrow} name="arrow-forward-ios" size={24} color="black" />
            </View>
          </View>

          <View style={styles.containerText}>
          <Text style={styles.textPrincipal}>General</Text>
        </View>

        <View style={styles.containerText}>
          <View style={styles.containerComement2}>
            <AntDesign style={styles.icon} name="setting" size={24} color="gray" />
              <View>
                <Text style={styles.text}>Settings</Text>
              </View>
                <MaterialIcons style={styles.arrow} name="arrow-forward-ios" size={24} color="black" />
          </View>
          
        <View style={styles.containerComement2}>
        <MaterialIcons style={styles.icon} name="online-prediction" size={24} color="gray" />
            <View>
              <Text style={styles.text}>Show online status</Text>
            </View>
              <Entypo style={styles.arrow} name="switch" size={24} color="green"/>
            </View>
            
            <View style={styles.containerComement2}>
              <MaterialIcons style={styles.icon} name="payment" size={24} color="gray" />
            <View>
              <Text style={styles.text}>Payments</Text>
            </View>
            <MaterialIcons style={styles.arrow} name="arrow-forward-ios" size={24} color="black" />
            </View>

            <View style={styles.containerComement2}>
            <FontAwesome  style={styles.icon} name="send-o" size={24} color="gray" />
            <View>
              <Text style={styles.text}>Invite Friends</Text>
            </View>
            </View>

            <View style={styles.containerComement2}>
            <FontAwesome style={styles.icon} name="money" size={24} color="gray" />
            <View>
              <Text style={styles.text}>Become a Seller</Text>
            </View>
            <MaterialIcons style={styles.arrow} name="arrow-forward-ios" size={24} color="black" />
            </View>
            <View style={styles.containerComement2}>
            <FontAwesome style={styles.icon} name="support" size={24} color="gray" />
            <View>
              <Text style={styles.text}>Support</Text>
            </View>
            <MaterialIcons style={styles.arrow} name="arrow-forward-ios" size={24} color="black" />
            </View>
          </View>
          
        <View style={styles.containerFooter}>
          <Entypo style={styles.footerIcon} name="home" size={35} color="white" />
            <Entypo style={styles.footerIcon} name="message" size={35} color="white" /> 
            <AntDesign style={styles.footerIcon} name="search1" size={35} color="white" />
              <AntDesign style={styles.footerIcon} name="profile" size={35} color="white" /> 
                <MaterialCommunityIcons style={styles.footerIcon} name="face-man" size={35} color="green" />
          </View>
        </View>
      );
    };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",

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
  containerText: {
    marginHorizontal: 15,
    marginTop: 10,
  },
  containerComement2: {
    flexDirection: "row",
    marginTop: 10,
    bottom: 10,

    
  },
  textPrincipal: {
    color: "black",
    fontSize: 20,
    marginTop: 10,
    fontWeight: "bold",  
  },

  text: {
    color: "black",
    fontSize: 15,
    fontWeight: "bold",
    marginHorizontal:13,
    paddingLeft: 30,
    position: 'relative',

  },
  icon: {
    marginRight: 1,
    flexDirection: 'column',
    position: 'absolute',
},
  arrow: {
    flexDirection: "row",
    marginLeft: "90%",
    position: 'absolute',
},
  imagenProfile:{
    height: "50%",
    width: "18%",
    top: 50,
    marginLeft: "32%",
    borderRadius: 100,
    position: 'absolute',
},
  superior: {
    marginLeft: 160,
    marginTop: 60,
    top: 40,
  },
  containerFooter: {
    position: 'absolute',
    width: "100%",
    backgroundColor: "black",
    top: "95%",
    height: "10%",
    flexDirection: "row",
    justifyContent: "center",

  },
  footerIcon: {
    marginHorizontal: 26,
    marginTop: 1,
  },
  superiorDOS: {
    marginLeft: 120,
    marginTop: 40,
    marginBottom: 10,
    justifycontent: "center",
  },
  scrollView: {
    backgroundColor: 'pink',
    top: 20,
  },

});
