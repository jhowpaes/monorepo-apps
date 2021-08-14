import React from 'react';

import {View, Text, StyleSheet} from 'react-native';

import {PrimaryButton} from '@monorepo/ui';

export function App() {
  return (
    <View style={styles.container}>
      <PrimaryButton title="First component" onPress={() => {}} />
      <Text>firstApp</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
