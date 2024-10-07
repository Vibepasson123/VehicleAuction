import React from 'react';
import { Text, View } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../navigations/AppStack';


type VehicleDetailsRouteProp = RouteProp<RootStackParamList, 'VehicleDetails'>;

const VehicleDetails:React.FC = () => {
  const route = useRoute<VehicleDetailsRouteProp>();
  const { id } = route.params;
  return (
    <View style={{display:'flex',flex:1, padding:5, alignItems:'center'}}>
      <Text>Vehicle ID: {id}</Text>
    </View>
  );
};

export default VehicleDetails;
