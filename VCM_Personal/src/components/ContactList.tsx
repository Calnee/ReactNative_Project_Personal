import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const feeds = [
  {
    id: 1,
    firstLetter: 'R',
    contact_name: 'Rose Mathew',
    iconColor: '#AEFAAD',
  },
  {
    id: 2,
    firstLetter: 'D',
    contact_name: 'Devapriya L',
    iconColor: '#FDF9A5',
  },
  {
    id: 3,
    firstLetter: 'V',
    contact_name: 'Vipin K P',
    iconColor: '#98D5F0',
  },
  {
    id: 4,
    firstLetter: 'P',
    contact_name: 'Pranav P Prasanth',
    iconColor: '#FFB775',
  },
];

type ItemProps = { contact_name: string; firstLetter: string; iconColor: string };

const Item = ({ contact_name, firstLetter, iconColor }: ItemProps) => (
  <View style={styles.storyContainer}>
    <View style={styles.firstRow}>
    <View style={[styles.circleStyle, { backgroundColor: iconColor }]}>
        <Text style={styles.circleText}>{firstLetter}</Text>
      </View>
      <Text style={styles.firstRowText}>{contact_name}</Text>
    </View>
  </View>
);

const ContactList = () => {
  return (
    <View style={styles.mainStyle}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={feeds}
        renderItem={({ item }) => (
          <Item
            contact_name={item.contact_name}
            firstLetter={item.firstLetter}
            iconColor={item.iconColor}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        horizontal={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  storyContainer: {
    padding: 10,
  },
  mainStyle: {
    padding: 6,
  },
  firstRow: {
    flexDirection: 'row',
    height: 60,
  },
  firstRowText: {
    marginTop: 20,
    marginLeft: 20,
    color:'black',
    fontSize:20
  },
  circleStyle: {
    borderRadius: 30,
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
  },
  circleText: {
    color: 'black',
    fontSize: 20, // Adjust the font size as needed
  },
});

export default ContactList;
