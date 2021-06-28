import React, {useState} from "react";
import Modal from 'react-native-modal';
import { Button, View, Stylesheet, Text, TextInput } from "react-native";

const AddMed = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
  
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };
    return (
        <View>
            <Text style={{textAlign: 'center', fontSize: 20, fontFamily: 'Helvetica'}}>Add Medication</Text>
            <View>
                <TextInput placeholder="Name" style={{height: 50, margin: 20, width: 250, borderWidth: 1, backgroundColor: 'powderblue'}} />
                <TextInput placeholder="Time" style={{height: 50, margin: 20, width: 250, borderWidth: 1, backgroundColor: 'powderblue'}} />
                <TextInput placeholder="Quantity" keyboardType='numeric' style={{height: 50, margin: 20, width: 250, borderWidth: 1, backgroundColor: 'powderblue'}} />
            </View>
            <View>
                <Button title="Submit" onPress={toggleModal} />
                <Button title="Cancel" onPress={toggleModal} />
              </View>
        </View>
    )

}

export default AddMed;
