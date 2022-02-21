import react, { useState } from "react";
import { FlatList, Text, TextInput, View, ScrollView, Button } from 'react-native';
const Home = ({ navigation }) => {

    const [text, setText] = useState('')
    const [input, setInput] = useState('')
    const [count, setCount] = useState(1)

    return (
        <View style={{ backgroundColor: 'white', flex: 1, padding: 20 }}>

            <Button title={'next-Screen'} onPress={() => {
                navigation.navigate('images')
            }} />
            <PropsFunkcija data={data} />
        </View>
    )
}
export default Home


const PropsFunkcija = (props) => {

    return (
        <View>
            <FlatList
                ItemSeparatorComponent={
                    (() => (
                        <View
                            style={[
                                { marginLeft: 0, backgroundColor: 'black', height: 2 }
                            ]}
                        />
                    ))
                }
                ListFooterComponent={
                    <Text style={{ fontSize: 24 }}></Text>
                }
                ListFooterComponentStyle={{ height: 6, backgroundColor: 'black' }}
                headerFooterComponent={
                    <Text style={{ fontSize: 24 }}></Text>
                }
                ListHeaderComponent={
                    <Text style={{ fontSize: 24 }}>ye</Text>
                }
                ListHeaderComponentStyle={{ height: 6, backgroundColor: 'black' }}
                data={props.data.items}
                renderItem={({ item, index }) => <Text key={index} style={[{ fontSize: 25, color: 'green' }, item.style]}>{item.name} - {item.klase}</Text>}
            />
        </View>
    )
}

const data = {
    items: [
        {
            name: 'Jonas',
            klase: '11c'
        },

        {
            name: 'Benas',
            klase: '11b',
            style: { color: "red" }
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
        {
            name: 'Kristina',
            klase: '11k'
        }
    ]
}
