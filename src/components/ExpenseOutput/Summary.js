import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import ExpenseSection from "./ExpenseSection";
import Color from "../../utils/color";

function Summary({timeName, items}){
const itemSum = items.reduce((sum,item) => {
    return  sum + item.amount
 }, 0);
 return(
  
        <View style={styles.rootCon}>
            <Text style={styles.text}>{timeName}</Text>
            <Text style={styles.text}>${itemSum.toFixed(2)}</Text>
        </View>

 )
}

export default Summary;
const deviceWidth = Dimensions.get('window').width
const styles = StyleSheet.create({
 rootCon: {
    margin: deviceWidth < 380 ? 6 : 8,
    marginHorizontal: deviceWidth < 380 ? 6: 8,
    flexDirection: "row",
    backgroundColor: Color.black,
    justifyContent: 'space-between',
    padding:  deviceWidth < 380 ? 6 : 8,
    borderRadius: deviceWidth < 380 ? 4 : 6
 },
 text:{
    color: Color.white,
    fontFamily: 'open-sans-semi-bold',
    fontSize: 12,
    fontWeight: 'bold'
 }
})