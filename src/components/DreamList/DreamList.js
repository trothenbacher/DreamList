import React from "react";
import { StyleSheet, FlatList } from "react-native";

import ListItem from "../ListItem/ListItem";

const dreamList = props => {
  return (
    <FlatList
      style={styles.listContainer}
      data={props.dreams}
      keyExtractor={item => item.key.toString()}
      renderItem={(info) => (
        <ListItem
          dreamName={info.item.name}
          onItemPressed={() => props.onItemSelected(info.item.key)}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: "100%"
  }
});

export default dreamList;