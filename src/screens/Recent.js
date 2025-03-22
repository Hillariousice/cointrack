import { useLayoutEffect } from 'react';
import {StyleSheet, View} from 'react-native'
import ExpenseOutput from '../components/ExpenseOutput/ExpenseOuput';
import { ItemContext } from '../store/context/context-item';
import { getDateMinusDays } from '../utils/data';
import { useSelector } from 'react-redux';

function Recent(){
//   const itemsCxt = useContext(ItemContext)
const items = useSelector((state) => state.items);

  const  recentItem = items.filter((item) => {
    const today = new Date();
    const day7ago = getDateMinusDays(today, 7);
    const itemDate = new Date(item.date);
    //return (itemDate >= day7ago) && (itemDate <= today);
    return itemDate > day7ago;
  })
 return(
    <View>
   <ExpenseOutput items={recentItem} itemPeriod="Last 7 Days"  fallbackText="No expenses available for the last 7 days..."/>
    </View>
 )
}

export default Recent;

const styles = StyleSheet.create({
   
})

