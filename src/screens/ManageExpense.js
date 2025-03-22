import { useContext, useLayoutEffect } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import IconButton from "../components/UI/IconButton";
import Color from "../utils/color";
import PrimaryButton from "../components/UI/PrimaryButton";
import { useDispatch, useSelector } from "react-redux";
import { addItem, editItem, removeItem } from "../store/redux/items";
import ItemForm from "../components/ManageItem/ItemForm";
// import { ItemContext } from "../store/context/context-item";


function ManageExpense({route, navigation}){

    const dispatch = useDispatch();
//  const itemCxt = useContext(ItemContext)

const editItemId = route.params?.itemId;
const isEdit = !!editItemId;

const items = useSelector((state) => state.items);
// console.log("Items from state:", items);
const existingItem = isEdit
  ? items?.find((item) => item.id === editItemId) 
  : null;

useLayoutEffect(()=>{
    navigation.setOptions({
        title: isEdit ? 'Edit Expense' : 'Add Expense'
    });
    
},[isEdit,navigation])

function deleteItem(){
    // itemCxt.deleteItem(editItemId);
    if (editItemId) {
        dispatch(removeItem({ id: editItemId }));
        navigation.goBack();
      }
 

}

function cancelTask(){
    navigation.goBack();
    }
    
    function confirmTask(itemData){
    //    if(isEdit){
    //     itemCxt.editItem(
    //         {description: 'Wig Shop', amount: 100.00, date: new Date('2025-01-27')}
    //     );
    //    }else{
    //     itemCxt.addItem({description: 'Mall', amount: 10.00, date: new Date('2025-01-7')});
    //    }
    if (isEdit) {
     
        dispatch(editItem({
            id: editItemId,
          ...itemData,
          }));
      } else {
       
        dispatch(addItem(itemData));
      }
        navigation.goBack();
    }
    
    return (
        <View style={styles.con}>
         <ItemForm
          onCancel={cancelTask}
          submitLabel={isEdit ? 'Edit' : 'Add'}
          onSubmit={confirmTask}
          defaultValues={existingItem}
          />
            

            {isEdit && (<View style={styles.deleteCon}>
                <IconButton
             icon="trash-outline" 
             size={36}
             color={Color.red}
             onClick={deleteItem}
             />
             </View>)
             }
        </View>
    )
}
export default ManageExpense;
const styles = StyleSheet.create({
    con:{
        flex: 1,
        padding: 24,
        backgroundColor: Color.light_grey
    },
    deleteCon: {
        marginTop: 16,
        paddingTop: 8,
        borderTopWidth: 2,
        borderTopColor: Color.dark_ash,
        alignItems: 'center'
    },
 

})