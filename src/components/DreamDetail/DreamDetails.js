import React from "react";
import { Modal, View, Text, Button, StyleSheet } from "react-native";

const dreamDetail = props => {
  let modalContent = null;

  if (props.selectedDream) {
    modalContent = (
      <View>
        <Text style={styles.dreamName}>{props.selectedDream.name}</Text>
      </View>
    );
  }
  return (
    <Modal
      onRequestClose={props.onModalClosed}
      visible={props.selectedDream !== null}
      animationType="slide"
    >
      <View style={styles.modalContainer}>
        {modalContent}
        <View>
          <Button title="Delete" color="red" onPress={props.onItemDeleted} />
          <Button title="Close" onPress={props.onModalClosed} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    margin: 25
  },
  dreamName: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 28
  }
});

export default dreamDetail;
