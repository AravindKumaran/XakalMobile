import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Feather from 'react-native-vector-icons/Feather';
import Whiteboard from '../../screens/StudentManagement/Whiteboard';
import Assessments from '../../screens/StudentManagement/Assessments';
import Attendance from '../../screens/StudentManagement/Attendance';
import Payment from '../../screens/StudentManagement/Payment';
import Profile from '../../screens/StudentManagement/Profile';
import Transport from '../../screens/StudentManagement/Transport';
import TimeTable from '../../screens/StudentManagement/TimeTable';
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
      name="Attendance"
      component={Attendance}
      options={{
        drawerIcon: ({color, size}) => (
          <Feather name="database" size={size} color={color} />
        ),
        headerShown: false,
        unmountOnBlur: true,
      }}
    />
    <Drawer.Screen
      name="TimeTable"
      component={TimeTable}
      options={{
        drawerIcon: ({color, size}) => (
          <Feather name="clock" size={size} color={color} />
        ),
        headerShown: false,
        unmountOnBlur: true,
      }}
    />
    <Drawer.Screen
      name="Transport"
      component={Transport}
      options={{
        drawerIcon: ({color, size}) => (
          <Feather name="truck" size={size} color={color} />
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
