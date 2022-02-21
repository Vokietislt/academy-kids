import react, { useState } from "react";
import { FlatList, Text, TextInput, View, ScrollView, Button } from 'react-native';
const Images = ({navigation})=>{

    const [text,setText]=useState('')
    const [input,setInput]=useState('')
    const [count,setCount]=useState(1)
    const data = {
        items:[
            {
                name:'Krica',
                klase:'11c'
            },

            {
                name:'Benas',
                klase:'11b'
            },
            {
                name:'Jonas',
                klase:'11c'
            },

            {
                name:'Benas',
                klase:'11b'
            },
            {
                name:'Jonas',
                klase:'11c'
            },

            {
                name:'Benas',
                klase:'11b'
            },
           
        ]}
    
    return(
<View style={{backgroundColor:'white',flex:1,padding:20}}>
    <Button title={'back'} onPress={()=>{
        navigation.pop()
    }}/>
    <PropsFunkcija data={data} />
</View>

    )
}
export default Images


const PropsFunkcija = (props)=>{

    return(
        <View>
          <FlatList
             data={props.data.items}
          renderItem={({item,index}) => <Text key={index} style={{fontSize:25, color:'green'}}>{item.name} - {item.klase} </Text>}
          />
        </View>
    )
}