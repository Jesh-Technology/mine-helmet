import React, { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css'
import Humid from '../components/Humid.js';
import Temp from '../components/Temp.js';
import Gas from '../components/Gas.js';
import Tempchart from '@/components/Tempchart';
import Gaschart from '@/components/Gaschart';
import Humidchart from '@/components/Humichart';
import Heartbeatchart from '@/components/Heartbeatchart';
import Bodytempchart from '@/components/Bodytempchart';
import Head from 'next/head';
import database from '@/server/firebase.js';
import Link from "next/link"
import Script from "next/script"

function Index() {
  const [Temp,setTemp]= useState()
  const [Hum,setHum]= useState()
  const [Gas,setGas]= useState()
  const [HB, setHB] = useState()
  const[bt,setbt]=useState()
  useEffect(() => {
  const temperatureRef = database.ref("DHT/temperature");
  temperatureRef.on('value',(snapshot) => {
  const temperature = snapshot.val()
  setTemp(temperature)
 }
 )
 const HumRef = database.ref("DHT/humidity");
  HumRef.on('value',(snapshot) => {
  const hum = snapshot.val()
  setHum(hum)
  })
  const GasRef = database.ref("GAS/air_quality");
  GasRef.on('value',(snapshot) => {
  const gas = snapshot.val()
  setGas(gas)
  })
  const HBRef = database.ref("MED/bpm");
  HBRef.on('value',(snapshot) => {
  const HB = snapshot.val()
  setHB(HB)
  })
  const btRef = database.ref("MED/temp");
  btRef.on('value',(snapshot) => {
  const bt = snapshot.val()
  setbt(bt)
  })
})
    
  
    return (
      <html data-bs-theme="dark">
        <div>
      <Head>
        <title>Home</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-aFq/bzH65dt+w6FI2ooMVUpc+21e0SRygnTpmBvdBgSdnuTN7QbdgL+OapgHtvPp" crossorigin="anonymous"/>
  
      </Head>
      <body style={{"backgroundColor":"#212529"}}>



      <div className="d-flex">
        <div className="flex-shrink-1 ">
        <nav className="nav flex-column justify-content-center">
          <div className="d-flex justify-content-center border-bottom border-end">
            <a className="navbar-brand fw-bolder fs-4 btn-dark py-2" href="#">Magnatite</a>
          </div>
          <div className="border-end py-4 px-3">
            <a class="nav-link active btn btn-primary text-white fw-bold my-3 py-2 rounded-2">Dashboard</a>
            <a class="nav-link btn btn-primary text-white fw-bold my-3 py-2 rounded-2">Atmospheric Report</a>
            <a class="nav-link btn btn-primary text-white fw-bold my-3 py-2 rounded-2">Medical Health Report</a>
            <a class="nav-link btn btn-primary text-white fw-bold my-3 py-2 rounded-2">Live Location Tracking</a>
          </div>
        </nav>
        <nav className="">
        <div className="border-end py-4 px-3 d-flex justify-content-center">
            <a class="nav-link text-primary ms-2">About</a>
            <a class="nav-link text-primary ms-2">Team</a>
            <a class="nav-link text-primary ms-2">info</a>
          </div>
        </nav>
        </div>




        <div class="w-100">
        <nav className="navbar bg-body-tertiary border-bottom mb-4">

<div className="container-fluid">
<div className="d-flex justify-content-center">
<form class="d-flex mx-1" role="search">
              
              <input class="form-control border-0 rounded-0 shadow-none" type="search" placeholder="Search" aria-label="Search" list="datalistOptions" id="exampleDataList" placeholder="Type to search..."/>
<datalist id="datalistOptions">
  <option value="San Francisco"/>
  <option value="New York"/>
  <option value="Seattle"/>
  <option value="Los Angeles"/>
  <option value="Chicago"/>
</datalist>
              <button class="btn btn-dark border-0 rounded-0" type="submit">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-search text-secondary-emphasis" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
              </svg>
            </button>
            </form>
</div>
            <div className="dropdown dropstart text-end d-flex justify-content-center">
          <a href="#" className="d-block link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://github.com/mdo.png" alt="mdo" width="35" height="35" className="rounded-2"/>
          </a>
          <ul className="dropdown-menu text-small">
            <li><a className="dropdown-item" href="#">Settings</a></li>
            <li><a className="dropdown-item" href="#">Profile</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Sign out</a></li>
          </ul>
        </div>
</div>

</nav>




  <div className="container-fluid text-center">
      <div className="row row-cols-3">
        <div className="col">
          <div className="card">
            <div className="card-header h5">
            <b>Atmospheric Temperature</b>
            </div>
            <div className="card-body">
              
      
<h1><b><span>{Temp}</span><span>°C</span></b></h1>    
<button className="btn btn-dark" type="button" disabled>
<span className="spinner-grow spinner-grow-sm text-danger" role="status" aria-hidden="true"></span>
<span className="ms-1 fw-bold">Live</span>
</button>
              <Tempchart/>
              
            </div>
          </div>
        </div>



        <div className="col">
          <div className="card">
            <div className="card-header h5">
              <b>Atmospheric Humidity</b>
            </div>
            <div className="card-body">
              <h1><b><span>{Hum}</span><span> g.m-3</span></b></h1>
              <button className="btn btn-dark" type="button" disabled>
<span className="spinner-grow spinner-grow-sm text-danger" role="status" aria-hidden="true"></span>
<span className="ms-1 fw-bold">Live</span>
</button>
            <Humidchart/>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-header h5">
              <b>Air Quality</b>
            </div>
            <div className="card-body">
              <h1><b><span>{Gas}</span><span> ppm</span></b></h1>
              <button className="btn btn-dark" type="button" disabled>
<span className="spinner-grow spinner-grow-sm text-danger" role="status" aria-hidden="true"></span>
<span className="ms-1 fw-bold">Live</span>
</button>
            <Gaschart/>

            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid text-center my-4">
      <div className="row row-cols-3">
        <div className="col">
          <div className="card">
            <div className="card-header">
              <b>Heart Beat</b>
            </div>
            <div className="card-body">
            <h1><b><span>{HB}</span><span> bpm</span></b></h1>
              <button className="btn btn-dark" type="button" disabled>
<span className="spinner-grow spinner-grow-sm text-danger" role="status" aria-hidden="true"></span>
<span className="ms-1 fw-bold">Live</span>
</button>
            <Heartbeatchart/>

            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-header">
              <b>Body Temperature</b>
            </div>
            <div className="card-body">
            <h1><b><span>{bt}</span><span> °C</span></b></h1>
              <button className="btn btn-dark" type="button" disabled>
<span className="spinner-grow spinner-grow-sm text-danger" role="status" aria-hidden="true"></span>
<span className="ms-1 fw-bold">Live</span>
</button>
            <Bodytempchart/>


            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
      </div>


      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/js/bootstrap.bundle.min.js" integrity="sha384-qKXV1j0HvMUeCBQ+QVp7JcfGl760yU08IQ+GpUo5hlbpg51QRiuqHAJz8+BrxE/N" crossOrigin="anonymous"></script>
      </body>
      </div>
      </html>
  
    )
  }
  export default Index 
