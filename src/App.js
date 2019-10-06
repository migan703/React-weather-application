import React, { Component } from 'react';
import Paper from '@material-ui/core/paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';
import {Grid,Col,Row} from 'react-flexbox-grid';
import './App.css';

const cities = [
  "Medellín,co",
  "Buenos Aires,ar",
  "Washington,us",
  "Madrid,es"
];

class App extends Component {
  
  constructor(){
    super();
    this.state = {city: null};
  };
  
  handleSelectedLocation = city =>{
    this.setState({
      city
    });

    console.log(`handleSelectedLocation ${city}`);
  }
  
  render(){
    const {city} = this.state;
    console.log(city);
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
            <LocationList 
              cities={cities}
              onSelectedLocation={this.handleSelectedLocation}>
            </LocationList>
          </Col>
          <Col xs={12} md={6}>
            <Paper>
              <div className='details'>
                {
                  city ? 
                    <ForecastExtended city={city}></ForecastExtended>:                
                    null
                  }              
              </div>               
            </Paper>           
          </Col>
        </Row>
      </Grid>
    );
  };
}

export default App;
