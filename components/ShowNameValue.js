import {React, Text} from "react-native";

const ShowNameValue = ({name, value}) => {
  return (
    <Text>
      <strong>{name}</strong> {value}
    </Text>
  );
}

export default ShowNameValue;