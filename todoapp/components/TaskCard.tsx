import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

type Props = {
  title: string;
  description?: string;
  created: Date;
  estimated: Date;
  completed?: boolean;
  onToggleComplete?: () => void;
};

export default function TaskCard({
  title,
  description,
  created,
  estimated,
  completed = false,
  onToggleComplete= () => {},
}: Props) {
  return (
    <View style={[styles.card, completed && styles.completed]}>
        <View style={[styles.header]}>
            <FontAwesome
                name={completed ? 'check-square' : 'square-o'}
                size={40}
                color={completed ? '#888' : '#888'}
                onPress={onToggleComplete}
            />
             <View style={styles.textContent}>
            <Text style={styles.title}>{title}</Text>
            {description && <Text style={styles.description}>{description}</Text>}
            </View>
            </View>
            <View style={[styles.down]}>
                <Text style={{ color: 'red', fontSize: 12 }}>
                    <FontAwesome name="clock-o" size={12} color='red'/>
                    {"\u00a0"}
                    {estimated.toLocaleDateString()}
                </Text>
                <Text style={styles.meta}>Skapad: {created.toLocaleDateString()}</Text>
            </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 16,
    paddingBottom:5,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    width:'100%'
  },
  completed: {
    opacity: 0.6,
    
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginBottom: 6,
  },
  meta: {
    fontSize: 12,
    color: '#888',
  },
  down:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between'
  },
    header:{
    display:'flex',
    flexDirection:'row',
    gap: 10
  },
  textContent: {
  flex: 1,
  marginLeft: 10,
},
});
