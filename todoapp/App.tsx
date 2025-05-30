import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from './components/Button'; 
import Themes from './constants/Themes';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function App() {
  const theme = Themes.green;

  return (
 <SafeAreaView style={{ flex: 1}}>
    <View style={[styles.container, {backgroundColor: theme.background, paddingHorizontal: 20, paddingTop: 45}]}>
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
