import { useState } from "react";
import { Platform } from "react-native";
import { SearchBar } from "@rneui/themed";

export default function SearchBarComponent() {
  const [searchText, setSearchText] = useState("");

  const updateSearch = (search) => {
    setSearchText(search);
  };

  return (
    <SearchBar
      placeholder="Search Recipes..."
      onChangeText={updateSearch}
      value={searchText}
      searchIcon={{ color: "#000000" }}
      clearIcon={{ color: "#000000" }}
      containerStyle={{
        flex: 1,
        marginHorizontal: 10,
        backgroundColor: "none",
        borderBottomWidth: 0,
        borderTopWidth: 0,
      }}
      inputContainerStyle={{
        height: 35,
        backgroundColor: "#ffffff",
      }}
      inputStyle={{
        ...Platform.select({
          web: {
            outline: "none",
          },
        }),
        ...{ color: "#000000" },
      }}
      leftIcon={{ color: "#000000" }}
      placeholderTextColor="#000000"
    />
  );
}
