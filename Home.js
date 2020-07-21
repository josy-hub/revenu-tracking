import React from "react";
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  ImageBackground,
  Platform,
} from "react-native";
import { Block, Text, theme, Icon } from "galio-framework";

import { Button } from "../components";
import { Images, argonTheme } from "../constants";
import { HeaderHeight } from "../constants/utils";
import { LinearGradient as Gradient } from "expo";
import { CardHome } from "../components/CardHome";

const { width, height } = Dimensions.get("screen");

const thumbMeasure = (width - 48 - 32) / 3;

class Home extends React.Component {
  render() {
    return (
      <Block flex style={styles.home}>
        <Block flex style={styles.main_container} >
          <ImageBackground
            source={Images.Home1Background}
            style={styles.homeContainer}
            imageStyle={styles.home1Background}
            
          >
            <Block middle style={styles.avatarContainer}>
                  <Image
                    source={{ uri: Images.ProfilePicture }}
                    style={styles.avatar}
                  />
                </Block>
                <Block card style={styles.name_container}>
                <Block middle style={styles.nameInfo}>
                    <Text
                      bold
                      size={18}
                      color="#FFF"
                      style={{ textAlign: "center" }}
                    >
                      Mr Pompidou, DG de SOCEC
                    </Text>
                  </Block>
                  </Block>
            <ScrollView
              style={{ width , height}}
            >
              <Block flex style={styles.profileCard}>
                <Block flex>
                  <Block style={{ paddingBottom: -HeaderHeight * 2 }}>
                    <Block column space="between" style={{ flexWrap: "wrap" }}>
                      <CardHome
                        title="renseigner les revenus"
                        //subtitle="subtitle1"
                        iconFamily="Galio"
                        icon="list-bullet"
                      />
                      <CardHome
                        title="consulter les revenus"
                        //subtitle="subtitle1"
                        iconFamily="Galio"
                        icon="list-bullet"
                      />
                    </Block>
                  </Block>
                </Block>
              </Block>
            </ScrollView>
          </ImageBackground>
        </Block>
       <Block style={styles.footer}>
       </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({  
  home: {
    marginTop: Platform.OS === "android" ? -HeaderHeight : 0,
    // marginBottom: -HeaderHeight * 2,
    flex: 1,
  },
  main_container:{
    width: width, 
    height: height - 60
  },
  homeContainer: {
    width: width,
    height: height,
    padding: 0,
    zIndex: 1,
  },
  home1Background: {
    width: width,
    height: height / 3
    
  },
  profileCard: {
    // position: "relative",
    padding: theme.SIZES.BASE*2,
    marginHorizontal: theme.SIZES.BASE*1.1,
    marginTop: 60,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: "black",
    shadowOffset: { width: 2, height: 4 },
    shadowRadius: 8,
    shadowOpacity: 100,
    zIndex: 1
  },
  info: {
    paddingHorizontal: 40,
  },
  avatarContainer: {
    position: "relative",
    marginTop: 50,
  },
  avatar: {
    width: 124,
    height: 124,
    borderRadius: 62,
    borderWidth: 0,
  },
  name_container:{
    opacity:0.5,
    position:"relative",
    marginBottom: 0,
    backgroundColor:"#0F0303",
  },
  nameInfo: {
    marginTop: 35,
  },
  divider: {
    width: "90%",
    borderWidth: 1,
    borderColor: "#E9ECEF",
  },
  thumb: {
    borderRadius: 4,
    marginVertical: 4,
    alignSelf: "center",
    width: thumbMeasure,
    height: thumbMeasure,
  },
  footer:{
    width: width,
    height: 70, 
    backgroundColor:"green"
  },
  /*footerimage:{
    width:57.09,
    height:59,
    zIndex:1
  }*/
});

export default Home;
