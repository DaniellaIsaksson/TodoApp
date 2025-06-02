import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from './components/Button'; 
import Themes from './constants/Themes';
import { SafeAreaView } from 'react-native-safe-area-context';
import TaskCard from './components/TaskCard';


export default function App() {
  const theme = Themes.purple;

  return (
 <SafeAreaView style={{ flex: 1}}>
    <View style={[styles.container, {backgroundColor: theme.background, paddingHorizontal: 20, paddingTop: 45}]}>
      <Text style={{ color: theme.text, marginBottom: 20 }}>
        Testar Purple Theme
      </Text>
      <TaskCard
  title="Lämna in uppsats"
  description="Max 1000 ord, via lärplattformen"
  created={new Date('2025-05-30T10:00:00')}
  estimated={new Date('2025-06-02T23:59:00')}
  completed={false}
/>
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
