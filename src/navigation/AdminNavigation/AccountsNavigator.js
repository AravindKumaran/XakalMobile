import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Accounts from '../../screens/AdminManagement/Accounts/Accounts';
import AddAccounts from '../../screens/AdminManagement/Accounts/AddAccounts';
import AllAccounts from '../../screens/AdminManagement/Accounts/AllAccounts';

const Stack = createStackNavigator();

const AccountsNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#FFFFFF',
          elevation: 5,
          borderBottomStartRadius: 15,
          borderBottomEndRadius: 15,
        },
        headerTitleAlign: 'center',
        headerTintColor: '#476880',
      }}>
         <Stack.Screen
        name="Accounts"
        component={Accounts}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Add Accounts" component={AddAccounts} />
      <Stack.Screen name="All Accounts" component={AllAccounts} />
    </Stack.Navigator>
  );
};

export default AccountsNavigator;
