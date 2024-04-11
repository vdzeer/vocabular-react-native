import React from 'react';
import { SafeAreaView } from 'react-native';
import { Application } from './src/navigation';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <Application />
    </SafeAreaView>
  );
}

export default App;
