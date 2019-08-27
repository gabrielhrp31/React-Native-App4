import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import ListaItens from "./src/components/ListaItens";

export default class app4 extends Component {
  render() {
    return (
      <View>
        <ListaItens/>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('app4', () => app4);
