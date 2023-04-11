import React, { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css'
import Humid from '../components/Humid.js';
import Temp from '../components/Temp.js';
import Gas from '../components/Gas.js';
import Tempchart from '@/components/Tempchart';
import Gaschart from '@/components/Gaschart';
import Humidchart from '@/components/Humichart';
import Head from 'next/head';
import database from '@/server/firebase.js';
import Link from "next/link"
import Script from "next/script"

function Index() {
  const [Temp,setTemp]= useState()
  const [Hum,setHum]= useState()
  const [Gas,setGas]= useState()
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
})
    
  
    return (
      <html data-bs-theme="dark">
        <div>
      <Head>
        <title>Home</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-aFq/bzH65dt+w6FI2ooMVUpc+21e0SRygnTpmBvdBgSdnuTN7QbdgL+OapgHtvPp" crossorigin="anonymous"/>
  
      </Head>
      <body style={{"backgroundColor":"#212529"}}>
      <nav className="navbar bg-body-tertiary mb-4">

    <div className="container-fluid">
    <nav className="nav">
  <a className="nav-link active" aria-current="page" href="#">

 <button className="btn btn-dark fw-bold" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
 Team
 </button>

<div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
  <div className="offcanvas-header">
    <h5 className="offcanvas-title" id="offcanvasScrollingLabel">Offcanvas with body scrolling</h5>
    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">
    <p>Try scrolling the rest of the page to see this option in action.</p>
  </div>
</div>
  </a>
</nav>
      <span className="navbar-brand fw-bold mx-auto text-warning">Mining Helmet</span>

      <ul className="nav justify-content-end">
  <li className="nav-item">
  <button className="btn btn-dark fw-bold" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
    About
  </button>

<div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div className="offcanvas-header">
    <h5 className="offcanvas-title" id="offcanvasRightLabel">Offcanvas right</h5>
    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">
    ...
  </div>
</div>
    
  </li>
</ul>
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
                  
                <div className="container text-center">
  <div className="row">
    <div className="col">
<button className="btn btn-dark" type="button" disabled>
  <span className="spinner-grow spinner-grow-sm text-danger" role="status" aria-hidden="true"></span>
  <span className="ms-1 fw-bold">Live</span>
</button>
    </div>
    <div className="col">
    <h1><b><span>{Temp}</span><span>°C</span></b></h1>
    </div>
  </div>
</div>     

                  <Tempchart/>
                  
  <button type="button" className="btn bg-transparent" data-bs-toggle="modal" data-bs-target="#exampleModal1">
    <p><a className="link-offset-3" href="#">More info</a></p>
  </button>
  
  
  <div className="modal fade" id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
    <div className="modal-dialog modal-xl">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5 fw-semibold" id="exampleModalLabel1">Atmospheric Temperature <span className="bold" >GRAPH</span></h1>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
        <Tempchart/>
          
        </div>
      </div>
    </div>
  </div>
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

                <Humidchart/>
  
  <button type="button" className="btn bg-transparent" data-bs-toggle="modal" data-bs-target="#exampleModal2">
    <p><a className="link-offset-3" href="#">More info</a></p>
  </button>
  
  <div className="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true">
    <div className="modal-dialog modal-xl">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5 fw-semibold" id="exampleModalLabel2">Atmospheric Humidity <span className="bold" >GRAPH</span></h1>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          <Humidchart/>
        </div>
      </div>
    </div>
  </div>
  
  
  
  
  
  
  
  
  
  
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

                <Gaschart/>
  
  <button type="button" className="btn bg-transparent" data-bs-toggle="modal" data-bs-target="#exampleModal3">
    <p><a className="link-offset-3" href="#">More info</a></p>
  </button>
  
  <div className="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel3" aria-hidden="true">
    <div className="modal-dialog modal-xl">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5 fw-semibold" id="exampleModalLabel3">Air Quality
            
            <span className="bold" > GRAPH</span></h1>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          <Gaschart/>
        </div>
      </div>
    </div>
  </div>
  
  
  
  
  
  
  
  
  
  
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid text-center mt-4">
          <div className="row row-cols-3">
            <div className="col">
              <div className="card">
                <div className="card-header">
                  <b>Heart-Beat</b>
                </div>
                <div className="card-body">
  
  
  
  <button type="button" className="btn bg-transparent" data-bs-toggle="modal" data-bs-target="#exampleModal">
    <p><a className="link-offset-3" href="#">More info</a></p>
  </button>
  
  
  <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-xl">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5 fw-semibold" id="exampleModalLabel">Pulse <span className="bold">GRAPH</span></h1>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          
        </div>
      </div>
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
