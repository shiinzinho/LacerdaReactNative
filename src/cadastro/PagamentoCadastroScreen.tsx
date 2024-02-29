import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

function PagamentoCadastroScreen(): JSX.Element {


    const [name, setName] = useState("");
    const [taxa, setTaxa] = useState("");
    const [status, setStatus] = useState("");

    function cadastro(){
        const dados = {
            name: name,
            taxa:taxa,
            status: status,
        }
        console.log(dados);
    }

    return(
<View style={styles.container}>
            <Image style={styles.logo} resizeMode="contain" source={require('../assets/images/pagamento.png')}/>

            <View style={styles.card}>
                <Text style={styles.title}>
                    Cadastro de Serviço
                </Text>
                <View style={styles.inputContainer}>
  <TextInput
    style={[styles.input, styles.fullWidth]}
    placeholder="Nome"
    placeholderTextColor="#151413"
    onChangeText={(textName) => setName(textName)}
  />
  <TextInput
    style={[styles.input, styles.fullWidth]}
    placeholder="Taxa"
    placeholderTextColor="#151413"
    onChangeText={(textTaxa) => setTaxa(textTaxa)}
  />
</View>
<View style={styles.inputContainer}>
  <TextInput
    style={[styles.input, styles.fullWidth]}
    placeholder="Status"
    placeholderTextColor="#151413"
    onChangeText={(textStatus) => setStatus(textStatus)}
  />
</View>

                <TouchableOpacity style={styles.button} onPress={() => {cadastro()}}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
                    </TouchableOpacity>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
      },
      input: {
        height: 40,
        paddingHorizontal: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#0035FA',
        backgroundColor: '#FFFFFF'
      },
      fullWidth: {
        flex: 1,
        marginRight: 5,
      },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#061153'
    },
    card:{
        backgroundColor: "#061781",
        width: 300,
        borderRadius: 10,
        padding: 20,
        elevation: 3,
        shadowColor: 'rgba(0,0,0,0.3)',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 2
    },
    logo:{
        width: 80,
        height: 80,
        marginBottom: 20,
        marginTop: -150
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#000000',
        marginBottom: 20,
        textAlign: 'center'
    },
    button: {
        backgroundColor: '#2009E2',
        height: 40,
        borderRadius: 8
    },
    buttonText: {
        color: '#151413',
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 40,
        fontWeight: 'bold'
        
    },
    forgotPassword: {
        color: '#5174FF',
        textAlign: 'center',
        marginTop: 10,
    },
});

export default PagamentoCadastroScreen;