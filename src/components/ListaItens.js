import React, { Component } from 'react';
import {
    StyleSheet,
    ScrollView
} from 'react-native';
import axios from 'axios'
import Itens from "./Itens";

export default class ListaItens extends Component {

    constructor(props) {
        super(props);
        this.state = { listItems: [] }
    }

    componentWillMount() {
        // http://faus.com.br/recursos/c/dmairr/api/itens.html
        axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html').then(response=>{
            this.setState({listItems: response.data})
        }).catch(()=>{
            console.log('Erro ao recuperar dados');
        })
    }

    // componentDidMount() {
    //     console.log('Depois de Renderizado');
    // }

    render() {
        console.log('Renderizado');
        return (

            <ScrollView>
                {this.state.listItems.map((item)=>(
                    <Itens key={item.titulo} item={item}/>
                ))}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({

});
