import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, StatusBar, Image, TextInput } from 'react-native';
import { useTheme } from '../hooks/useTheme';
import FilterIcon from '../assets/images/filter.png'; 


const PrivacyPolicy = () => {
  const theme = useTheme();
  const [expandedSections, setExpandedSections] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleSection = (index) => {
    if (expandedSections.includes(index)) {
      setExpandedSections(expandedSections.filter((i) => i !== index));
    } else {
      setExpandedSections([...expandedSections, index]);
    }
  };

  const isSectionExpanded = (index) => expandedSections.includes(index);

  return (
    <ScrollView style={{ backgroundColor: '#ffffff' }}>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      <View style={styles.container}>

      <View style={[styles.searchContainer, { backgroundColor: '#f6f8fe' }]}>
          <TextInput
            style={[styles.searchInput, { color: theme.colors.text }]}
            placeholder="Search..."
            placeholderTextColor={theme.colors.placeholder}
            value={searchQuery}
            onChangeText={(text) => setSearchQuery(text)}
          />
          <Image source={FilterIcon} style={styles.filterIcon} />
        </View>


        <Section
          title="Lorem ipsum dolor sit amet"
          content="Amet minim.mollit non deserunt ullamco est sit
          aliqua dolor do amet sint. Velit officia consequat
          duis enim velit mollit. Exercitation veniam
          consequat sunt nostrud amet."
          index={0}
          isExpanded={isSectionExpanded(0)}
          onPress={toggleSection}
        />

        <LineSeparator />

        <Section
          title="Lorem ipsum dolor sit amet"
          content="Amet minim.mollit non deserunt ullamco est sit
          aliqua dolor do amet sint. Velit officia consequat
          duis enim velit mollit. Exercitation veniam
          consequat sunt nostrud amet."
          index={1}
          isExpanded={isSectionExpanded(1)}
          onPress={toggleSection}
        />

        <LineSeparator />

        <Section
          title="Lorem ipsum dolor sit amet"
          content="Amet minim.mollit non deserunt ullamco est sit
          aliqua dolor do amet sint. Velit officia consequat
          duis enim velit mollit. Exercitation veniam
          consequat sunt nostrud amet."
          index={2}
          isExpanded={isSectionExpanded(2)}
          onPress={toggleSection}
        />

        <LineSeparator />

        <Section
          title="Lorem ipsum dolor sit amet"
          content="Amet minim.mollit non deserunt ullamco est sit
          aliqua dolor do amet sint. Velit officia consequat
          duis enim velit mollit. Exercitation veniam
          consequat sunt nostrud amet."
          index={3}
          isExpanded={isSectionExpanded(3)}
          onPress={toggleSection}
        />

        <LineSeparator />

        <Section
          title="Lorem ipsum dolor sit amet"
          content="Amet minim.mollit non deserunt ullamco est sit
          aliqua dolor do amet sint. Velit officia consequat
          duis enim velit mollit. Exercitation veniam
          consequat sunt nostrud amet."
          index={4}
          isExpanded={isSectionExpanded(4)}
          onPress={toggleSection}
        />

        <LineSeparator />

        

        
      </View>
    </ScrollView>
  );
};

const Section = ({ title, content, index, isExpanded, onPress }) => {
  const theme = useTheme();
  const arrowIcon = isExpanded ? require('../assets/images/up-arrow.png') : require('../assets/images/down-arrow.png');

  return (
    <TouchableOpacity onPress={() => onPress(index)}>
      <View>
        <View style={styles.sectionHeader}>
          <Text style={[{ color: theme.colors.text }, styles.title]}>{title}</Text>
          <Image source={arrowIcon} style={styles.arrowIcon} />
        </View>

        {isExpanded && (
          <Text style={[{ color: theme.colors.text }, styles.paragraph]}>{content}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

const LineSeparator = () => {

  return <View style={[styles.lineSeparator, { borderBottomColor: "#a9a9a9" }]} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 16,
    marginHorizontal: 20,
  },

  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },

  title: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 20,
  },

  paragraph: {
    fontSize: 16,
    fontWeight: '400',
    marginTop: 8,
    color: '#a9a9a9',
  },

  lineSeparator: {
    borderBottomWidth: 1,
    marginVertical: 16,
  },

  arrowIcon: {
    width: 24,
    height: 24,
  },

  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginTop: 20,
  },

  searchInput: {
    flex: 1,
    height: 50,
    marginRight: 8,
  },

  filterIcon: {
    width: 40,
    height: 25,
  },
});

export default PrivacyPolicy;
