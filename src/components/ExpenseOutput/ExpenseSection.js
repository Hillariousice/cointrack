import { Button, Dimensions, StyleSheet, View, Text, Pressable } from "react-native";
import Color from "../../utils/color";
import PrimaryButton from "../UI/PrimaryButton";
import { getDateFormat } from "../../utils/data";
import { useNavigation } from "@react-navigation/native";

function ExpenseSection({id,date, description, amount}){
    const navigation = useNavigation()
    function expenseClick(){

    navigation.navigate('ManageExpense', {
        itemId: id
    });
    }
 return(

 <Pressable
    style={({pressed}) => pressed && styles.pressed}
    onPress={expenseClick}
    android_ripple={{ color: Color.light_grey }}>
    <View style={styles.rootCon}>
        <View style={styles.textCon}>
        <Text style={styles.textInputOne}>{description}</Text>
        <Text style={styles.textInputTwo}>{getDateFormat(date)}</Text>
        </View>
         <PrimaryButton>{amount.toFixed(2)}</PrimaryButton>
    </View>
    
    </Pressable>

 )
}

export default ExpenseSection;
const deviceWidth = Dimensions.get('window').width
const styles = StyleSheet.create({

    rootCon:{
        margin: deviceWidth < 380 ? 4: 6,
        marginVertical: deviceWidth < 380 ? 6: 8,
        flexDirection: "row",
        backgroundColor: Color.dark_ash,
        padding:  deviceWidth < 380 ? 8 : 12,
        borderRadius: deviceWidth < 380 ? 4 : 6,
        justifyContent: 'space-between',
        elevation: 3,
        shadowColor: Color.black,
        shadowOffset: { width: 1, height: 1 },
        shadowRadius: 4,
        shadowOpacity: 0.25
    },
    textCon:{
        flexDirection: "column",
        padding: deviceWidth < 380 ? 4 : 6,
       

    },
    textInputOne: {
        color: Color.white,
        fontFamily: 'open-sans-semi-bold',
        fontWeight: 'bold',
        fontSize: 16
    },
    textInputTwo: {
        color: Color.white,
        fontFamily: 'open-sans-medium-italic',
        fontSize: 12
    },
    pressed: {
        opacity: 0.75
    }
})