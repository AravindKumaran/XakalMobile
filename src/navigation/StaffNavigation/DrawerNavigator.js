import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Feather from 'react-native-vector-icons/Feather';
import Whiteboard from '../../screens/StaffManagement/Whiteboard/Whiteboard';
import Profile from '../../screens/StaffManagement/Profile/Profile';
import StudentDetails from '../../screens/StaffManagement/StudentDetails/StudentDetails';
import Salary from '../../screens/StaffManagement/Salary/Salary';
import DrawerContent from './DrawerContent';
import DashboardNavigator from './DashboardNavigator';
import NotesNavigator from './NotesNavigator';
import AssessmentsNavigator from './AssessmentsNavigator';

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
      activeBackgroundColor: '#FFFFFF',
      inactiveTintColor: '#476880',
      activeTintColor: '#4e73df',
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
      name="Student Details"
      component={StudentDetails}
      options={{
        drawerIcon: ({color, size}) => (
          <Feather name="users" size={size} color={color} />
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
      component={AssessmentsNavigator}
      options={{
        drawerIcon: ({color, size}) => (
          <Feather name="book" size={size} color={color} />
        ),
        headerShown: false,
        unmountOnBlur: true,
      }}
    />
    <Drawer.Screen
      name="Salary"
      component={Salary}
      options={{
        drawerIcon: ({color, size}) => (
          <Feather name="database" size={size} color={color} />
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
