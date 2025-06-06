
import { LogBox } from "react-native"; 
import Index from "./Index";
import { Provider } from "react-redux";
import { store } from "./store";
import { Provider as PaperProvider, DefaultTheme, useTheme  } from 'react-native-paper';
import Color from "./assets/color/Color";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    text: Color.black100, // set default text color
    background: Color.white,
  },
};


export default function App() {
  LogBox.ignoreLogs([
    "Non-serializable values were found in the navigation state", // menghilangkan warn LOGS karna nge props function
    ,
    "Selector unknown returned the root state when called. This can lead to unnecessary rerenders",
    "Warning: Encountered two children with the same key, `::`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.",
    "ViewPropTypes will be removed from React Native, along with all other PropTypes and switch to a type system like TypeScript. If you need to continue using ViewPropTypes, migrate to the 'deprecated-react-native-prop-types' package", 
  ]);

  ErrorUtils.setGlobalHandler((error, isFatal) => {
    console.log("Custom global error:", error.message);
  });
  

  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <Index />
      </PaperProvider>
    </Provider>
  );
}

