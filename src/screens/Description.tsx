// description.tsx
import React from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar } from 'react-native';

const Description = () => {
  return (
    <ScrollView style={{ backgroundColor: '#ffffff' }}>
        <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
    <View style={styles.container}>
      <Text style={styles.title}>Lorem Ipsum</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Lorem Ipsum</Text>
        <Text style={[styles.info, styles.boldInfo]}>2.54 ETH</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Paid On</Text>
        <Text style={[styles.info, styles.boldInfo]}>November 15, 2023</Text>
      </View>
      <Text style={styles.description}>Description</Text>
      <Text style={styles.paragraph}>
        Lorem ipsum dolor sit amet consectetur. Aliquet feugiat et id sollicitudin vitae congue risus ac.
        Viverra arcu blandit diam at. Nec convallis morbi semper turpis nisl enim consectetur a rhoncus. Sit
        placerat ultricies ac egestas risus tincidunt. Blandit est elit mattis arcu amet morbi gravida cras.
        Nullam suspendisse erat pellentesque tellus ut lectus at. NuHa a purus erat tortor platea orci cras.
        Mauris nec quis quam eget auctor sed duis feugiat. Pellentesque rhoncus turpis risus eget tristique
        consequat mi malesuada mauris. Risus pulvinar a leo massa, Sit.
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
    color: "black",
    marginBottom: 20,
  },

  description: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 16,
    color: "black",
    marginTop: 30,
  },


  

  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },

  infoLabel: {
    fontSize: 16,
    fontWeight: '400',
    color: "black",
  },

  info: {
    fontSize: 16,
    fontWeight: '400',
    color: "black",
  },

  boldInfo: {
    fontWeight: 'bold',
  },

  paragraph: {
    fontSize: 16,
    fontWeight: '400',
    marginTop: 16,
    color: '#a9a9a9',
  },
});

export default Description;
