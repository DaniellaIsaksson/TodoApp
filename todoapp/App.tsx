import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from './components/Button'; 
import Themes from './constants/Themes';

export default function App() {
  const theme = Themes.purple;

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={{ color: theme.text, marginBottom: 20 }}>
        Testar Purple Theme
      </Text>

      <CustomButton
        title="Ny Uppgift"
        backgroundColor={theme.buttonBackground}
        iconColor={theme.buttonIconColor}
        textColor={theme.buttonText}
        onPress={() => ('')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
