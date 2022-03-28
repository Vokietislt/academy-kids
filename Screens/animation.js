import React, { useRef } from 'react';
import { Animated, Text, View, StyleSheet, Button, SafeAreaView } from 'react-native';

const Animacijos = () => {
  // fadeAnim will be used as the value for opacity. Initial Value: 0
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const y = useRef(new Animated.Value(0)).current;
  const x = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver:true,
    //   easing:easeInOutSine,
    }).start();
  };

  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver:true,
    }).start();
  };
  const stepDown = (current) => {
      console.log(current)
    Animated.timing(y, {
      toValue: current-100,
      duration: 300,
      useNativeDriver:true,
    }).start();
  };
  const stepUp = (current) => {
      console.log(current)
    Animated.timing(y, {
      toValue: current+100,
      duration: 300,
      useNativeDriver:true,
    }).start();
  };
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
            toValue: currentx-100,
            duration: 500
        }),
        Animated.timing(y, {
            toValue: currenty-100,
            duration: 500
        }),
    ]).start()
  }

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={[
          styles.fadingContainer,
          {
            opacity: fadeAnim,
          },
          {
              top:x
          },
          {left:y}
        ]}>
        <Text style={styles.fadingText}>Fading View!</Text>
      </Animated.View>
      <View style={styles.buttonRow}>
        <Button title="Fade In View" onPress={fadeIn} />
        <Button title="Fade Out View" onPress={fadeOut} />
        <Button title="Sequence" onPress={()=>{sequence(y._value,x._value)}} />
        <Button title="Spring" onPress={()=>{spring()}} />
      </View>
      <View style={styles.buttonRow2}>
        <Button title="Step Right" onPress={()=>{stepUp(y._value)}} />
        <Button title="Step Left" onPress={()=>{stepDown(y._value)}} />
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
    backgroundColor: 'powderblue',
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