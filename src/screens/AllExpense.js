import { StyleSheet, Text, View } from "react-native";
import ExpenseOutput from "../components/ExpenseOutput/ExpenseOuput";
// import { useContext } from "react";
// import { ItemContext } from "../store/context/context-item";
import { useSelector } from "react-redux";

function AllExpense(){
//   const itemCxt = useContext(ItemContext)
const items = useSelector((state) => state.items);
 return (
    <ExpenseOutput items={items} itemPeriod="Total" fallbackText="No expenses found..."/>
 )
}

export default AllExpense;

StyleSheet