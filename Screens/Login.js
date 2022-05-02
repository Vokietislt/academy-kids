import react, { useState } from "react";
import { Text, TextInput, View,  TouchableOpacity  } from 'react-native';
import styles from '../css/mainCss'



const Login = ({ navigation }) => {
    const [email,setEmail] = useState('')
    const [psw,setPsw] = useState('')
 



    return (
        <View style={{ backgroundColor: 'white', flex: 1 }}>
                <View><TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="email"
      /></View>
                <View><TextInput
        style={styles.input}
        onChangeText={psw}
        value={setPsw}
        placeholder="psw"
      /></View>

        </View >
    )
}
export default Login
