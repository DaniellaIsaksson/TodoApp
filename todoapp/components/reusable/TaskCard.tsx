import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

type Props = {
  title: string;
  description?: string;
  created: Date;
  estimated: Date;
  completed?: boolean;
  isFavorite?: boolean;
  listName?: string;
  onToggleComplete?: () => void;
  onToggleFavorite?: () => void;
};

export default function TaskCard({
  title,
  description,
  created,
  estimated,
  listName,
  completed = false,
  onToggleComplete = () => {},
  onToggleFavorite = () => {},
  isFavorite = false,
}: Props) {
  return (
    <View style={[styles.card, completed && styles.completed]}>
<View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
  {listName && <Text style={[styles.listName, { fontWeight: 'bold' }]}>{listName}</Text>}
</View>
      <View style={styles.headerRow}>
        <FontAwesome
          name={completed ? 'check-square' : 'square-o'}
          size={35}
          color={completed ? '#888' : '#888'}
          onPress={onToggleComplete}
          style={styles.checkboxIcon}
        />
        <View style={styles.textContent}>
          <Text style={styles.title}>{title}</Text>
          {description && <Text style={styles.description}>{description}</Text>}
        </View>
        <View style={styles.topRight}>
        
          <FontAwesome
            name={isFavorite ? 'star' : 'star-o'}
            size={32}
            color="#888"
            onPress={onToggleFavorite}
            style={styles.favoriteIcon}
          />
        </View>
      </View>
 
      <View style={styles.down}>
        <Text style={{ color: 'red', fontSize: 12 }}>
          <FontAwesome name="clock-o" size={12} color="red" />
          {'\u00a0'}
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
    paddingBottom: 5,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    width: '100%',
  },
  completed: {
    opacity: 0.6,
  },
headerRow: {
  flexDirection: 'row',
  alignItems: 'center', 
  justifyContent: 'space-between',
  marginBottom: 6,
},
  checkboxIcon: {
    marginRight: 15,
    marginTop: 4,
  },
  textContent: {
    flex: 1,
    marginLeft:5,
    marginRight:5,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
    flexShrink: 1,
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginBottom: 6,
    flexShrink: 1,
  },
  topRight: {
    alignItems: 'flex-end',
  },
  listName: {
    fontSize: 12,
    marginBottom:5
  },
  favoriteIcon: {
    marginTop: 4,
  },
  down: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 6,
  },
  meta: {
    fontSize: 12,
    color: '#888',
  },
});
