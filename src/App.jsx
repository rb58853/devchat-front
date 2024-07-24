import { Provider } from 'react-redux';
import './App.css';
import './environment/styles/light.css'
import { store } from './redux/store';


function App({ content }) {
  return (
    <div className="App">
      <Provider store={store}>
        {content}
      </Provider>
    </div>
  );
}

export default App;
