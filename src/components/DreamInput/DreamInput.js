import React, { Component } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

class DreamInput extends Component {
  state = {
    dreamName: ""
  };

  dreamNameChangedHandler = name => {
    this.setState({
      dreamName: name
    });
  };

  dreamSubmitHandler = () => {
    if (this.state.dreamName.trim() === "") {
      return;
    }

    this.props.onDreamAdded(this.state.dreamName);
  };

  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Your dream"
          value={this.state.dreamName}
          onChangeText={this.dreamNameChangedHandler}
          style={styles.dreamInput}
        />
        <Button
          title="Add"
          style={styles.dreamButton}
          onPress={this.dreamSubmitHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    // flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  dreamInput: {
    width: "70%"
  },
  dreamButton: {
    width: "30%"
  }
});

export default DreamInput;
