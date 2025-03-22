import { FlatList, StyleSheet, Text, View } from "react-native";
import ExpenseSection from "./ExpenseSection";

function ExpenseList({items}){
    function renderExpenseItem(itemData){
        const item = itemData.item;
        const expenseProps = {
            id: item.id,
            date: item.date,
            amount: item.amount,
            description: item.description

        }

        return <ExpenseSection {...expenseProps}/>
    }
 return(
    <View style={styles.con}>

    <FlatList
     data={items}
     renderItem={renderExpenseItem}
     keyExtractor={item => item.id}
    />
    </View>
 )
}

export default ExpenseList;

const styles = StyleSheet.create({
    con:{
        borderBottom: 16
    }
})