
import { StyleSheet, View, Text, Alert } from 'react-native';
import Input from './Input';
import Color from '../../utils/color';
import { useState } from 'react';
import PrimaryButton from '../UI/PrimaryButton';
import { getDateFormat } from '../../utils/data';



function ItemForm({onCancel, onSubmit, submitLabel, defaultValues}){
    

   const [inputValues, setInputValues ] = useState({
        amount: {value: defaultValues ? defaultValues.amount.toString() : '', 
            isValid: defaultValues ? true: false},
        date: {value:defaultValues ? getDateFormat(defaultValues.date ): '', 
             isValid:defaultValues ? true: false},
        description: {value:defaultValues ? defaultValues.description : '',
             isValid:defaultValues ? true: false}
   })

    function inputChange(inputIdentifier, enteredValue) {
        setInputValues((curInputValues)=>{
            return {
                ...curInputValues,
                [inputIdentifier]: enteredValue
            };
        });
    }
    
    function isValidDate(dateString) {
        // Matches YYYY-MM-DD format
        const regex = /^\d{4}-\d{2}-\d{2}$/;
        if (!regex.test(dateString)) return false;
    
        const date = new Date(dateString);
        return date.toString() !== 'Invalid Date';
      }

    function submitHandler(){
            const itemData = {
                amount: +inputValues.amount,
                date: inputValues.date,
                description: inputValues.description
            };
            
            const validAmount = !! isNaN(itemData.amount) && itemData.amount > 0
            const validDate = isValidDate(itemData.date);
            const validDescription = itemData.description.trim().length > 0;

            if(!validAmount || !validDate || !validDescription){
                Alert.alert('Invalid input', 'Please check your input values');
                return; 
            }
            itemData.date = new Date(itemData.date).toISOString();
            onSubmit(itemData);
    }
  
    return(
        <View style={styles.form}>
            <Text style={styles.textSty}>Your Expense</Text>
            <Input label="Description"  textInputConfig={{
               multiline: true,
               onChangeText: inputChange.bind(this,'description'),
               value: inputValues['description']
            }}/>
            <View style={styles.amountDate}>
           
            <Input 
            style={styles.rowInput}
            label="Amount" 
             textInputConfig={{
                keyboardType:'decimal-pad',
                onChangeText: inputChange.bind(this,'amount'),
                value: inputValues['amount']
            }}/>
             <Input
             style={styles.rowInput}
             label="Date"
             textInputConfig={{
               placeholder: 'YYYY-MM-DD',
               maxLength: 10,
               onChangeText: inputChange.bind(this,'date'),
               value: inputValues['date']
            }} />
            </View>
            <View style={styles.butCon}>
              <PrimaryButton style={styles.but} mode="flat" onConfirm={onCancel}>Cancel</PrimaryButton>

              <PrimaryButton style={styles.but}  onConfirm={submitHandler}>{submitLabel}</PrimaryButton>
              </View>
        </View>
    )
}

export default ItemForm;

const styles = StyleSheet.create({
    form:{
        marginTop: 40
    },
textSty:{
    color: Color.dark_ash,
    fontSize: 24,
    fontFamily: 'open-sans-semi-bold-italic',
    fontWeight: 'bold',
    marginBottom: 4,
    textAlign: 'center',
    marginVertical: 24
},
    amountDate:{
        justifyContent: "space-between",
        flexDirection: "row",
        
    },
    rowInput: {
        flex: 1
    },
    butCon:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    but: {
        minWidth: 120,
        marginHorizontal: 8
    }
})