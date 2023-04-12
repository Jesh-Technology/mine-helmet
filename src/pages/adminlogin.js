
import database from "@/server/firebase";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Head from 'next/head';
import Link from "next/link"
import Script from "next/script"

function Adminlogin() {
    const [AUTH, setAUTH] = useState()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const router = useRouter()
  
    useEffect(() => {
      database.ref("AUTH").on('value',(snapshot)=>{
        setAUTH(snapshot.val())
      })
      if(AUTH==1){
        router.push('/')
      }
    }, [AUTH, router])
  
    const ss = "saisrikanth@magnatite.com"  
    const s = "shabin@magnatite.com"
    const sp = "sreeparvathi@magnatite.com"
    const ms = "mithunshanker@magnatite.com"   
    const as = "anishkasam@magnatite.com"
    const ssc = "saisrikanth@123" 
    const sc  = "shabin@123"
    const spc = "sreeparvathi@123"
    const msc = "mithunshanker@123"
    const asc = "anishkasam@123"
  
    const handleSubmit = () => {
      if ((email == ss || email == s || email == sp || email == ms || email == as) && (password == ssc || password == sc || password == spc || password == msc || password == asc)) {
        database.ref("/AUTH").set(1).then(() =>
          router.push('/')
        )
      }
    }
  
    return (

      <div class="bg-dark" data-bs-theme="dark" style={{"backgroundColor":"#212529"}}>
      <Head>
        <title>Home</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-aFq/bzH65dt+w6FI2ooMVUpc+21e0SRygnTpmBvdBgSdnuTN7QbdgL+OapgHtvPp" crossorigin="anonymous"/>
  
      </Head>
      <div style={{"backgroundColor":"#212529"}}>
      <main class="form-signin">
      <nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand mx-auto fw-bolder" href="#">
      Magnatite
    </a>
  </div>
</nav>
      <form onSubmit={handleSubmit} class="m-4">
        <div class="form-box mx-auto " style={{"width":"25%","height":"100%"}}>
          <div class="form-floating mb-3">
            <input class="form-control shadow-none" autocomplete="off" required type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value.toString())} placeholder="E-mail"/>
            <label class="text-secondary fw-bold" for="floatingInput">Email address</label>
          </div>

          <div class="form-floating">
            <input class="form-control shadow-none" autocomplete="off" required type="password" id="password" value={password} onChange={(event) => setPassword(event.target.value.toString())} placeholder="Password"/>
            <label class="text-secondary fw-bold" for="floatingPassword">Password</label>
          </div>
          <div class="d-grid gap-2 my-3">
  <button class="btn btn-primary btn-lg fw-bold" type="submit">Login</button>
</div>
        </div>
        </form>
      </main>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/js/bootstrap.bundle.min.js" integrity="sha384-qKXV1j0HvMUeCBQ+QVp7JcfGl760yU08IQ+GpUo5hlbpg51QRiuqHAJz8+BrxE/N" crossOrigin="anonymous"></script>


</div>
</div>



















      // <form onSubmit={handleSubmit}>
      //   <div>
      //     <label htmlFor="email">Email:</label>
      //     <input
      //       type="email"
      //       id="email"
      //       value={email}
      //       onChange={(event) => setEmail(event.target.value.toString())}
      //     />
      //   </div>
      //   <div>
      //     <label htmlFor="password">Password:</label>
      //     <input
      //       type="password"
      //       id="password"
      //       value={password}
      //       onChange={(event) => setPassword(event.target.value.toString())}
      //     />
      //   </div>
      //   <button type="submit">Submit</button>
      // </form>
    )
  }
export default Adminlogin
