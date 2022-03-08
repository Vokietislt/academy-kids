import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import { useState, useReducer, useEffect, useRef } from 'react'
import styles from '../css/mainCss'
const Count = () => {

    //simple states
    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)

    //reducer
    const [state, dispatch] = useReducer(reducer, count);
    function reducer(state, action) {
        switch (action.type) {
            case 'increment':
                return setCount(count + 1);
            case 'decrement':
                return setCount(count - 1);
            default:
                throw new Error();
        }
    }

    //useEffect
    useEffect(() => {
        setCount(Math.round(count))
    }, [count])

    // refrence
    const [la, setLa] = useState('la')
    const inputEl = useRef(null);
    const setRefrence = () => {
        setLa(la + 'la')
    }
    return (
        <View>
            <ScrollView>
                <Text>Counter</Text>
                <Text>count = {count}</Text>
                <TouchableOpacity
                    style={styles.btn}
                    count={count}
                    onPress={() => {
                        setCount(count + 1)
                    }}
                ><Text>Prideti +1 count </Text></TouchableOpacity>

                <TouchableOpacity
                    style={styles.btn}
                    count={count}
                    onPress={() => {
                        dispatch({ type: 'increment' })
                    }}
                ><Text>reducer +1 count </Text></TouchableOpacity>

                <TouchableOpacity
                    style={styles.btn}
                    count={count}
                    onPress={() => {
                        dispatch({ type: 'decrement' })
                    }}
                ><Text>reducer -1 count </Text></TouchableOpacity>

                <TextInput
                    value={la}
                    onChangeText={setLa}
                    ref={inputEl}
                />
                <TouchableOpacity
                    style={styles.btn}
                    count={count}
                    onPress={() => {
                        setRefrence()
                    }}
                ><Text>refrenced add la</Text></TouchableOpacity>

                <TouchableOpacity
                    style={styles.btn}
                    count={count}
                    onPress={() => {
                        setCount(count / 2)
                    }}
                ><Text>count padalinti is 2</Text></TouchableOpacity>

                <TouchableOpacity
                    style={styles.btn}
                    count={count}
                    onPress={() => {
                        setCount(count / 2)
                    }}
                ><Text>count padalinti is 2</Text></TouchableOpacity>


                <KitasCount count={count2} setCount={(value) => {
                    setCount2(value)
                }} />

                <TouchableOpacity
                    style={styles.btn}
                    count={count}
                    setCount={(value) => { setCount(value) }}
                    onPress={() => {
                        setCount(0)
                        setCount2(0)
                        setLa('')
                    }}
                ><Text>clear</Text></TouchableOpacity>
            </ScrollView>
        </View>
    )
}

export default Count

const KitasCount = (props) => {
    return (

        <View>
            <Text>count2 ={props.count}</Text>
            <TouchableOpacity
                style={styles.btn}
                onPress={() => {
                    props.setCount(props.count + 1)
                }}

            ><Text>Prideti +1 count2</Text></TouchableOpacity>

        </View>
    )
}

