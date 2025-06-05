import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TextInputProps } from 'react-native';

type Props = TextInputProps & {
  label?: string;
};

export default function CustomTextInput({ label, multiline, ...rest }: Props) {
  const [inputHeight, setInputHeight] = useState(50);

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        multiline={multiline}
        onContentSizeChange={(e) => {
          if (multiline) {
            setInputHeight(e.nativeEvent.contentSize.height);
          }
        }}
        style={[
          styles.input,
          multiline && { height: Math.max(50, inputHeight), textAlignVertical: 'top' },
        ]}
        {...rest}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    width: '100%',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
});
