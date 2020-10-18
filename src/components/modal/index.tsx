import React, { Component, useState } from 'react';
import { Modal, Text, TouchableOpacity, View, Alert,StyleSheet } from 'react-native';


interface Contatos{
    nome: string,
    email: string,
    telefone: string
}

const ContatoModal: React.FC<Contatos> = ({nome, email, telefone}) => {
    var [modalVisible, setModalVisible] = useState(false);

    function verModal(){
        setModalVisible(true);
    }

    return (
        <Modal
            visible={modalVisible}
        >
            <View style={styles.container}>
                <Text>Nome: </Text>
                <Text>{nome}</Text>
                <Text>Email: </Text>
                <Text>{email}</Text>
                <Text>Telefone: </Text>
                <Text>{telefone}</Text>
            </View>
            <View style={styles.modalFooter}>
                <TouchableOpacity style={styles.actions}
                onPress={() => {
                    setModalVisible(!modalVisible);
                  }}
                >
                    <Text style={styles.actionText}>Cancelar</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    );
} 

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    modal:{
      backgroundColor:"#00000099",
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    modalContainer:{
      backgroundColor:"#f9fafb",
      width:"80%",
      borderRadius:5
    },
    modalHeader:{
      
    },
    title:{
      fontWeight:"bold",
      fontSize:20,
      padding:15,
      color:"#000"
    },
    divider:{
      width:"100%",
      height:1,
      backgroundColor:"lightgray"
    },
    modalBody:{
      backgroundColor:"#fff",
      paddingVertical:20,
      paddingHorizontal:10
    },
    modalFooter:{
    },
    actions:{
      borderRadius:5,
      marginHorizontal:10,
      paddingVertical:10,
      paddingHorizontal:20
    },
    actionText:{
      color:"#fff"
    }
  });

  export default ContatoModal;