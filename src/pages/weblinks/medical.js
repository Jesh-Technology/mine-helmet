import React, { useEffect, useState } from 'react';
import Humid from '../../components/Humid.js';
import Temp from '../../components/Temp.js';
import Gas from '../../components/Gas.js';
import Heartbeatchart from '@/components/Heartbeatchart';
import Bodytempchart from '@/components/Bodytempchart';
import Map from '@/components/Map';
import Head from 'next/head';
import database from '@/server/firebase.js';
import Link from "next/link"
import Script from "next/script"
import { useRouter } from 'next/router';

function Medical() {
  const [HB, setHB] = useState()
  const[bt,setbt]=useState()
  const router = useRouter()
  useEffect(() => {
     if((sessionStorage.getItem('AUTH'))=="0"||sessionStorage.getItem('AUTH')==null){
        router.push('/adminlogin')}
     

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

const SignOut =()=>{
  sessionStorage.setItem('AUTH',"0")
  // database.ref("/AUTH").set(0).then(
    router.push('/adminlogin')
  // )
}
    
  
    return (
      
        <div data-bs-theme="dark">
      <Head>
        <title>Home</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-aFq/bzH65dt+w6FI2ooMVUpc+21e0SRygnTpmBvdBgSdnuTN7QbdgL+OapgHtvPp" crossorigin="anonymous"/>
  
      </Head>
      <div style={{"backgroundColor":"#212529"}}>



      <div className="d-flex">
        <div className="flex-shrink-1 border-end">
        <nav className="nav flex-column justify-content-center">
          <div className="d-flex justify-content-center border-bottom">
            <a className="navbar-brand text-white fw-bolder fs-4 py-2" href="#">Magnatite</a>
          </div>
          <div className=" py-4 px-3">
            <a class="nav-link btn btn-primary text-white fw-bold my-3 py-2 rounded-5" href="/">Dashboard</a>
            <a class="nav-link btn btn-primary text-white fw-bold my-3 py-2 rounded-5" href="atmospher">Atmospheric Report</a>
            <a class="nav-link active btn btn-primary text-white fw-bold my-3 py-2 rounded-5" href="">Medical Health Report</a>
            <a class="nav-link btn btn-primary text-white fw-bold my-3 py-2 rounded-5" href="location">Live Location Tracking</a>
          </div>
        </nav>
        <nav className="">
        <div className=" py-4 px-3 d-flex justify-content-center border-top">



 
<a type="button" class="btn btn-dark text-primary fw-semibold" data-bs-toggle="modal" data-bs-target="#exampleModal">
  About
</a>


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title text-white fw-bolder fs-5" id="exampleModalLabel">About</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p className="lead text-white " align="justify">
        Magnatite helmet is an one stop solution for the commk  problems faced by miners. We have evolved an exceptionalinong helmet which gives assistance to monitor the individuals heart rate, including the person's location through GPS, it also provides data about the temperature and humidity of the surrounding and also detects the quality of the air in the quarrys. Overall our mining helmet can bring revolutionary changes in mining industry.
        </p>
      </div>
    </div>
  </div>
</div>

<a type="button" class="btn btn-dark text-primary fw-semibold" data-bs-toggle="modal" data-bs-target="#exampleModal1">
  Team
</a>

<div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title text-white fw-bolder fs-5" id="exampleModalLabel1">Team</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div class="container text-center mt-3">
  <div class="row">
    <div class="col">
      <img src="https://www.raid.com/-/media/Images/Project/RaidSite/Article-Details-Page/Articles/8-Facts-About-Flies/8-Facts-About-Flies-1__2X.jpg?h=465&la=en-US&mw=955&w=955" width="100" height="100" class="rounded-circle" alt="..."/>
    </div>
    <div class="col">
      <img src="https://www.raid.com/-/media/Images/Project/RaidSite/Article-Details-Page/Articles/8-Facts-About-Flies/8-Facts-About-Flies-1__2X.jpg?h=465&la=en-US&mw=955&w=955" width="100" height="100" class="rounded-circle" alt="..."/>
    </div>
    <div class="col">
      <img src="https://www.raid.com/-/media/Images/Project/RaidSite/Article-Details-Page/Articles/8-Facts-About-Flies/8-Facts-About-Flies-1__2X.jpg?h=465&la=en-US&mw=955&w=955" width="100" height="100" class="rounded-circle" alt="..."/>
    </div>
  </div>
</div>
<div class="container text-center my-4">
  <div class="row">
    <div class="col">
    <img src="https://www.raid.com/-/media/Images/Project/RaidSite/Article-Details-Page/Articles/8-Facts-About-Flies/8-Facts-About-Flies-1__2X.jpg?h=465&la=en-US&mw=955&w=955" width="100" height="100" class="rounded-circle" alt="..."/>
    </div>
    <div class="col">
    <img src="https://www.raid.com/-/media/Images/Project/RaidSite/Article-Details-Page/Articles/8-Facts-About-Flies/8-Facts-About-Flies-1__2X.jpg?h=465&la=en-US&mw=955&w=955" width="100" height="100" class="rounded-circle" alt="..."/>
    </div>
  </div>
</div>
      </div>
    </div>
  </div>
</div>


<a type="button" class="btn btn-dark text-primary fw-semibold" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Info
</a>


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>


            
          </div>
        </nav>
        </div>




        <div class="w-100">
        <nav className="navbar bg-body-tertiary border-bottom">

<div className="container-fluid">
<div className="d-flex justify-content-center">
<form class="d-flex mx-1" role="search">
              
              <input class="form-control border-0 rounded-0 shadow-none" type="search" placeholder="Search" aria-label="Search" list="datalistOptions" id="exampleDataList" />
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

<button type="button" class="btn btn-outline-danger rounded-pill">SoS</button>

            <div className="dropdown dropstart text-end d-flex justify-content-center">
          <a href="#" className="d-block link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-person-circle text-secondary rounded-2" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
</svg>
          </a>
          <ul className="dropdown-menu text-small ">
            <li><span className="dropdown-item fw-bold bg-black">Admin</span></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item fw-bolder" href="#" onClick={SignOut} >Sign out</a></li>
          </ul>
        </div>
</div>

</nav>

<div class="row g-0 text-center">
  <div class="col-sm-6 col-md-8">
  <div className="col">

  





    
          <div className="card border-0">
            <div className="card-body">


            <div className="col mt-2 border-0">
          <div className="card">
            <div className="card-body rounded-5">
            <h1><b><span>{HB}</span><span> bpm</span></b></h1>
              <button className="btn btn-dark" type="button" disabled>
<span className="spinner-grow spinner-grow-sm text-danger" role="status" aria-hidden="true"></span>
<span className="ms-1 fw-bold">Live</span>
</button>
            <Heartbeatchart/>

            </div>
          </div>
        </div>


            </div>
          </div>
        </div>
  </div>
  <div class="col-6 col-md-4">
        <div className="col mt-3 me-2">
          <div className="card">
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
      <br/> <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>



      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/js/bootstrap.bundle.min.js" integrity="sha384-qKXV1j0HvMUeCBQ+QVp7JcfGl760yU08IQ+GpUo5hlbpg51QRiuqHAJz8+BrxE/N" crossOrigin="anonymous"></script>
      </div>
      </div>
      
  
    )
  }
  export default Medical 
