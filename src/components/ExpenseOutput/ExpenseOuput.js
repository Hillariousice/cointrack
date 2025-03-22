import { StyleSheet, View, Text } from "react-native";
import ExpenseSection from "./ExpenseSection";
import Summary from "./Summary";
import ExpenseList from "./ExpenseList";
import Color from "../../utils/color";





function ExpenseOutput({items, itemPeriod, fallbackText}){
   let content = <Text style={styles.infoText}>{fallbackText}</Text>

   if(items.length > 0){
  content = <ExpenseList items={items}/>
   }
 return(
    <View style={styles.container}>
       <Summary timeName={itemPeriod} items={items}/>
    {content}
    </View>
 )
}

export default ExpenseOutput;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 24,
        paddingTop: 24,
        paddingBottom: 0,
        backgroundColor: Color.light_grey
    },
    infoText: {
        color: Color.white,
        textAlign: 'center',
        fontSize: 16,
        marginTop: 32

    }
})