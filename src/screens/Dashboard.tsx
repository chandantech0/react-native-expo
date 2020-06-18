import React, { Component, useState, memo } from "react";
import Background from "../components/Background";
import Paragraph from "../components/Paragraph";
import Button from "../components/Button";
import { Navigation } from "../types";
import { logoutUser } from "../api/auth-api";
import { StyleSheet, View, Text, Switch, Image, TextInput, TouchableOpacity  } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {
  ScrollView
} from "react-native";
import {
  LineChart
} from "react-native-chart-kit";
import { Dimensions } from "react-native";
import { Card } from 'react-native-elements';
import Header from "../components/Header";




const screenWidth = Dimensions.get("window").width;

type Props = {
  navigation: Navigation;
};



const Dashboard = ({ navigation }: Props) => {

  const dashboardHome = ({ navigation }) => {
    
    return (

      <Background >
     
      <div style={{ width: 'calc(100% + 40px)',flex: 1, margin: '-20px 0 10px',boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.2)',backgroundColor: 'white'}}>
      <Button onPress={() => navigation.toggleDrawer()} style={{display: 'inline-flex', width:'calc(40% - 35px) ', marginLeft: '0px',marginRight: '15px'}}> 
      <Image source={"https://cdn3.iconfinder.com/data/icons/mobile-friendly-ui/100/menu-512.png"} style={{width: 60, height: 20}} />
        </Button> 
       
        <Text style={{display:'inline-flex',textAlign:'center',width:'25%',marginRight: '15px'}} >Dashboard</Text>
        

        <Button mode="outlined" onPress={() => logoutUser()} style={{display:'inline-flex', width: 'cal(40% - 35px)',marginRight: '20px'}}>
          Logout
        </Button> 

        </div>


      <ScrollView>
      
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
         {/* <Logo /> */}
<View style={styles.mt20}>
<Text>Data in Chart</Text>
</View>
<View style={styles.ResponsiveWidth}>
  <LineChart style={styles.ResponsiveWidth}
    data={{
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        {
          data: [
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100
          ]
        }
      ]
    }}
    width={Dimensions.get('window').width - 30} // from react-native
    height={420}
    yAxisLabel="$"
    yAxisSuffix="k"
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "#e26a00",
      backgroundGradientFrom: "#19b5fe",
      backgroundGradientTo: "#19b5fe",
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />
  </View>

  <View style={styles.container}>
  <View style={styles.mt20}>
<Text>Data in Table</Text>
</View>
<table style={{ width: '100%', marginBottom: '30px' }}>
  <tr style={{ border: "1px solid #dddddd"}}>
    <th style={{ border: "1px solid #dddddd", textAlign: "left",  padding: "8px", backgroundColor: "#dddddd"}}>Company</th>
    <th style={{ border: "1px solid #dddddd", textAlign: "left",  padding: "8px", backgroundColor: "#dddddd"}}>Contact</th>
    <th style={{ border: "1px solid #dddddd", textAlign: "left",  padding: "8px", backgroundColor: "#dddddd"}}>Country</th>
  </tr>
  <tr style={{ border: "1px solid #dddddd"}}>
    <td style={{ border: "1px solid #dddddd", textAlign: "left",  padding: "8px"}}>Alfreds Futterkiste</td>
    <td style={{ border: "1px solid #dddddd", textAlign: "left",  padding: "8px"}}>Maria Anders</td>
    <td style={{ border: "1px solid #dddddd", textAlign: "left",  padding: "8px"}}>Germany</td>
  </tr>
  <tr style={{ border: "1px solid #dddddd"}}>
    <td style={{ border: "1px solid #dddddd", textAlign: "left",  padding: "8px"}}>Alfreds Futterkiste</td>
    <td style={{ border: "1px solid #dddddd", textAlign: "left",  padding: "8px"}}>Maria Anders</td>
    <td style={{ border: "1px solid #dddddd", textAlign: "left",  padding: "8px"}}>Germany</td>
  </tr>
</table>
</View>
   
    <Paragraph>
      Your amazing app starts here. Open you favourite code editor and start
      editing this project.
    </Paragraph>
    
      </View>
      </ScrollView>
      </Background>
    );
  }
  
  const Campaigns = ({ navigation }) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const [isEnabled2, setIsEnabled2] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);
    const clickHandler = () => {
      //function to handle click on floating Action Button
      console.log('Floating Button Clicked');
    }
    return (
      <Background>
              <TouchableOpacity
          activeOpacity={0.9}
          onPress={clickHandler}
          style={styles.TouchableOpacityStyle}>
          <Image
            //We are making FAB using TouchableOpacity with an image
            //We are using online image here
             source={{
uri:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAADlklEQVRoge2ZP2wbVRjAf9+zHURJVVFA0KYdaB0cqROyk4qxFQudYIiKCEgMRY6VVGJHlYKE2BFxEgupUyq1KQNIwJi1ora7IYhjhGiNWxUSIUgjxcT3dSAduDv77tnnK1Lz2/ze9979Pt35/YV99nmykSg6mVzRxK+b9QlHOINKVtExA0cUhvcesqXQBFlDtOq0Wb11P32TOXH6fXZfCYwX68dJ6IwD7wqMWDZviLJskhS//2C00atDTwm8enn9hURLPwF5Hxjq9eF7tEAuq7QvVfOZP2wbWyeQLdXeEZXPgcO2bQPYQGW2UkhftWkUOoFsqZIyzqEFFS7Yu1kgUlL+vFjN5/4JFR4mKFtqHhDnwZcIb/RnFxb9TmV4spo/uh0UaYICsqVKKl55ADknzvbXp1Z+CPx/BSZgnEML8crvIfr605tPfRYY1q1yfHF9SoXl6KzsEeTt8nT6Wuf6DkzM//ick0z+BDw/ELPwbKo4mU5DbMdPyEkmPuXxywMcRs3HnSp938DpL9aPtdv8TB+TVDmf/s/v8VK9164AWipmtJo/edtd4fsGnDaz9D/DRsmQcZyCX4U3gTk1ClMDV7LEEd6bXNGEu9yTwMRL9dPAsVisLBAY+WWjlnWXexJwhDPxKNmjxpx1l3kSUNVcPDr2iBL8BgR5JR6dnsi4C5I+QUfC9uYeKnuNtRhiPW5+w+hw2N4eAwfdBYGLuf87fglsxW4Rnr/dBX7/gbuE3C52+3YjXko84q67wDuMorUonjQg1twF3mFUpBKPiz0KHjfvTNxmNR4de4wxHjdPArfup28Cd2IxsuN2uXmi6i70WY2KI8qVWJQsULjidxTpOw+YJEWgNXCr8OwMqVP0q+i4J84t1RdBpwfnZIEwX8mPXvSr6jgTp5I7HwHWZ5UDYENxOu6JOyZw48KpTVR8s44TFQrdDn27roUqhfRVRErRa4WmWM2PXu8WELiYe/nZkzPAV5EphUa+Hb7X+DAwKkxX2VLzgOjWdZBz/YsFo/AN8sz5SA53Aar5o9sqf70JstS/XiDFg/cab4WRhx4uOMaX6ucVnSfqUzvldzXMBH3zbqw3NOXp9DWzuzumsADs2Lb3YQdhPpVqjdnKQ5+XfK8tro3sYmZVmAKOWza/o7A8pE7xRiHzW68OkVyzMqcm92Itp8ac3Tv6yPDvreWj/fUWog1UagoVY8xquXmiGsU16z77POk8BNTMFulXSnTmAAAAAElFTkSuQmCC',
            }}
            //You can use you project image Example below
            //source={require('./images/float-add-icon.png')}
            style={styles.FloatingButtonStyle}
          />
        </TouchableOpacity>
      <div style={{ width: 'calc(100% + 40px)',flex: 1, margin: '-20px 0 10px',boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.2)',backgroundColor: 'white'}}>
      <Button onPress={() => navigation.toggleDrawer()} style={{display: 'inline-flex', width:'calc(40% - 35px) ', marginLeft: '0px',marginRight: '15px'}}> 
      <Image source={"https://cdn3.iconfinder.com/data/icons/mobile-friendly-ui/100/menu-512.png"} style={{width: 60, height: 20}} />
        </Button> 
       
        <Text style={{display:'inline-flex',textAlign:'center',width:'25%',marginRight: '15px'}} >Dashboard</Text>
        

        <Button mode="outlined" onPress={() => logoutUser()} style={{display:'inline-flex', width: 'cal(40% - 35px)',marginRight: '20px'}}>
          Logout
        </Button> 

        </div>
      <ScrollView style={{width: '100%'}}>
        <Card title='Shane'>
        <Switch style={{position: 'absolute', right: 0}}
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      /> 
  <Text style={{marginBottom: 10, textAlign: "center"}}>
    The idea with React Native Elements is more about component structure than actual design.
  </Text>
  <Text style={{marginBottom: 10, marginTop: 10, textAlign: "center"}}>
  11 Sept 11 11 requests  11hour
  </Text>
  <Button mode="contained" onPress={() => navigation.navigate('CampaignDetail')}
    >Show</Button>
</Card>

<Card title='Shane'>
        <Switch style={{position: 'absolute', right: 0}}
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled2 ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch2}
        value={isEnabled2}
      /> 
  <Text style={{marginBottom: 10, textAlign: "center"}}>
    The idea with React Native Elements is more about component structure than actual design.
  </Text>
  <Text style={{marginBottom: 10, marginTop: 10, textAlign: "center"}}>
  11 Sept 11 11 requests  11hour
  </Text>
  <Button
    >Show</Button>
</Card>
        </ScrollView>
        </Background>
    );
  }
  

  const Subscription = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    return (

      
      <Background>
         
      <div style={{ width: 'calc(100% + 40px)',flex: 1, margin: '-20px 0 10px',boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.2)',backgroundColor: 'white'}}>
      <Button onPress={() => navigation.toggleDrawer()} style={{display: 'inline-flex', width:'calc(40% - 35px) ', marginLeft: '0px',marginRight: '15px'}}> 
      <Image source={"https://cdn3.iconfinder.com/data/icons/mobile-friendly-ui/100/menu-512.png"} style={{width: 60, height: 20}} />
        </Button> 
       
        <Text style={{display:'inline-flex',textAlign:'center',width:'25%',marginRight: '15px'}} >Dashboard</Text>

        <Button mode="outlined" onPress={() => logoutUser()} style={{display:'inline-flex', width: 'cal(40% - 35px)',marginRight: '20px'}}>
          Logout
        </Button> 

        </div>
      <ScrollView>
      <Card title='Basic $9.97'>
      <Text style={{marginBottom: 10}}>
    Market $24.97
  </Text>
  <Text style={{marginBottom: 10}}>
    100 Sent Message
  </Text>
  <Text style={{marginBottom: 10}}>
   Build subscriber lists
  </Text>
  <Text style={{marginBottom: 10, marginTop: 10, textAlign: "center"}}>
    <hr />
    <Button mode="contained">Currently Subscribe</Button>
  </Text>
      
</Card>

<Card title='Basic $12.97'>
  <Text style={{marginBottom: 10}}>
    Market $24.97
  </Text>
  <Text style={{marginBottom: 10}}>
    100 Sent Message
  </Text>
  <Text style={{marginBottom: 10}}>
   Build subscriber lists
  </Text>
  <Text style={{marginBottom: 10, marginTop: 10, textAlign: "center"}}>
    <hr />
    <Button mode="contained">Upgrade</Button>
  </Text>
</Card>
        </ScrollView>
        </Background>
    );
  }



  const CustomDrawerContent = (props) => {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Close drawer"
          onPress={() => props.navigation.closeDrawer()}
        />

      </DrawerContentScrollView>
    );
  }
  
  
  const Drawer = createDrawerNavigator();
  
  const MyDrawer  = () => {
    return (
      <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="Dashboard" component={dashboardHome} />
        <Drawer.Screen name="Campaigns" component={Campaigns} />
        <Drawer.Screen name="Subscription" component={Subscription} />
      </Drawer.Navigator>
    );
  }

  return (

      <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>

   );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  chartConfig: {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 },
  mt20: { marginBottom: 20, marginTop: 20},
  TouchableOpacityStyle: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
    zIndex: 1
  },

  FloatingButtonStyle: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
    //backgroundColor:'black'
  },
});

export default memo(Dashboard);



