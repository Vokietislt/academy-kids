import React, { useRef ,useEffect} from 'react';
import { Animated, Text, View, StyleSheet, Button, SafeAreaView ,Easing } from 'react-native';

const Animacijos = () => {
  // fadeAnim will be used as the value for opacity. Initial Value: 0
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const y = useRef(new Animated.Value(0)).current;
  const x = useRef(new Animated.Value(0)).current;

  const color1 = useRef(new Animated.Value(0)).current
  const p1 = useRef(new Animated.Value(0)).current


  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver:true,
    //   easing:easeInOutSine,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver:true,
    }).start();
  };
  const right = (current) => {
    Animated.timing(y, {
      toValue: current-100,
      duration: 1500,
      useNativeDriver:true,
      easeing:Easing.elastic(2)
    }).start();
  };
  const left = (current) => {
    Animated.timing(y, {
      toValue: current+100,
      duration: 1500,
      useNativeDriver:true,
      easing:Easing.sin
    }).start();
  };
  const top = (current)=>{
    Animated.timing(x,{
        toValue:current-100,
        duration: 300,
        useNativeDriver:true,
    }).start()
  }
  const bottom=(current)=>{
    Animated.timing(x,{
        toValue:current+100,
        duration: 300,
        useNativeDriver:true,
    }).start()
  }

  const spring =()=>{
    Animated.parallel([
    Animated.spring((x), {
        toValue: 0 // return to start
      }),
    Animated.spring((y), {
        toValue: 0 // return to start
      }),

    ])
  }
  const sequence = (currenty,currentx)=>{
      Animated.sequence([
        Animated.timing(x, {
            toValue: currentx+100,
            duration: 500
        }),
        Animated.timing(y, {
            toValue: currenty+100,
            duration: 500
        }),
        Animated.timing(x, {
            toValue: currentx,
            duration: 500
        }),
        Animated.timing(y, {
            toValue: currenty,
            duration: 500
        }),
    ]).start()
  }

  const sequence2 = ()=>{
    Animated.sequence([
        Animated.timing(color1, {
            toValue: 1,
            duration: 500
        }),
        Animated.timing(color1, {
            toValue: 0,
            duration: 500
        }),
    ]).start()
  }
  const toStart = ()=>{
    Animated.sequence([
        Animated.timing(x, {
            toValue: 0,
            duration: 500
        }),
        Animated.timing(y, {
            toValue: 0,
            duration: 500
        }),
    ]).start()
  }
const colorLoop = ()=>{

    Animated.loop(Animated.timing(color1 , {
      toValue: 3,
      duration: 300,
      useNativeDriver:false,
  })).start();
}
const staggering = ()=>{
    Animated.stagger(100, [
        Animated.timing(color1, {
            toValue: 4,
            duration: 500
        }),
        Animated.timing(p1, {
            toValue: 1,
            duration: 200
        })
    ]).start()
}
  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={[
          styles.fadingContainer,
          {
            opacity: fadeAnim,
            top:x,
            left:y,
            backgroundColor:color1.interpolate({
                inputRange: [0, 1,2,3],
                outputRange: ["#fff", "#f00","#0f0","#00f"]
            }),
            padding:p1.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 10]
            })
          }
        ]}>
        <Text style={styles.fadingText}>Animacijos Jėga!</Text>
      </Animated.View>
      <View style={styles.buttonRow}>
        <Button title="Fade In View" onPress={fadeIn} />
        <Button title="Fade Out View" onPress={fadeOut} />
        <Button title="Sequence" onPress={()=>{sequence(y._value,x._value)}} />
        <Button title="Sequence color" onPress={()=>{sequence2()}} />
        <Button title="Color Loop" onPress={()=>{colorLoop()}} />
        <Button title="Stagger" onPress={()=>{staggering()}} />
      </View>
      <View style={styles.buttonRow2}>
        <Button title="Right" onPress={()=>{right(y._value)}} />
        <Button title="Left" onPress={()=>{left(y._value)}} />
        <Button title="Top" onPress={()=>{top(x._value)}} />
        <Button title="Bottom" onPress={()=>{bottom(x._value)}} />
        <Button title="To start" onPress={()=>{(toStart())}} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
      backgroundColor:'black',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position:'relative'
  },
  fadingContainer: {
    padding: 20,
  },
  fadingText: {
    fontSize: 28,
  },
  buttonRow: {
    flexBasis: 100,
    justifyContent: 'space-evenly',
    marginVertical: 16,
    position:'absolute',
    left:0
  },
  buttonRow2: {
    flexBasis: 100,
    justifyContent: 'space-evenly',
    marginVertical: 16,
    position:'absolute',
    right:0
  },
});

export default Animacijos;