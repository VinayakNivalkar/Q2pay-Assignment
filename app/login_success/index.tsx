import { Image } from 'expo-image';
import { Dimensions, ScrollView, View } from 'react-native';
import { Surface, TextInput, Text } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Btn from '../../components/btn';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { router } from 'expo-router';
import { useState } from 'react';

const schema = yup.object({
  old_password: yup.string().required("Old Password is Required"),
  new_password: yup.string().required("New Password is Required"),
  con_password: yup.string().required("Confirm Password is Required").oneOf([yup.ref('new_password'), null], 'Passwords do not match')
})


export default function Page() {
  const insets = useSafeAreaInsets();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<yup.InferType<typeof schema>>({
    mode: 'all',
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => router.replace('/login_success/passreset_success')

  const [secureEntryForOld, setSecureEntryForOld] = useState(true);
  const [secureEntryForNew, setSecureEntryForNew] = useState(true);
  const [secureEntryForCon, setSecureEntryForCon] = useState(true);

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
            source={require('../../assets/images/Group 9285.svg')}
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
            justifyContent: 'space-between'
          }}
        >
          <Text variant="titleLarge" style={{paddingTop: 20}}>Set new password</Text>
          <View>
            <View style={{padding: 10}} />
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  placeholder="Old Password"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  error={!!errors.old_password}
                  secureTextEntry={secureEntryForOld}
                  right={<TextInput.Icon icon={secureEntryForOld ? "eye" : "eye-off"} onPress={() => setSecureEntryForOld(!secureEntryForOld)} />}
                />
              )}
              name="old_password"
            />
            {errors.old_password && <Text style={{padding: 2, color: '#FF0001'}}>{errors.old_password.message}</Text>}
            <View style={{padding: 10}} />
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  placeholder="New Password"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  error={!!errors.new_password}
                  secureTextEntry={secureEntryForNew}
                  right={<TextInput.Icon icon={secureEntryForNew ? "eye" : "eye-off"} onPress={() => setSecureEntryForNew(!secureEntryForNew)} />}
                />
              )}
              name="new_password"
            />
            {errors.new_password && <Text style={{padding: 2, color: '#FF0001'}}>{errors.new_password.message}</Text>}
            <View style={{padding: 10}} />
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  placeholder="Confirm Password"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  error={!!errors.con_password}
                  secureTextEntry={secureEntryForCon}
                  right={<TextInput.Icon icon={secureEntryForCon ? "eye" : "eye-off"} onPress={() => setSecureEntryForCon(!secureEntryForCon)} />}
                />
              )}
              name="con_password"
            />
            {errors.con_password && <Text style={{padding: 2, color: '#FF0001'}}>{errors.con_password.message}</Text>}
            <View style={{padding: 20}} />
          </View>
        </View>
        <View
          style={{
            height: insets.bottom + 50,
            backgroundColor: '#69B76F',
            padding: 10
          }}
        >
          <Btn
            onPress={handleSubmit(onSubmit)}
          >Set new password</Btn>
        </View>
      </ScrollView>
    </Surface>
  );
}