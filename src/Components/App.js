import './App.css';
import Header from './Header'
import NewsContainer from "./NewsContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import AddInfoContainer from "./AddInfoContainer";

function App(props) {
    return (
        <div className='all'>
            <div className='app'>
                <Header/>
                <AddInfoContainer dispatch={props.dispatch} store={props.store}/>
                <NewsContainer dispatch={props.dispatch} store={props.store}/>
            </div>
        </div>)
}

export default App;
