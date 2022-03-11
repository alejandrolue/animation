import './App.css';
import Header from "./Components/Header";
import BasicTabs from "./Components/BasicTabs";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    basicTabs: {
        position: 'absolute',
        marginTop: '3%',
        width: '100%',
        },
}));

function App() {
    const classes = useStyles()
    return (
        <div className="App">
            <div className="Header">
                <Header/>
            </div>
            <div className={classes.basicTabs}>
                <BasicTabs/>
            </div>
        </div>
    );
}

export default App;
