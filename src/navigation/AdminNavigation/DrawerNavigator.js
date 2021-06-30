import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Feather from 'react-native-vector-icons/Feather';
import DrawerContent from './DrawerContent';
import DashboardNavigator from './DashboardNavigator';
import StudentsNavigator from './StudentsNavigator';
import ProfessorsNavigator from './ProfessorsNavigator';
import DepartmentNavigator from './DepartmentNavigator';
import CoursesNavigator from './CoursesNavigator';
import PapersNavigator from './PapersNavigator';
import WorkersNavigator from './WorkersNavigator';
import AccountsNavigator from './AccountsNavigator';
import AttendanceNavigator from './AttendanceNavigator';
import AssessmentsNavigator from './AssessmentsNavigator';
import Profile from '../../screens/AdminManagement/Profile/Profile';

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
      name="Students"
      component={StudentsNavigator}
      options={{
        drawerIcon: ({color, size}) => (
          <Feather name="clipboard" size={size} color={color} />
        ),
        headerShown: false,
        unmountOnBlur: true,
      }}
    />
    <Drawer.Screen
      name="Professors"
      component={ProfessorsNavigator}
      options={{
        drawerIcon: ({color, size}) => (
          <Feather name="users" size={size} color={color} />
        ),
        headerShown: false,
        unmountOnBlur: true,
      }}
    />
    <Drawer.Screen
      name="Department"
      component={DepartmentNavigator}
      options={{
        drawerIcon: ({color, size}) => (
          <Feather name="file" size={size} color={color} />
        ),
        headerShown: false,
        unmountOnBlur: true,
      }}
    />
    <Drawer.Screen
      name="Courses"
      component={CoursesNavigator}
      options={{
        drawerIcon: ({color, size}) => (
          <Feather name="book" size={size} color={color} />
        ),
        headerShown: false,
        unmountOnBlur: true,
      }}
    />
    <Drawer.Screen
      name="Papers"
      component={PapersNavigator}
      options={{
        drawerIcon: ({color, size}) => (
          <Feather name="database" size={size} color={color} />
        ),
        headerShown: false,
        unmountOnBlur: true,
      }}
    />
    <Drawer.Screen
      name="Workers"
      component={WorkersNavigator}
      options={{
        drawerIcon: ({color, size}) => (
          <Feather name="user" size={size} color={color} />
        ),
        headerShown: false,
        unmountOnBlur: true,
      }}
    />
    <Drawer.Screen
      name="Accounts"
      component={AccountsNavigator}
      options={{
        drawerIcon: ({color, size}) => (
          <Feather name="user" size={size} color={color} />
        ),
        headerShown: false,
        unmountOnBlur: true,
      }}
    />
    <Drawer.Screen
      name="Attendance"
      component={AttendanceNavigator}
      options={{
        drawerIcon: ({color, size}) => (
          <Feather name="user" size={size} color={color} />
        ),
        headerShown: false,
        unmountOnBlur: true,
      }}
    />
    <Drawer.Screen
      name="Assessment"
      component={AssessmentsNavigator}
      options={{
        drawerIcon: ({color, size}) => (
          <Feather name="user" size={size} color={color} />
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
