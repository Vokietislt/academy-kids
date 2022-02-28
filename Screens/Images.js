
import { View,Text, StyleSheet, Image, ScrollView, Dimensions  } from "react-native"
import styles from "../css/mainCss"
const Images = ()=>{
    return(

        <View>
            <Text style={styles.header}>Paveksliuku ekranas</Text>
            <DisplayAnImage containerStyle={styles.makeBackground} imgStyle={styles.fullscreen} uri={'https://cdn1.vectorstock.com/i/1000x1000/19/25/heat-background-cover-vector-171925.jpg'}/>
            <ScrollView>
            <DisplayAnImage imgStyle={styles.tinyLogo}  uri={'https://reactnative.dev/img/tiny_logo.png'}/>
            <DisplayAnImage imgStyle={styles.tinyLogo}  uri={'https://reactnative.dev/img/tiny_logo.png'}/>
            <DisplayAnImage imgStyle={styles.tinyLogo}  uri={'https://reactnative.dev/img/tiny_logo.png'}/>
            <DisplayAnImage imgStyle={styles.tinyLogo}  uri={'https://reactnative.dev/img/tiny_logo.png'}/>
            <DisplayAnImage imgStyle={styles.tinyLogo}  uri={'https://reactnative.dev/img/tiny_logo.png'}/>
            <DisplayAnImage imgStyle={styles.tinyLogo}  uri={'https://reactnative.dev/img/tiny_logo.png'}/>
            <DisplayAnImage imgStyle={styles.midImg} uri={'https://cdn.vox-cdn.com/thumbor/SiIyeqmKIJGcOJccz94pHgwmgvQ=/0x0:1400x1400/1200x800/filters:focal(588x588:812x812):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/68837730/poptart1redrainbowfix_1.0.gif'}/>
            <DisplayAnImage imgStyle={styles.bigImg} uri={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7x4BJv5EYlnyGDy3kDTUt91HoHuk7d7UooA&usqp=CAU'}/>
            <DisplayAnImage imgStyle={styles.tinyLogo}  uri={'https://reactnative.dev/img/tiny_logo.png'}/>
            <DisplayAnImage imgStyle={styles.tinyLogo}  uri={'https://reactnative.dev/img/tiny_logo.png'}/>
            <DisplayAnImage imgStyle={styles.tinyLogo}  uri={'https://reactnative.dev/img/tiny_logo.png'}/>

            </ScrollView>
        </View>
    )
}
export default Images


// const styles = StyleSheet.create({

//   });
  
 export const DisplayAnImage = (props) => {

    return (
      <View style={[styles.container,props.containerStyle]}>
        <Image
        // resizeMethod ='contain'
          style={props.imgStyle}
          source={{
            uri: props.uri,
          }}
        />
      </View>
    );
  }