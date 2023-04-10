import React,{useState,useEffect} from 'react'
import database from '../server/firebase';
import { FaHandHoldingWater } from 'react-icons/fa';
import styles from './css/Humid.module.css'
function Humid({path,unit}) {
  const [State, setState] = useState();

  useEffect(() => {
    
    database.ref().child(path).on('value',(snapshot)=>{
      const Tdata = snapshot.val()
      setState(Tdata)
    });

  
    
  }, [path])
  
  
  return (
    <div className={styles.Humiditywidget}>
        <div className={styles.Humidity}>
          <FaHandHoldingWater className={styles.Humidityicon }/>
          <div className={styles.Humidityvalue}>{State}{unit}</div>
        </div>
        <div className={styles.location}>Kolar Gold Fields</div>
        <div className={styles.description}>Yet to be added</div>
        {/* <img src={} alt={} className="icon" /> */}
      </div>
    
    
  )
}

export default Humid