import react, { useState } from "react";
import { FlatList, Text, TextInput, View, ScrollView, Button } from 'react-native';
const Home = ({navigation})=>{

    const [text,setText]=useState('')
    const [input,setInput]=useState('')
    const [count,setCount]=useState(1)
    const data = {
        items:[
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
            {
                name:'Jonas',
                klase:'11c'
            },

            {
                name:'Benas',
                klase:'11b'
            },
            {
                name:'Kristina',
                klase:'11k'
            }
        ]}
    
    return(
<View style={{backgroundColor:'white',flex:1,padding:20}}>
  
<Button title={'next-Screen'} onPress={()=>{
             navigation.navigate('images')   
            }}/>
  
    <Text>
     {input}
    </Text>
    <PropsFunkcija data={data} />
</View>

    )
}
export default Home


const PropsFunkcija = (props)=>{

    return(
        <View>
         
          <FlatList
          ItemSeparatorComponent={
            (({ highlighted }) => (
              <View
                style={[
                  highlighted && { marginLeft: 0 }
                ]}
              />
            ))
          }
             data={props.data.items}
          renderItem={({item,index}) => <Text key={index} style={{fontSize:25, color:'green'}}>{item.name} - {item.klase}</Text>}
          />
        </View>
    )
}