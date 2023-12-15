import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, StatusBar } from 'react-native';

const Transaction = () => {
    

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#ffffff', paddingHorizontal: 0 }}>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      <View style={styles.container}>
        
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Version</Text>
          <Text style={styles.detailText}>7230185768</Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Timestamp</Text>
          <Text style={[styles.detailText, {fontWeight: '700'}]}>Oct 11, 2023, 12:12am</Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Status</Text>
          <Text style={styles.detailText}>Confirmed</Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Gas Used</Text>
          <Text style={styles.detailText}>537020 APT</Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Gas Unit Price</Text>
          <Text style={styles.detailText}>100</Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Funtion</Text>
          <Text style={styles.detailText}>create_resourse</Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Balance Charges</Text>
          <Text style={styles.detailText}>2315</Text>
        </View>

      
      </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    marginVertical: 30,
    padding: 25,
    flex: 1,
  },
 
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  
  detailLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
    textAlign: 'left',
    marginRight: 8,
  },
 
  detailText: {
    fontSize: 16,
    textAlign: 'left',
  },
});

export default Transaction;