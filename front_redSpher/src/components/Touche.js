import React from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import { connect } from "react-redux";

import { updateDisplay,clearDisplay,apiReturn } from "../store/actions/actions";

class Touche extends React.Component {
    constructor(props) {
        super(props);
        this.handleClicks = this.handleClicks.bind(this);
      }

      handleClicks(e) {
        if (this.props.value === "AC") {
          this.props.clear();
        } else if(this.props.value === "="){
          const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ calcul: this.props.display })
          };
          fetch((process.env.REACT_APP_BACK_URL || "http://localhost:3001/") + 'math/calculer', requestOptions)
              .then(response => response.json())
              .then(data => this.props.apiReturn(data.resultat,data.error || ""));

        } else {
          this.props.updateDisplay(this.props.value,this.props.type || 'num');
        }
      }
    render() {
        return(
            <Grid key={this.props.value} item>
              <Button variant="contained" style={{backgroundColor:this.props.color || "#f1f3f4",fontSize:'20px',width:100}} id={this.props.id} onClick={this.handleClicks}>{this.props.value}</Button>
            </Grid>
        )
    };
}


const mapDispatchToProps = dispatch => ({
    updateDisplay: (display,type) => dispatch(updateDisplay(display,type)),
    apiReturn: (resultat) => dispatch(apiReturn(resultat)),
    clear: display => dispatch(clearDisplay(display))
  });

const mapStateToProps = (state) => ({ display: state.display });

  
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Touche);