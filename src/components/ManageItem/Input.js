import { View, Text, TextInput, StyleSheet } from "react-native";
import Color from "../../utils/color";



function Input({label,style, textInputConfig}){
    const inputStyles =[styles.textIn]

    if (textInputConfig &&  textInputConfig.multiline){
        inputStyles.push(styles.inputMulti)
    }
    return(
        <View style={[styles.inputCon, style]}>
            <Text style={styles.label}>{label}</Text>
          <TextInput style={inputStyles}
           {...textInputConfig}/>
        </View>
    )
}
export default Input;

const styles = StyleSheet.create({
inputCon: {
    marginHorizontal:  4,
    marginVertical: 8
},
label: {
 color: Color.dark_ash,
 fontSize: 14,
 fontFamily: 'open-sans-semi-bold-italic',
 fontWeight: 'bold',
 marginBottom: 4
},
textIn: {
backgroundColor: Color.white,
color: Color.dark_ash,
padding: 6,
borderRadius: 8,
fontFamily: 'open-sans-medium',
fontSize: 18,
marginBottom: 4
},
inputMulti: {
minHeight: 100,
textAlignVertical: 'top'
}
})