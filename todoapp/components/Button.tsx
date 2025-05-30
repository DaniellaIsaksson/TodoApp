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
    <View style={styles.outerContainer}>
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
  outerContainer: {
    width: '100%'
  },
  button: {
    justifyContent: 'center',
    height: 60,
    width: '100%'
  },
});
