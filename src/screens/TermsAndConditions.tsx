// Import necessary modules and components
import React from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar } from 'react-native';
import { useTheme } from '../hooks/useTheme';

// Define the TermsAndConditions component
const TermsAndConditions = () => {
  // Access the theme
  const theme = useTheme();

  return (
    <ScrollView style={{ backgroundColor: '#ffffff' }}>
        <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      <View style={styles.container}>
        <Text style={[{ color: theme.colors.text }, styles.title]}>
          Terms and Conditions
        </Text>

        <Text style={[{ color: theme.colors.text }, styles.paragraph]}>
          Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Eget ornare quam vel facilisis
          feugiat amet sagittis arcu, tortor. Sapien
          consequat ultrices morbi orci semper sit nulla.
          Leo auctor ut etiam est, amet aliquet ut
          vivamus. Odio vulputate est id tincidunt fames.
        </Text><Text style={[{ color: theme.colors.text }, styles.paragraph]}>
          Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Eget ornare quam vel facilisis
          feugiat amet sagittis arcu, tortor. Sapien
          consequat ultrices morbi orci semper sit nulla
          Leo auctor ut etiam est, amet aliquet ut
          vivamus. Odio vulputate est id tincidunt fames.
        </Text>

        <Text style={[{ color: theme.colors.text }, styles.title]}>
        Changes to the Service and/or Terms:
        </Text>

        <Text style={[{ color: theme.colors.text }, styles.paragraph]}>
          Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Eget ornare quam vel facilisis
          feugiat amet sagittis arcu, tortor. Sapien
          consequat ultrices morbi orci semper sit nulla.
          Leo auctor ut etiam est, amet aliquet ut
          vivamus. Odio vulputate est id tincidunt fames.
        </Text><Text style={[{ color: theme.colors.text }, styles.paragraph]}>
          Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Eget ornare quam vel facilisis
          feugiat amet sagittis arcu, tortor. Sapien
          consequat ultrices morbi orci semper sit nulla
          Leo auctor ut etiam est, amet aliquet ut
          vivamus. Odio vulputate est id tincidunt fames.
        </Text>
      </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 16,
    marginHorizontal: 20,
  },

  title: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 16,
  },

  paragraph: {
    fontSize: 16,
    fontWeight: '400',
    marginTop: 16,
    color: '#a9a9a9',
  },
});

export default TermsAndConditions;
