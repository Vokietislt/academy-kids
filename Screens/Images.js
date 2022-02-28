
import { View,Text, StyleSheet, Image, ScrollView } from "react-native"
const Images = ()=>{

    return(

        <View>
            <ScrollView>
            <DisplayAnImage imgStyle={styles.tinyLogo}  uri={'https://reactnative.dev/img/tiny_logo.png'}/>
            <DisplayAnImage imgStyle={styles.bigImg} uri={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7x4BJv5EYlnyGDy3kDTUt91HoHuk7d7UooA&usqp=CAU'}/>
            <DisplayAnImage imgStyle={styles.tinyLogo}  uri={'https://reactnative.dev/img/tiny_logo.png'}/>
            <DisplayAnImage imgStyle={styles.tinyLogo} uri={'https://reactnative.dev/img/tiny_logo.png'}/>
            <Text>paveksliuku ekranasssss</Text>
            </ScrollView>
        </View>
    )
}
export default Images


const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
    },
    tinyLogo: {
      width: 50,
      height: 50,
    },
    bigImg: {
      width: '100%',
      height: 350
    },
    logo: {
      width: 66,
      height: 58,
    },
  });
  
  const DisplayAnImage = (props) => {

    return (
      <View style={styles.container}>
       
        <Image
          style={props.imgStyle}
          source={{
            uri: props.uri,
          }}
        />
      </View>
    );
  }