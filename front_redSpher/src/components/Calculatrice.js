import React from 'react'
import { connect } from "react-redux";
import {withStyles} from '@material-ui/core/styles'
import GridRow from './GridRow'
import Ecran from './Ecran'
import { updateDisplay,clearDisplay,apiReturn } from "../store/actions/actions";
import appelApi from '../actions/action';
const styles = theme => ({
    root:{
        minHeight: '25vh',
        width: '460px',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection:'column',
        backgroundColor:'white'
      }
});

class Calculatrice extends React.Component {

      //Pour gérer l'ajout de nombre et opérateur avec les touches du clavier
      _handleKeyDown = (event) => {
        if (event.keyCode > 95 && event.keyCode < 112 ){
          let type = "num"
          let value = event.key
          if (event.keyCode > 105 && event.keyCode !== 110){
            type = "operator"
          }
          this.props.updateDisplay(value,type);
        }
        if(event.keyCode === 8)
          this.props.clear()
        if(event.keyCode === 13){ 
          appelApi(this.props.display).then(res => res.isOk ?? this.props.apiReturn(res.resultat,res.error))
        }
    }
    //On ajoute l'event du keydown quand le component est monté
    componentDidMount(){
      document.addEventListener("keydown", this._handleKeyDown);
    }
    //On retire l'event quand le component va se démonter
    componentWillUnmount() {
      document.removeEventListener("keydown", this._handleKeyDown);
    }

    render(){
        const { classes } = this.props;
        return (
            <div className={classes.root}  id={'calculatrice'}>
                <Ecran value={this.props.display} history={this.props.history}/>
                <GridRow/>
            </div>
        );
    }
}

//Méthodes propre à redux, qui permet de rattacher des props au state et des méthodes à des props
const mapStateToProps = (state) => ({ display: state.display,history : state.historyCalcul })
const mapDispatchToProps = dispatch => ({
  updateDisplay: (display,type) => dispatch(updateDisplay(display,type)),
  apiReturn: (resultat) => dispatch(apiReturn(resultat)),
  clear: display => dispatch(clearDisplay(display))
});

//On connect le component au store
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(withStyles(styles)(Calculatrice));

