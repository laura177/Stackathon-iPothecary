/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Platform,
  TextInput,
  Button,
} from 'react-native';
// import Grid from 'react-native-grid-component';
import {
  DefaultTheme,
  DataTable,
  Provider as PaperProvider,
  Title,
  Paragraph,
  IconButton,
  Colors,
  Appbar,
  Menu,
  Divider,
} from 'react-native-paper';

import {
  Tabs,
  TabScreen,
  useTabIndex,
  useTabNavigation,
} from 'react-native-paper-tabs';

import Modal from 'react-native-modal';
import AddMed from './AddMed';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'powderblue',
    accent: 'black',
  },
};

const data = [
  {name: 'Vicodin', time: 'Morning', qty: 2},
  {name: 'Vitamin C', time: 'Noon', qty: 2},
];

const MyMeds = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };
    return (
    <PaperProvider>
      <SafeAreaView>
        <Appbar.Header style={{backgroundColor: 'powderblue'}}>
          <Appbar.Content
            title="Meds Manager"
            subtitle="Add and Organize Meds"
          />
          <Appbar.Action icon="plus" onPress={toggleModal} />
          <Modal
            animationOutTiming={500}
            animationOut={'slideOutUp'}
            style={{marginTop: 60, marginBottom: 60, padding: 20}}
            isVisible={isModalVisible}>
            <View style={styles.container}>
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
            </View>
          </Modal>
          {/* <Menu visible={this.state.visible} onDismiss={this._closeMenu} anchor={<Appbar.Action icon="plus" onPress={this._openMenu} />}> */}
          <Menu>
            <Menu.Item onPress={() => {}} title="Name" />
            <Menu.Item onPress={() => {}} title="Time" />
            <Menu.Item onPress={() => {}} title="Qty" />
          </Menu>
        </Appbar.Header>
        <ScrollView>
          <PaperProvider theme={theme}>
            <DataTable style={{backgroundColor: 'aliceblue'}}>
            <DataTable.Header>
                <DataTable.Title sortDirection="descending">
                  Name
                </DataTable.Title>
              <DataTable.Title>Time</DataTable.Title>
              <DataTable.Title numeric>Qty</DataTable.Title>
            </DataTable.Header>
              <DataTable.Row>
              <DataTable.Cell>FABB</DataTable.Cell>
              <DataTable.Cell>Morning</DataTable.Cell>
              <DataTable.Cell numeric>1</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
              <DataTable.Cell>Probiotic</DataTable.Cell>
              <DataTable.Cell>Morning</DataTable.Cell>
              <DataTable.Cell numeric>1</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
              <DataTable.Cell>Prednisone</DataTable.Cell>
              <DataTable.Cell>Morning</DataTable.Cell>
              <DataTable.Cell numeric>3</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
              <DataTable.Cell>Vitamin D</DataTable.Cell>
              <DataTable.Cell>Noon</DataTable.Cell>
              <DataTable.Cell numeric>2</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
              <DataTable.Cell>Magnesium</DataTable.Cell>
              <DataTable.Cell>Noon</DataTable.Cell>
              <DataTable.Cell numeric>1</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
              <DataTable.Cell>Biotin</DataTable.Cell>
              <DataTable.Cell>Noon</DataTable.Cell>
              <DataTable.Cell numeric>1</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
              <DataTable.Cell>Vitamin D</DataTable.Cell>
              <DataTable.Cell>Noon</DataTable.Cell>
              <DataTable.Cell numeric>2</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
              <DataTable.Cell>Zinc</DataTable.Cell>
              <DataTable.Cell>Noon</DataTable.Cell>
              <DataTable.Cell numeric>1</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell>Vitamin C</DataTable.Cell>
              <DataTable.Cell>Noon</DataTable.Cell>
              <DataTable.Cell numeric>1</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
              <DataTable.Cell>Probiotic</DataTable.Cell>
              <DataTable.Cell>Noon</DataTable.Cell>
              <DataTable.Cell numeric>1</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
              <DataTable.Cell>One a Day</DataTable.Cell>
              <DataTable.Cell>Noon</DataTable.Cell>
              <DataTable.Cell numeric>1</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
              <DataTable.Cell>Bystolic</DataTable.Cell>
              <DataTable.Cell>Evening</DataTable.Cell>
              <DataTable.Cell numeric>1</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell>Keppra</DataTable.Cell>
              <DataTable.Cell>Evening</DataTable.Cell>
              <DataTable.Cell numeric>1</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
              <DataTable.Cell>Prednisone</DataTable.Cell>
              <DataTable.Cell>Evening</DataTable.Cell>
              <DataTable.Cell numeric>1</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
              <DataTable.Cell>BuSpar</DataTable.Cell>
              <DataTable.Cell>Evening</DataTable.Cell>
              <DataTable.Cell numeric>1</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
              <DataTable.Cell>Lexapro</DataTable.Cell>
              <DataTable.Cell>Evening</DataTable.Cell>
              <DataTable.Cell numeric>1</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
              <DataTable.Cell>Vicodin</DataTable.Cell>
              <DataTable.Cell>Evening</DataTable.Cell>
              <DataTable.Cell numeric>1</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
              <DataTable.Cell>Xanax</DataTable.Cell>
              <DataTable.Cell>--</DataTable.Cell>
              <DataTable.Cell numeric>1</DataTable.Cell>
              </DataTable.Row>
            </DataTable>
          </PaperProvider>
        </ScrollView>
      </SafeAreaView>
      </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'aliceblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default MyMeds;
