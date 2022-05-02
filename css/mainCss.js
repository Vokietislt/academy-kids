import { Dimensions } from "react-native"

const windowHeight = Dimensions.get('window').height;


const styles = {
    btn: {
        margin: 10,
        padding: 8,
        backgroundColor: '#b2b484',
        borderRadius: 12,
        alignItems: 'center',
    },
    btnText: {
        color: 'white',
        fontSize: 18
    },
    container: {
        paddingTop: 50,
    },
    tinyLogo: {
        width: 50,
        height: 50,
        resizeMode: "contain",
    },
    midImg: {
        width: '100%',
        resizeMode: "contain",
        height: 100
    },
    bigImg: {
        width: '100%',
        height: windowHeight / 2,
        resizeMode: "cover",
    },
    fullscreen: {
        width: '100%',
        height: windowHeight,
        resizeMode: "cover",
    },
    header: {
        fontSize: 22,
        backgroundColor: 'lightgrey',

    },
    logo: {
        width: 66,
        height: 58,
    },
    makeBackground: {
        paddingTop: 0,
        position: 'absolute',
        top: 0,
        width: '100%',
        height: windowHeight,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
}
export default styles
