import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Assessments from '../../screens/AdminManagement/Assessments/Assessments';
import AddAssessments from '../../screens/AdminManagement/Assessments/AddAssessments';
import AllAssessments from '../../screens/AdminManagement/Assessments/AllAssessments';

const Stack = createStackNavigator();

const AssessmentsNavigator = () => {
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
        name="Assessments"
        component={Assessments}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Add Assessments" component={AddAssessments} />
      <Stack.Screen name="All Assessments" component={AllAssessments} />
    </Stack.Navigator>
  );
};

export default AssessmentsNavigator;
