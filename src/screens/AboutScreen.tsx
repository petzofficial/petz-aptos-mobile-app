import { View, Text, StyleSheet, ScrollView, StatusBar, Image } from 'react-native';

import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import type { StackParamList } from '../types/navigation';
import { useTheme } from '../hooks/useTheme';

type AboutScreenProps = NativeStackScreenProps<StackParamList, 'About'>;

export default function AboutScreen(_props: AboutScreenProps) {
  const theme = useTheme();

  
  return (
    <ScrollView style={{ backgroundColor: '#ffffff' }}>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      <View style={styles.container}>
      <Image
          source={require('../assets/images/logo.png')}
          style={styles.image}
        />
        <Text style={[{ color: theme.colors.text }, styles.title]}>
          Overview
        </Text>

        <Text style={[{ color: theme.colors.text }, styles.paragraph]}>
        Contrary to popular belief, Lorem Ipsum is not
        simply random text. It has roots in a piece of
        classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin
        professor.
        </Text>

        <Text style={[{ color: theme.colors.text }, styles.title]}>
          Mission
        </Text>

        <Text style={[{ color: theme.colors.text }, styles.paragraph]}>
        Contrary to popular belief, Lorem Ipsum is not 
        simply random text, It has roots in a piece of
        classical Latin literature from 45 BC, making it
        over 2000 years old, Richard McClintock, a Latin professor at Hampden-Sydney College in
        Virginia, looked up one of the more obscure  Lotin words, consectetur, from a Lorem Ipsum 
        passage, and going through the cites of the
        word in classical.
        </Text>

        <Text style={[{ color: theme.colors.text }, styles.title]}>
          Background
        </Text>

        <Text style={[{ color: theme.colors.text }, styles.paragraph]}>
        Contrary to popular belief, Lorem Ipsum is not
        simply random text. It has roots in a piece of
        classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin
        professor at Hampden-Sydney College in
        Virginia, looked up one of the more obscure Lotin words, consectetur, from a Lorem Ipsum 
        passage, and going through the cites.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 16,
    marginHorizontal: 20,
  },

  image: {
    width: 150, 
    height: 150,  
    resizeMode: 'contain', 
    marginTop: 2,
    alignSelf: 'center',
  },

  scrollView: {
    paddingHorizontal: 20,
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
    color: "#a9a9a9",
  },
});
