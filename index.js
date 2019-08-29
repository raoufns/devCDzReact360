import React from 'react';
import {
  asset,
  AppRegistry,
  Environment,
  Image,
  NativeModules,
  StyleSheet,
  Text,
  View,
  VrButton
} from 'react-360';
import { connect, changeRoom } from './store';

const { AudioModule } = NativeModules;

class AudioPanel extends React.Component {
  playAmbientMusic() {
    AudioModule.playEnvironmental({
      source: asset('audio/ambient.wav'),
      volume: 0.3
    })
  }

  stopAmbientMusic() {
    AudioModule.stopEnvironmental();
  }

  render() {
    return (
      <View style={styles.audioPanel}>
        <VrButton onClick={() => this.playAmbientMusic()}>
          <Image style={{height:50, width: 50}} source={asset('audioOn.png')} />
        </VrButton>
        <VrButton onClick={() => this.stopAmbientMusic()}>
          <Image style={{height:50, width: 50}} source={asset('audioOff.png')} />
        </VrButton>
      </View>
    );
  }
}

class HouseInfoPanel extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.infoPanel}>
          <Text style={styles.header}>Info sur la chambre</Text>
          <Text style={styles.content}>
            { this.props.info}
          </Text>
        </View>
      </View>
    );
  }
};

class Button extends React.Component {
  state = {
    hover: false
  }

  clickHandler(roomSelection) {
    changeRoom(roomSelection);
  }

  render() {
    return(
      <View>
        <VrButton style={this.state.hover ? styles.hover : styles.button}
                  onEnter={() => this.setState({hover: true})}
                  onExit={() => this.setState({hover: false})}
                  onClick={() => this.clickHandler(this.props.room.split(' ').join('_'))}>
                  <Text style={{textAlign: 'center'}}>{this.props.room.split('_').join(' ')}</Text>
        </VrButton>
      </View>
    );
  }
}

export default class ButtonInfoPanel extends React.Component {

  createRoomButtons(adjacentRooms) {
    let rooms = adjacentRooms;
    let buttons = [];

    rooms.map(room => (
      buttons.push(<Button key={`${room}` + '-button'} room={room}/>)
    ));

    return buttons;
  }

  render() {
    return (
      <View>
        <View style={styles.buttonPanel}>
          <Text style={styles.header}>Sélection de la chambre</Text>
          { this.createRoomButtons(this.props.adjacentRooms) }
          <AudioPanel />
        </View>
      </View>
    );
  }
}

const ConnectedButtonInfoPanel = connect(ButtonInfoPanel);
const ConnectedHouseInfoPanel = connect(HouseInfoPanel);

const styles = StyleSheet.create({
  audioPanel: {
    flexDirection: 'row',
  },
  infoPanel: {
    width: 400,
    height: 400,
    opacity: 0.8,
    backgroundColor: '#4267B2',
    borderColor: 'rgb(255, 255, 255)',
    borderWidth: 5,
    borderRadius: 20,
  },
  content: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'normal',
    color: 'white'
  },
  buttonPanel: {
    width: 400,
    height: 400,
    opacity: 0.8,
    backgroundColor: '#4267B2',
    borderColor: 'rgb(255, 255, 255)',
    borderWidth: 5,
    borderRadius: 30,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  audioButton: {
    width: 50,
    height: 50,
    backgroundColor: 'rgb(0,204,102)',
    borderColor: 'rgb(255,255,255)',
    borderWidth: 2,
  },
  button: {
    width: 200,
    backgroundColor: '#4267b2',
    borderColor: 'white',
    borderWidth: 5,
  },
  hover: {
    width: 200,
    backgroundColor: '#0073B7',
    borderColor: 'rgb(255,255,255)',
    borderWidth: 5
  },
  header: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

AppRegistry.registerComponent('ConnectedButtonInfoPanel', () => ConnectedButtonInfoPanel);
AppRegistry.registerComponent('ConnectedHouseInfoPanel', () => ConnectedHouseInfoPanel);
