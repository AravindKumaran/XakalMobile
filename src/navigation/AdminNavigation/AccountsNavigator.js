import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Accounts from '../../screens/AdminManagement/Accounts/Accounts';
import SalaryAccount from '../../screens/AdminManagement/Accounts/SalaryAccount';
import FeesAccount from '../../screens/AdminManagement/Accounts/FeesAccount';
import WorkersAccount from '../../screens/AdminManagement/Accounts/WorkersAccount';

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
      <Stack.Screen name="Salary Account" component={SalaryAccount} />
      <Stack.Screen name="Fees Account" component={FeesAccount} />
      <Stack.Screen name="Workers Account" component={WorkersAccount} />
    </Stack.Navigator>
  );
};

export default AccountsNavigator;
