import react, { useState } from "react";
import { FlatList, Text, TextInput, View, ScrollView, Button, Platform, TouchableOpacity, TouchableHighlight } from 'react-native';
const FlatListas = ({ navigation }) => {

    const [text, setText] = useState('')
    const [input, setInput] = useState('')
    const [count, setCount] = useState(1)
    const data = {
        items: [
            {
                name: 'Krica',
                klase: '11c'
            },

            {
                name: 'Benas',
                klase: '11b'
            },
            {
                name: 'Jonas',
                klase: '11c'
            },

            {
                name: 'Benas',
                klase: '11b'
            },
            {
                name: 'Jonas',
                klase: '11c'
            },

            {
                name: 'Benas',
                klase: '11b'
            },

        ]
    }

    return (
        <View style={{ backgroundColor: 'white', flex: 1, padding: 20 }}>
            <Button title={'back'} onPress={() => {
                navigation.pop()
            }} />
            <PropsFunkcija data={data} />
        </View>

    )
}
export default FlatListas


const PropsFunkcija = (props) => {

    const Press = (item) => {
        console.log(item)
    }
    const style = {
        separator: {
            backgroundColor: 'black'
        }
    }
    return (
        <View>
            <FlatList
                ItemSeparatorComponent={
                    Platform.OS !== 'android' &&
                    (({ highlighted }) => (
                        <View
                            style={[
                                style.separator,
                                highlighted && { marginLeft: 0 }
                            ]}
                        />
                    ))
                }
                data={props.data.items}
                renderItem={({ item, index, separators }) => (
                    <TouchableHighlight
                        key={item.name + index}
                        onPress={() => Press(item)}
                        onShowUnderlay={separators.highlight}
                        onHideUnderlay={separators.unhighlight}>
                        <View style={{ backgroundColor: 'white' }}>
                            <Text>{item.name}</Text>
                        </View>
                    </TouchableHighlight>
                )}
            />
        </View>
    )
}