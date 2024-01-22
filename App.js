
import { LogBox } from "react-native";
import Home from "./screens/Home";
import Index from "./Index";


export default function App() {
  LogBox.ignoreLogs([
    "Non-serializable values were found in the navigation state", // menghilangkan warn LOGS karna nge props function
    ,
    "Selector unknown returned the root state when called. This can lead to unnecessary rerenders",
    "Encountered two children with the same key, `::`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.",
  ]);

  return (
    <Index/>
  );
}

