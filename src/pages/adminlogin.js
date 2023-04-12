
import database from "@/server/firebase";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

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
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value.toString())}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value.toString())}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    )
  }
export default Adminlogin