import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Feather from 'react-native-vector-icons/Feather';
import Whiteboard from '../screens/Whiteboard';
import Assessments from '../screens/Assessments';
import Attendence from '../screens/Attendence';
import Payment from '../screens/Payment';
import Profile from '../screens/Profile';
import DrawerContent from './DrawerContent';
import DashboardNavigator from './DashboardNavigator';
import NotesNavigator from './NotesNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => (
  <Drawer.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#FFFFFF',
        elevation: 5,
        borderBottomStartRadius: 15,
        borderBottomEndRadius: 15,
        elevation: 10,
      },
      headerTitleAlign: 'center',
      headerTintColor: '#476880',
    }}
    backBehavior={'order'}
    drawerContentOptions={{
      activeBackgroundColor: '#f2f2f2',
      activeTintColor: '#000000',
      labelStyle: {fontSize: 18},
      itemStyle: {
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
        paddingHorizontal: 10,
      },
    }}
    drawerStyle={{
      borderTopRightRadius: 30,
      borderBottomRightRadius: 30,
    }}
    drawerContent={props => <DrawerContent {...props} />}>
    <Drawer.Screen
      name="Dashboard"
      component={DashboardNavigator}
      options={{
        drawerIcon: ({color, size}) => (
          <Feather name="bookmark" size={size} color={color} />
        ),
        headerShown: false,
        unmountOnBlur: true,
      }}
    />
    <Drawer.Screen
      name="Whiteboard"
      component={Whiteboard}
      options={{
        drawerIcon: ({color, size}) => (
          <Feather name="clipboard" size={size} color={color} />
        ),
        headerShown: false,
        unmountOnBlur: true,
      }}
    />
    <Drawer.Screen
      name="Notes"
      component={NotesNavigator}
      options={{
        drawerIcon: ({color, size}) => (
          <Feather name="file" size={size} color={color} />
        ),
        headerShown: false,
        unmountOnBlur: true,
      }}
    />
    <Drawer.Screen
      name="Assessments"
      component={Assessments}
      options={{
        drawerIcon: ({color, size}) => (
          <Feather name="book" size={size} color={color} />
        ),
        headerShown: false,
        unmountOnBlur: true,
      }}
    />
    <Drawer.Screen
      name="Attendence"
      component={Attendence}
      options={{
        drawerIcon: ({color, size}) => (
          <Feather name="database" size={size} color={color} />
        ),
        headerShown: false,
        unmountOnBlur: true,
      }}
    />
    <Drawer.Screen
      name="Payment"
      component={Payment}
      options={{
        drawerIcon: ({color, size}) => (
          <Feather name="dollar-sign" size={size} color={color} />
        ),
        headerShown: false,
        unmountOnBlur: true,
      }}
    />
    <Drawer.Screen
      name="Profile"
      component={Profile}
      options={{
        drawerIcon: ({color, size}) => (
          <Feather name="user" size={size} color={color} />
        ),
        headerShown: false,
        unmountOnBlur: true,
      }}
    />
  </Drawer.Navigator>
);

export default DrawerNavigator;
