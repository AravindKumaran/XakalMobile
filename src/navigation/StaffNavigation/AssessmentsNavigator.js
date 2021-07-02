import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Assessments from '../../screens/StaffManagement/Assessments/Assessments';
import Internals from '../../screens/StaffManagement/Assessments/Internals';
import SemesterMarks from '../../screens/StaffManagement/Assessments/SemesterMarks';

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
      <Stack.Screen name="Internals" component={Internals} />
      <Stack.Screen name="SemesterMarks" component={SemesterMarks} />
    </Stack.Navigator>
  );
};

export default AssessmentsNavigator;
