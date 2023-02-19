import { Component } from 'react';
import './App.css';
import Form from './components/Form';
import Weather from './components/Weather';


const API_KEY = "...";

class App extends Component {

  state = {
    tempreature:'',
    city: '',
    country: '',
    humidity: '',
    description: '',
    error: ''
  }

  getWeather = async (e) => {
    e.preventDefault();

    const city = e.target.elements.city.value; // mdina
    const country = e.target.elements.country.value; // dawla
    // console.log(city,country)
    const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
    const data = await api.json();
    console.log(data)
    
    if( city && country) {
      this.setState({
        tempreature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity, // الرطوبة rodoba
        description: data.weather[0].description,
        error: ''
      })
    } else {
      this.setState({
        tempreature:'',
        city: '',
        country: '',
        humidity: '',
        description: '',
        error: 'Please Entrer Data'
      })
    }

  }


  render() {

    return (
      <div className="container">
        <h1 className='text-primary mt-5 text-center'>
          <span className='text-warning'>
          <i className="fa-solid fa-cloud-sun"></i> 
          </span> Weather  
        </h1>

        {/* ---------- Form ---------------- */}
        <Form getWeather={this.getWeather}/>

        {/* ---------- Weather ---------------- */}

        <Weather 
          tempreature={this.state.tempreature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error ={this.state.error}
        /> 
          
      </div>
    )
  }
}

export default App;
