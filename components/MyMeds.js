import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Platform,
} from 'react-native';
// import Grid from 'react-native-grid-component';
import {
  DefaultTheme,
  DataTable,
  Provider as PaperProvider,
  Button,
  Title,
  Paragraph,
  IconButton,
  Colors,
  Appbar,
  Menue,
  Divider,
} from 'react-native-paper';

//modal to show info re med when selected??

import {
  Tabs,
  TabScreen,
  useTabIndex,
  useTabNavigation,
} from 'react-native-paper-tabs';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'powderblue',
    accent: 'black',
  }
}
export default class MyMeds extends React.Component {
  constructor() {
    super();
    this.state = {
      visible: false,
    };
  }
  _openMenu = () => this.setState({visible: true});
  _closeMenu = () => this.setState({visible: false});

  // addItemMenu(){
  //   <PaperProvider>
  //     <View style={{paddingTop: 50, flexDirection: 'row', justifyContent: 'center'}} />
  //     <Menu visible={this.state.visible} onDismiss={this._closeMenu}></Menu>
  //   </PaperProvider>
  // }

  render() {
    return (
      <SafeAreaView>
        <Appbar.Header>
          <Appbar.Content
            title="Meds Manager"
            subtitle="Add and Organize Meds"
          />
          <Appbar.Action icon="plus" onPress={() => {}} />
        </Appbar.Header>
        <ScrollView>
          <PaperProvider theme={theme}>
            <DataTable>
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
    );
  }
}
