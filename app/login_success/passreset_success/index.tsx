import { Image } from 'expo-image';
import { Dimensions, ScrollView, View } from 'react-native';
import { Surface, Text } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Btn from '../../../components/btn';
import { router } from 'expo-router';


export default function Page() {
  const insets = useSafeAreaInsets();

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
          }}
        >
          <Image
            source={require('../../../assets/images/Group 9285.svg')}
            style={{
              flex: 1
            }}
            contentFit='contain'
          />
          <Text
            variant="bodyLarge"
            style={{color: '#FFFFFF', alignSelf: 'center', paddingTop: 40, textAlign: 'center', paddingHorizontal: 30}}
          >It is mandatory for you to set a new password, which is not the same as the password provided by the admin.</Text>
        </View>
        <View
          style={{
            height: Dimensions.get('window').height / 2 - insets.bottom - 50,
            borderRadius: 20,
            position: 'static',
            top: -20,
            backgroundColor: '#FFFFFF',
            padding: 20,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Image
            source={require('../../../assets/images/Group 2579.svg')}
            style={{
              width: 100,
              height: 100,
            }}
            contentFit='contain'
          />
          <Text variant="titleLarge" style={{paddingTop: 20}}>Password Reset Successfully !</Text>
          <Text variant="bodyLarge" style={{paddingTop: 20, textAlign: 'center'}}>Your password has been successfully reset. Click below to Login with new credential</Text>
        </View>
        <View
          style={{
            height: insets.bottom + 50,
            backgroundColor: '#69B76F',
            padding: 10
          }}
        >
          <Btn
            onPress={() => router.replace('/')}
          >Log In</Btn>
        </View>
      </ScrollView>
    </Surface>
  );
}