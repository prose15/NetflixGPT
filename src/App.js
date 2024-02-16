import Body from "./Components/Body";
import {Provider} from 'react-redux'
import { reduxStore} from "./store/store";

function App() {
  return (
    <div>
      <Provider store={reduxStore}>
     <Body/>
     </Provider>
    </div>
  );
}

export default App;
