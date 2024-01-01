import { ActivityIndicator } from "react-native";
import { TLoaderProps } from "../types";

const Loader = ({ isLoading }: TLoaderProps) => {
  return (
    <ActivityIndicator
      animating={isLoading}
      size="large"
      color="midnightblue"
      style={{ marginVertical: 16 }}
    />
  );
};

export default Loader;
