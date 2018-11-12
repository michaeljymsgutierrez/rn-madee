import React, { Component } from "react";
import { Text, View } from "react-native";
import Home from "../home/home";
import Login from "../login/login";
import STYLE from "./style";

class Views extends Component {
  render() {
    return (
      <View style={STYLE.viewsContainer}>
        <Text style={STYLE.viewsText}>Views</Text>
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
