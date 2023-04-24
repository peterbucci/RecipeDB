import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { MultiSelect } from "react-native-element-dropdown";

const DropdownComponent = ({ data, externalValues, setExternalValues }) => {
  const [value, setValue] = useState(externalValues ?? []);

  return (
    <MultiSelect
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      data={data}
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder="Sections"
      value={value}
      onChange={(item) => {
        setValue(item);
        setExternalValues && setExternalValues(item);
      }}
      renderSelectedItem={() => <></>}
    />
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  dropdown: {
    width: "100%",
    height: 50,
    borderBottomColor: "#999999",
    borderBottomWidth: 1,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
});
