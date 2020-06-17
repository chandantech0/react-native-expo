import React, { memo, useState } from "react";
import Background from "../components/Background";
import Paragraph from "../components/Paragraph";
import Button from "../components/Button";
import { Navigation } from "../types";
import { logoutUser } from "../api/auth-api";
import { StyleSheet, View, Text, Switch  } from "react-native";
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
import CampaignDetail from "./CampaignDetail";
import { createStackNavigator } from '@react-navigation/stack';



const screenWidth = Dimensions.get("window").width;

type Props = {
  navigation: Navigation;
};


const Dashboard = ({ navigation }: Props) => {

  const dashboardHome = ({ navigation }) => {
    return (
      <Background>
      <ScrollView>
      <Button onPress={() => navigation.toggleDrawer()}>
        Close
        </Button>
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
    <Button mode="outlined" onPress={() => logoutUser()}>
      Logout
    </Button> 
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
    return (
      <Background>
      <ScrollView>
      <Button onPress={() => navigation.toggleDrawer()}>
        Close
        </Button>
        <Card title='Shane'>
        <Switch style={{position: 'absolute', right: 0}}
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      /> 
  <Text style={{marginBottom: 10}}>
    The idea with React Native Elements is more about component structure than actual design.
  </Text>
  <Text style={{marginBottom: 10, marginTop: 10, textAlign: "center"}}>
  11 Sept 11 11 requests  11hour
  </Text>
  <Button mode="contained" onPress={() => navigation.navigate('CampaignDetail', { screen: 'CampaignDetail' })}
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
  <Text style={{marginBottom: 10}}>
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
  const Stack = createStackNavigator();

  const CampaignsSub = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="CampaignDetail" component={CampaignDetail} />
      </Stack.Navigator>
    );
  }
  
  const MyDrawer  = () => {
    return (
      <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="Dashboard" component={dashboardHome} />
        <Drawer.Screen name="Campaigns" component={Campaigns} />
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
  mt20: { marginBottom: 20, marginTop: 20}
});

export default memo(Dashboard);



