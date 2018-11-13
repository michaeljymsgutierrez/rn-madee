import React, { Component } from "react";
import { Text, View, TextInput, TouchableOpacity, Alert } from "react-native";
import Home from "../home/home";
import Login from "../login/login";
import STYLE from "./style";

class Views extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }
  verify() {
    if (this.state.text.toLocaleLowerCase() === "madee") {
      Alert.alert("Yeah Madee is beautiful ....");
    } else {
      Alert.alert("Opps something went wrong...");
      this.setState({ text: "" });
    }
  }
  render() {
    return (
      <View style={STYLE.viewsContainer}>
        <Text style={STYLE.viewsText}>Views</Text>
        <TextInput
          onChangeText={value => this.setState({ text: value })}
          placeholder="Who's beautiful?"
        />
        <Text>{this.state.text} is beautiful :D </Text>
        <TouchableOpacity onPress={() => this.verify()}>
          <View style={STYLE.verify}>
            <Text style={STYLE.verifyText}>Verify</Text>
          </View>
        </TouchableOpacity>
        <View>
          <Home />
        </View>
        <View>
          <Login />
        </View>
      </View>
    );
  }
}

export default Views;
