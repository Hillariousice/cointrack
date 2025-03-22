import { View, Text, Pressable, StyleSheet } from 'react-native'
import Color from '../../utils/color'
function PrimaryButton({children,  onConfirm, mode, style}) {
  
 return  (
    <View style={style}> 
    <Pressable 
        style={({pressed}) => pressed && styles.pressed}
        onPress={onConfirm}
        android_ripple={{ color: Color.light_grey }}

     >
        <View style={[styles.button, mode === 'flat' && styles.flat]}>
        <Text style={[styles.buttonText, mode === 'flat' && styles.flatText]}>{children}</Text>
        </View>
        </Pressable>
    </View>
   
 )
}

export default PrimaryButton;

const styles = StyleSheet.create({
    button:{
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 16,
        overflow: 'hidden',
        backgroundColor: Color.white,
    },
    mainInCon: {
        borderRadius: 8,
        // backgroundColor: Color.white,
        paddingVertical: 12,
        paddingHorizontal: 16,
        
    },
    buttonText: {
        color: Color.black,
        textAlign: 'center',
        fontWeight: 'bold',
        fontFamily: 'open-sans-semi-bold',
        fontSize: 12
    },
    flatText: {
        color: Color.dark_ash,
        textAlign: 'center',
        fontWeight: 'bold',
        fontFamily: 'open-sans-semi-bold',
        fontSize: 12
    },
    pressed: {
        opacity: 0.75,
        borderRadius: 8,
        backgroundColor: Color.light_grey
    },
    flat: {
        backgroundColor: 'transparent'
    }
})