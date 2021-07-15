import './App.css';
import { CssBaseline, makeStyles } from '@material-ui/core';
import Header from './components/Header';
import Calculatrice from './components/Calculatrice';

//Style du root de l'application
const useStyles = makeStyles((theme) => ({
  root:{
    minHeight:'100vh',
    backgroundImage: "radial-gradient( circle farthest-corner at 10% 20%,  rgba(90,92,106,1) 0%, rgba(32,45,58,1) 81.3% )",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}));

//Méthode principal de l'application qui va afficher le Header et la calcualtrice
function App() {
  const classes = useStyles();
  return <div className={classes.root}>
    <CssBaseline/>
    <Header/>
    <Calculatrice/>
  </div>
}

export default App;
