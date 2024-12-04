import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SDK, type SDKEnvironment } from 'react-native-nts-rn-sdk';

export default function App() {
  const [result, setResult] = useState<SDKEnvironment | null>();

  useEffect(() => {
    const sdkEnvironment: SDKEnvironment = {
      environment: 'development',
      apiKey: 'string',
      apiSecret: 'string',
      apiProvider: 'string',
      apiClientId: 'string',
      baseUrl: 'string',
    };
    SDK.initialize(sdkEnvironment);
    setResult(SDK.getEnvironment());
  }, []);

  return (
    <View style={styles.container}>
      <Text>Result: {result?.baseUrl}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
