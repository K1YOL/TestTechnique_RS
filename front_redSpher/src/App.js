import logo from './logo.svg';
import './App.css';
import { CssBaseline, makeStyles } from '@material-ui/core';
import Header from './components/Header';
import Calculatrice from './components/Calculatrice';
import { findByLabelText } from '@testing-library/dom';

const useStyles = makeStyles((theme) => ({
  root:{
    minHeight:'100vh',
    background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}));

function App() {
  const classes = useStyles();
  return <div className={classes.root}>
    <CssBaseline/>
    <Header/>
    <Calculatrice/>
  </div>
}

export default App;