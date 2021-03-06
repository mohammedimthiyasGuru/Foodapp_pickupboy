import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Dimensions,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
} from 'react-native';

const window = Dimensions.get('window');
const uri = 'https://pickaface.net/gallery/avatar/Opi51c74d0125fd4.png';

const styles = StyleSheet.create({
  menu: {
    flex: 1,    
    width: window.width,
    height: window.height,
    backgroundColor: 'gray',
    padding: 20,
  },
  avatarContainer: {
    marginBottom: 20,
    marginTop: 20,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    flex: 1,
  },
  name: {
    position: 'absolute',
    left: 70,
    top: 20,
    color:'white'
  },
  item: {
    fontSize: 14,
    fontWeight: '300',
    paddingTop: 5,
    color:'white'
  },
});

export default function Menu({ onItemSelected }) {
  return (
    <ScrollView scrollsToTop={false} style={styles.menu}>
      <View style={styles.avatarContainer}>
        <Image
          style={styles.avatar}
          source={{ uri }}
        />
        <Text style={styles.name}>Your name</Text>
      </View>

      <Text
        onPress={() => onItemSelected('About')}
        style={styles.item}
      >
        Profile
      </Text>
      <Text/>
      <Text
        onPress={() => onItemSelected('About')}
        style={styles.item}
      >
        About Us
      </Text>
      <Text/>
      <Text
        onPress={() => onItemSelected('About')}
        style={styles.item}
      >
        Location
      </Text>
      <Text/>
      <Text
        onPress={() => onItemSelected('About')}
        style={styles.item}
      >
        Contact Us
      </Text>
      <Text/>
      <Text
        onPress={() => onItemSelected('About')}
        style={styles.item}
      >
       Terms and Conditions
      </Text>
      <Text/>
      <Text
        onPress={() => onItemSelected('Contacts')}
        style={styles.item}
      >
        Contacts
      </Text>
      <Text/>
      <Text
        onPress={() => onItemSelected('Notifications')}
        style={styles.item}
      >
        Notifications
      </Text>
      <Text/>
      <Text
        onPress={() => onItemSelected('Contacts')}
        style={styles.item}
      >
        Share App
      </Text>
      <Text/>
      <Text
        onPress={() => onItemSelected('Contacts')}
        style={styles.item}
      >
        Complaint Page
      </Text>
    </ScrollView>
  );
}

Menu.propTypes = {
  onItemSelected: PropTypes.func.isRequired,
};


