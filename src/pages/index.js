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
        <Link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-aFq/bzH65dt+w6FI2ooMVUpc+21e0SRygnTpmBvdBgSdnuTN7QbdgL+OapgHtvPp" crossorigin="anonymous"/>
  
      </Head>
      <body style={{"backgroundColor":"#212529"}}>
      <nav class="navbar bg-body-tertiary mb-4">

    <div class="container-fluid">
    <nav class="nav">
  <a class="nav-link active" aria-current="page" href="#">

 <button class="btn btn-dark fw-bold" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
 Team
 </button>

<div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Offcanvas with body scrolling</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <p>Try scrolling the rest of the page to see this option in action.</p>
  </div>
</div>
  </a>
</nav>
      <span class="navbar-brand fw-bold mx-auto text-warning">Mining Helmet</span>

      <ul class="nav justify-content-end">
  <li class="nav-item">
  <button class="btn btn-dark fw-bold" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
    About
  </button>

<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasRightLabel">Offcanvas right</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    ...
  </div>
</div>
    
  </li>
</ul>
    </div>
    
  </nav>




      <div class="container-fluid text-center">
          <div class="row row-cols-3">
            <div class="col">
              <div class="card">
                <div class="card-header h5">
                <b>Atmospheric Temperature</b>
                </div>
                <div class="card-body">
                  
                  <h1><b><span>{Temp}</span><span>°C</span></b></h1>

                  <Tempchart/>
                  
  <button type="button" class="btn bg-transparent" data-bs-toggle="modal" data-bs-target="#exampleModal1">
    <p><a class="link-offset-3" href="#">More info</a></p>
  </button>
  
  
  <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5 fw-semibold" id="exampleModalLabel1">Temprature <span class="bold" >GRAPH</span></h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        <Tempchart/>
          
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
                </div>
              </div>
            </div>
  
  
  
            <div class="col">
              <div class="card">
                <div class="card-header h5">
                  <b>Atmospheric Humidity</b>
                </div>
                <div class="card-body">
                  <h1><b><span>{Hum}</span><span> g.m-3</span></b></h1>

                <Humidchart/>
  
  <button type="button" class="btn bg-transparent" data-bs-toggle="modal" data-bs-target="#exampleModal2">
    <p><a class="link-offset-3" href="#">More info</a></p>
  </button>
  
  <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5 fw-semibold" id="exampleModalLabel2">Humidity <span class="bold" >GRAPH</span></h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <Humidchart/>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
  
  
  
  
  
  
  
  
  
  
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <div class="card-header h5">
                  <b>Air Quality</b>
                </div>
                <div class="card-body">
                  <h1><b><span>{Gas}</span><span> ppm</span></b></h1>

                <Gaschart/>
  
  <button type="button" class="btn bg-transparent" data-bs-toggle="modal" data-bs-target="#exampleModal3">
    <p><a class="link-offset-3" href="#">More info</a></p>
  </button>
  
  <div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel3" aria-hidden="true">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5 fw-semibold" id="exampleModalLabel3">Gas
            
            <span class="bold" > GRAPH</span></h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <Gaschart/>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
  
  
  
  
  
  
  
  
  
  
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container-fluid text-center mt-4">
          <div class="row row-cols-3">
            <div class="col">
              <div class="card">
                <div class="card-header">
                  <b>Heart-Beat</b>
                </div>
                <div class="card-body">
  
  
  
  <button type="button" class="btn bg-transparent" data-bs-toggle="modal" data-bs-target="#exampleModal">
    <p><a class="link-offset-3" href="#">More info</a></p>
  </button>
  
  
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5 fw-semibold" id="exampleModalLabel">Pulse <span class="bold">GRAPH</span></h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
  
  
  
  
  
  
  
  
  
  
                </div>
              </div>
            </div>
          </div>
        </div>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/js/bootstrap.bundle.min.js" integrity="sha384-qKXV1j0HvMUeCBQ+QVp7JcfGl760yU08IQ+GpUo5hlbpg51QRiuqHAJz8+BrxE/N" crossorigin="anonymous"></Script>
      </body>
      </div>
      </html>
  
    )
  }
  export default Index 