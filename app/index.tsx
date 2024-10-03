import { Image } from 'expo-image';
import { Link, router } from 'expo-router';
import { Dimensions, ScrollView, View } from 'react-native';
import { Surface, TextInput, Text } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Btn from '../components/btn';
import { useState } from 'react';

export default function Page() {
  const insets = useSafeAreaInsets();

  const [secureEntry, setSecureEntry] = useState(true);

  return (
    <Surface elevation={0}>
      <ScrollView
        automaticallyAdjustKeyboardInsets={true}
        bounces={false}
      >
        <View
          style={{
            backgroundColor: '#1C396C',
            paddingBottom: 50,
            paddingTop: insets.top + 10,
            height: Dimensions.get('window').height / 2,
            justifyContent: 'center'
          }}
        >
          <Image
            source={require('../assets/images/Group 4527.png')}
            style={{
              width: Dimensions.get('window').width,
              height: Dimensions.get('window').height / 4,
            }}
            contentFit='contain'
          />
        </View>
        <View
          style={{
            height: Dimensions.get('window').height / 2 - insets.bottom - 50,
            borderRadius: 20,
            position: 'static',
            top: -20,
            backgroundColor: '#FFFFFF',
            padding: 20,
            justifyContent: 'center'
          }}
        >
          <TextInput
            label="User ID"
          />
          <View style={{padding: 10}}></View>
          <TextInput
            label="Password"
            secureTextEntry={secureEntry}
            right={<TextInput.Icon icon={secureEntry ? "eye" : "eye-off"} onPress={() => setSecureEntry(!secureEntry)} />}
          />
          <View style={{padding: 10}}></View>
          <Link href={'/forgot_password'}>
            <Text
              style={{
                color: '#3A69B2',
                textDecorationLine: 'underline'
              }}
            >Forgot your password?</Text>
          </Link>
        </View>
        <View
          style={{
            height: insets.bottom + 50,
            backgroundColor: '#69B76F',
            padding: 10
          }}
        >
          <Btn
            onPress={() => router.replace('/login_success')}
          >Log In</Btn>
        </View>
      </ScrollView>
    </Surface>
  );
}