import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { fetchRandomContact } from '../utility/api'; // Corrected import statement
import ContactThumbnail from './ContactThumbnail';
import DetailListItem from './DetailListItem';
import colors from '../utility/colors';

const Profile = ({route}) => {
    const { contact } = route.params; // Destructuring contact object from route params
    const { avatar, name, email, phone, cell } = contact; // Destructuring properties from the contact object
    
    return (
      <View style={styles.container}>
        <View style={styles.avatarSection}>
          <ContactThumbnail avatar={avatar} name={name} phone={phone} />
        </View>
        <View style={styles.detailsSection}>
          <DetailListItem icon="mail" title="Email" subtitle={email} />
          <DetailListItem icon="phone" title="Work" subtitle={phone} /> 
          <DetailListItem icon="smartphone" title="Personal" subtitle={cell} />
        </View>
      </View>
    );
    
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  avatarSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.blue, // Corrected backgroundColor attribute
  },
  detailsSection: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default Profile;