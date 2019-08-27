import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

export default class Itens extends Component {

    constructor(props) {
        super(props);
        console.log('Construtor');
    }

    componentWillMount() {
        console.log('WillMont');
    }

    componentDidMount() {
        console.log('Depois de Renderizado');
    }

    render() {
        console.log('Renderizado');
        return (
            <View style={styles.index}>
                <Text style={styles.title}>{this.props.item.titulo}</Text>
                <View style={styles.subview}>
                    <Image style={styles.image} source={{uri: this.props.item.foto}}/>
                    <View style={styles.viewDescription}>
                        <Text style={styles.valor}>R${this.props.item.valor.toFixed(2).replace('.',',')}</Text>
                        <Text>{this.props.item.local_anuncio}</Text>
                        <Text>{this.props.item.data_publicacao}</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    index:{
        borderWidth: 1,
        borderColor: 'black',
        margin:20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
    },
    title:{
        textAlign: 'center',
        fontSize:20,
        paddingBottom:10,
        borderBottomWidth:1,
        color:'black',
        fontWeight:'bold'
    },
    image: {
        alignSelf: 'flex-start',
        width:100,
        height:100,
        flex:2,
        marginLeft: 10,
        marginRight: 10,
    },
    viewDescription:{
        flex: 4,
        borderLeftWidth:1,
        justifyContent:'center',
        alignItems:'center',
        height:100,
        alignSelf: 'center'
    },
    subview: {
        flex:1,
        flexDirection: 'row'
    },
    valor: {
        color: 'darkgreen',
        fontSize: 18
    }
});
