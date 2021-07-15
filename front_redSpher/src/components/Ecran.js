

import React from 'react'
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles'

const styles = theme => ({
      calculatorDisplay:{
        color: 'white',
        background: 'white',
        textAlign:'right',
        width:'100%',
        maxHeight:'60px',
        padding: '8px',
        marginBottom:'8px',
        borderTopLeftRadius:'10px',
        borderTopRightRadius:'10px',
        borderBottom:'1px grey solid',
        boxSizing: 'content-box',
        flex: 1,
        
    },text:{
      borderTopRadius:'10px',
      display: 'inline-block',
      color:'black',
      width:'100%',
      height:'100%',
      fontSize:'2em',
      overflow:'hidden',
      textOverflow: 'clip',
      textAlign:'right',
      direction:'rtl',
      whiteSpace: 'nowrap'
    },
    historyCalc:{
      display: 'inline-block',
      color:'grey',
      width:'100%',
      height:'20px',
      fontSize:'1em',
      fontStyle:'italic',
      overflow:'hidden',
      textOverflow: 'ellipsis'
    },
});


//Component qui représente juste l'affichage du calcul et du résultat
class Ecran extends React.Component {
      
    render(){
        const { value, ...props } = this.props;
        const language = navigator.language || 'fr-FR'
        let formattedValue = value.toLocaleString(language, {
          useGrouping: true,
          maximumFractionDigits: 6
        })
        return (
        <div {...props} className={this.props.classes.calculatorDisplay}>
          <div className={this.props.classes.historyCalc}>{props.history}</div>
          <div className={this.props.classes.text}><bdi>{formattedValue}</bdi></div>
        </div>
      )
    }
}

Ecran.propTypes = {
    classes: PropTypes.object.isRequired,
};




  
export default (withStyles(styles)(Ecran));