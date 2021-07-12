import React from 'react'
import { connect } from "react-redux";
import {withStyles} from '@material-ui/core/styles'
import GridRow from './GridRow'
import Ecran from './Ecran'

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
    constructor(props) {
        super(props);
      }

    render(){
        const { classes } = this.props;
        return (
            <div className={classes.root}  id={'calculatrice'}>
                <Ecran value={this.props.display}/>
                <GridRow/>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({ display: state.display })


  export default connect(
    mapStateToProps,
    null
  )(withStyles(styles)(Calculatrice));

