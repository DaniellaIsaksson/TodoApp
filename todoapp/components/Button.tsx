import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

type Props = {
  backgroundColor?: string;
  iconColor?: string;
  textColor?: string;
  title?: string;
  onPress?: () => void;
};

export default function CustomButton({
  backgroundColor = '#4887FB',
  iconColor = '#fff',
  textColor = '#fff',
  title = 'Ny Uppgift',
  onPress = () => {},
}: Props) {
  return (
    <View style={styles.container}>
      <FontAwesome.Button
        name="plus"
        backgroundColor={backgroundColor}
        size={20}
        style={styles.button}
        color={iconColor}
        onPress={onPress}
      >
        <Text style={{ color: textColor }}>{title}</Text>
      </FontAwesome.Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 350,
    height: 60,
    justifyContent: 'center',
  },
});
