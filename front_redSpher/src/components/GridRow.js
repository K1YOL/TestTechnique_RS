

import React from 'react'
import Grid from '@material-ui/core/Grid'
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles'
import Touche from './Touche'

const styles = theme => ({
    root:{
        flexGrow: 1,
        backgroundColor:'white',
        borderBottomLeftRadius:'10px',
        borderBottomRightRadius:'10px',
      },
    Buttons:{
        width: 80,
        fontSize: '16px'
    }
});

class GridRow extends React.Component {
    
    
      //Grille qui permet d'alligner les touches de la calculatrice
    render(){
        const { classes } = this.props;
        return (
    
        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
              <Grid container justify="center" spacing={2}>
                    <Touche className={classes.Buttons} value={'7'} />
                    <Touche className={classes.Buttons} value={'8'} />
                    <Touche className={classes.Buttons} value={'9'} />
                    <Touche className={classes.Buttons} type={"operator"}  color={"#adce0"} value={'÷'} />
              </Grid>
              <Grid container justify="center" spacing={2}>             
                    <Touche className={classes.Buttons} value={'4'} />
                    <Touche className={classes.Buttons} value={'5'} />
                    <Touche className={classes.Buttons} value={'6'} />
                    <Touche className={classes.Buttons} type={"operator"} color={"#adce0"} value={'*'} />
              </Grid>
              <Grid container justify="center" spacing={2}>             
                    <Touche className={classes.Buttons} value={'1'} />
                    <Touche className={classes.Buttons} value={'2'} />
                    <Touche className={classes.Buttons} value={'3'} />
                    <Touche className={classes.Buttons} type={"operator"}  color={"#adce0"} value={'-'} />
              </Grid>
              <Grid container justify="center" spacing={2}>             
                    <Touche className={classes.Buttons} value={'0'} />
                    <Touche className={classes.Buttons} value={'.'} />
                    <Touche className={classes.Buttons} type={"operator"}  color={"#4285f4"} value={'='} />
                    <Touche className={classes.Buttons} type={"operator"}  color={"#adce0"} value={'+'} />
              </Grid>
              <Grid container justify="center" spacing={2}>             
                    <Touche className={classes.Buttons} type={"operator"}  color={"#adce0"} value={'AC'} />
                    
              </Grid>
            </Grid> 
        </Grid>
        );
    }
}

GridRow.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GridRow);