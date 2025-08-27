import { Provider } from "react-redux";
import {Home} from "./components"
import appStore from "./store/appStore";

const App = () => {
  return (
    <Provider store={appStore}>
    <>
      <Home />
    </>
    </Provider>
  )
}

export default App;