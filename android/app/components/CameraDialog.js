import React, {Component} from "react";
import { StyleSheet, View, Image, Modal, Text, Button, TouchableOpacity } from "react-native";

class CameraDialog extends Component{

    static defaultProps = {
        isOpen: false
    }
    state = {
        currentImage: 'https://agenciamoll.com.br/wp-content/uploads/2019/12/O-que-%C3%A9-URL-e-como-ela-Ajuda-na-sua-Estrat%C3%A9gia-Digital.jpg'
    }
    render() {
        const {props, state} = this;
        return (
            <Modal 
                animationType="slide"
                transparent={false}
                visible={props.isOpen}
                >
                    <View>
                        <Image source={{uri: state.currentImage}} />
                        <TouchableOpacity>
                            <Text> X </Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Button
                            title="Salvar"
                            onPress={this.save}
                            color="#0062ac"
                        />
                        <Button
                            title="Bater"
                            onPress={this.shot}
                            color="#0062ac"
                        />
                        
                        <Button
                            title="Colar"
                            onPress={this.getImageFromClipboard}
                            color="#0062ac"
                        />
                    </View>
                    <View>

                    </View>
            </Modal>
        );
    }
}

export default CameraDialog;