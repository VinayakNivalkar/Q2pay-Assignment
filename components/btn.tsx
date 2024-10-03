import { GestureResponderEvent } from "react-native";
import { Button } from "react-native-paper";

export default function Btn({ children, onPress, disabled }: { children: String, onPress?: (e: GestureResponderEvent) => void, disabled?: boolean }) {
  return (
    <Button
      mode="contained-tonal"
      style={{
        borderRadius: 0,
        backgroundColor: '#69B76F',
      }}
      textColor='#FFFFFF'
      labelStyle={{
        fontWeight: 'bold',
        fontSize: 20,
      }}
      onPress={onPress}
      disabled={disabled}
    >
      {children}
    </Button>
  );
}