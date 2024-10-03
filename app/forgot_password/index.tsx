import { Image } from 'expo-image';
import { router } from 'expo-router';
import { Dimensions, View } from 'react-native';
import { Appbar, Surface, Text } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Btn from '../../components/btn';

export default function Page() {
  const insets = useSafeAreaInsets();

  return (
    <Surface style={{backgroundColor: '#1C396C', flex: 1}} elevation={0}>
      <View
        style={{
          justifyContent: 'space-between',
          alignContent: 'center',
          height: Dimensions.get('window').height,
          position: 'absolute',
        }}
      >
        <Appbar.Header style={{backgroundColor: "#1C396C"}}>
          <Appbar.BackAction color='#FFFFFF' onPress={() => router.back()} />
        </Appbar.Header>
        <View>
          <Image
            source={require('../../assets/images/Group 9235.svg')}
            style={{
              width: Dimensions.get('window').width,
              height: Dimensions.get('window').height / 4,
            }}
            contentFit='contain'
          />
          <Text variant="titleLarge" style={{color: '#FFFFFF', fontWeight: '600', alignSelf: 'center', paddingVertical: 20, paddingTop: 40}}>Contact your admin</Text>
          <Text
            variant="bodyLarge"
            style={{color: '#FFFFFF', alignSelf: 'center', paddingVertical: 10, textAlign: 'center', paddingHorizontal: 30}}
          >
          Password can only be reset by your admin. Contact the admin and request them to reset your password.
          </Text>
          <Text
            variant="bodyLarge"
            style={{color: '#FFFFFF', alignSelf: 'center', paddingVertical: 10, textAlign: 'center', paddingHorizontal: 30}}
          >
          For the admins assistance - to reset the password the admin will have to:
          </Text>
          <Text
            variant="bodyLarge"
            style={{color: '#FFFFFF', alignSelf: 'center', paddingVertical: 10, textAlign: 'center', paddingHorizontal: 30}}
          >
          Open Q2Pay → Settings → Users → Select user → Reset password
          </Text>
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
      </View>
    </Surface>
  );
}