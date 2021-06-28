import * as React from 'react';
import {
    CameraRoll,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image,
  } from 'react-native';

import DocumentScanner from '@woonivers/react-native-document-scanner';
import {RNCamera} from 'react-native-camera';


export default class Camera extends React.Component {
  constructor() {
        super()
        this.state = {
            captureAudio: false,
            canDetectText: true,
            textBlocks: [],
        };
    }
    renderTextBlocks = () => (
        <View pointerEvents="none">
      {/* {this.state.textBlocks.map(this.renderTextBlock)} */}
        </View>
        );
    onTextRecognized = object => {
        const {textBlocks} = object;
        this.setState({textBlocks});
    }
    renderCamera(){
        const {canDetectText} = this.state;
        return (
            <RNCamera
            ref={ref => {this.camera = ref;}}
            style={{flex: 1,}}
            trackingEnabled
            onTextRecognized={canDetectText ? this.onTextRecognized : null}>
                {!!canDetectText && this.renderTextBlocks()}
            </RNCamera>
        );
    }
  render() {
        return(
        <View>
        {this.renderCamera()}
      </View>
    );
  }
}
