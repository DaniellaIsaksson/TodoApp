import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from './components/reusable/Button'; 
import Themes from './constants/Themes';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import TaskCard from './components/reusable/TaskCard';
import CustomTextInput from './components/reusable/TextInput';


export default function App() {
  const theme = Themes.purple;
  const [description, setDescription] = useState('');

  return (
  <SafeAreaProvider style={[styles.container, {backgroundColor: theme.background, paddingHorizontal: 10}]}>
 <SafeAreaView style={{ flex: 1}}>
      <Text style={{ color: theme.text, marginBottom: 20 }}>
        Testar Purple Theme
      </Text>
      <TaskCard
  title="Lucas födelsedag"
  listName='Att göra'
  description="Köpa presenter, handla mat, beställa tårta och skicka önskelista till familjen."
  created={new Date('2025-05-30T10:00:00')}
  estimated={new Date('2025-06-02T23:59:00')}
  completed={false}
  isFavorite={false}
/>
      <CustomButton
        title="Ny Uppgift"
        backgroundColor={theme.buttonBackground}
        iconColor={theme.buttonIconColor}
        textColor={theme.buttonText}
        onPress={() => ('')}
      />
      <CustomTextInput
  label="Titel"
  multiline
  placeholder="Skriv en titel på listan.."
  value={description}
  onChangeText={setDescription}
/>
    </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
});
