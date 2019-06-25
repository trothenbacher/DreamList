import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import DreamInput from "./src/components/DreamInput/DreamInput";
import DreamList from "./src/components/DreamList/DreamList";
import DreamDetail from "./src/components/DreamDetail/DreamDetails";
import { connect } from 'react-redux';
import { addDream, deleteDream, selectDream, deselectDream } from './src/store/actions/index'

class App extends Component {

  dreamAddedHandler = dreamName => {
    this.props.onAddDream(dreamName);
  };
  
  dreamDeletedHandler = () => {
    this.props.onDeleteDream();
  };
  
  modalClosedHandler = () => {
    this.props.onDeselectDream();
  };
  
  dreamSelectedHandler = key => {
    this.props.onSelectDream(key);
  };

  render() {
    return (
      <View style={styles.container}>
        <DreamDetail
          selectedDream={this.props.selectedDream}
          onItemDeleted={this.dreamDeletedHandler}
          onModalClosed={this.modalClosedHandler}
        />
        <DreamInput onDreamAdded={this.dreamAddedHandler} />
        <DreamList
          dreams={this.props.dreams}
          onItemSelected={this.dreamSelectedHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  }
});

const mapStateToProps = state => {
  return {
    dreams: state.dreams.dreams,
    selectedDream: state.dreams.selectedDream
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddDream: (name) => dispatch(addDream(name)),
    onDeleteDream: () => dispatch(deleteDream()),
    onSelectDream: (key) => dispatch(selectDream(key)),
    onDeselectDream: () => dispatch(deselectDream())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);