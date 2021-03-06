import React from 'react'
import { StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';

import { useNavigation } from '@react-navigation/native';



const FloatActionButton: React.FC = (props) => {
  const navigation = useNavigation();

  // console.log(props);
  // navigation.openDrawer();

  return (
    <FAB
      style={styles.fab}
      color="white"
      icon="plus"
      onPress={() => {
        console.log("I am see the props: ")
        navigation.navigate(props.screenDirection)
      }}
    />
  );
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: "#ff6b6b"
  },
})

export default FloatActionButton;
