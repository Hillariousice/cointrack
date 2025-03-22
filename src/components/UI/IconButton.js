import { Pressable, StyleSheet, Dimensions, Platform, Image, View,} from "react-native";
import Color from "../../utils/color";
import { Ionicons } from '@expo/vector-icons';


function IconButton({onClick, icon, color, size}){
 
    return (
        
            <Pressable
             style={({pressed})=> pressed && styles.pressed} 
             android_ripple={{color: Color.light_grey}}
             onPress={onClick}
            >
                <View style={styles.con}>
                <Ionicons name={icon} size={size} color={color}/>
                </View>
            </Pressable>
        
    )
}

export default IconButton;

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({

 pressed: {
    opacity: 0.75
},

con: {
    borderRadius: 24,
    padding: 6,
    marginHorizontal: 8,
    marginVertical: 2
}
});