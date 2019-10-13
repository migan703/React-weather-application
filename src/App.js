import React, { Component } from 'react';
import Paper from '@material-ui/core/paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import LocationListContainer from './containers/LocationListContainer';
import ForecastExtendedContainer from './containers/ForecastExtendedContainer';
import {Grid,Col,Row} from 'react-flexbox-grid';
import './App.css';

const cities = [
  "Medellín,co",
  "Buenos Aires,ar",
  "Washington,us",
  "Madrid,es"
];

class App extends Component {
  
  render(){
    return (
      <Grid>
        <Row>
          <AppBar position='sticky'>
            <Toolbar>
              <Typography variant= 'inherit' color='inherit'>
                Weather App
              </Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationListContainer 
              cities={cities}>
            </LocationListContainer>
          </Col>
          <Col xs={12} md={6}>
            <Paper>
              <div className='details'>
                <ForecastExtendedContainer></ForecastExtendedContainer>                            
              </div>               
            </Paper>           
          </Col>
        </Row>
      </Grid>
    );
  };
}

export default App;