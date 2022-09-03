
import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';

import PictureList from './android/app/components/PictureList';
import CameraDialog from './android/app/components/CameraDialog';

export default class App extends Component{

  state = {
    pictureList: [
      {id: '1', url: 'https://agenciamoll.com.br/wp-content/uploads/2019/12/O-que-%C3%A9-URL-e-como-ela-Ajuda-na-sua-Estrat%C3%A9gia-Digital.jpg'},
      {id: '2', url: 'https://agenciamoll.com.br/wp-content/uploads/2019/12/O-que-%C3%A9-URL-e-como-ela-Ajuda-na-sua-Estrat%C3%A9gia-Digital.jpg'},
      {id: '3', url: 'https://agenciamoll.com.br/wp-content/uploads/2019/12/O-que-%C3%A9-URL-e-como-ela-Ajuda-na-sua-Estrat%C3%A9gia-Digital.jpg'},
      {id: '4', url: 'https://agenciamoll.com.br/wp-content/uploads/2019/12/O-que-%C3%A9-URL-e-como-ela-Ajuda-na-sua-Estrat%C3%A9gia-Digital.jpg'}

    ],
    isModalOpen: false
  }

  onPictureSelect = (item) =>{

  }

  openModal = () => {

  }


  render() {
    const {state} = this;
    return (
      <View style={styles.container}>
        <PictureList list={state.pictureList} onClick={this.onPictureSelect} />
        <View style={styles.footer}>
          <Button 
            onPress={this.openModal}
            title="Nova Foto"
            color="#0062ac"
          />
        </View>
        <CameraDialog isOpen={state.isModalOpen} />
      </View>
    )
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  footer: {
    padding: 15,
    backgroundColor: '#999',
    width: '100%',
    textAlign: 'center'
  }
});
