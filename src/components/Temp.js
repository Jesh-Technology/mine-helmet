import React,{useState,useEffect} from 'react'
import database from '../server/firebase';
import { FaThermometerHalf } from 'react-icons/fa';
import styles from './css/Temp.module.css'
function Temp({path,unit}) {
  const [State, setState] = useState();


  useEffect(() => {
    
    database.ref().child(path).on('value',(snapshot)=>{
      const Tdata = snapshot.val()
      setState(Tdata)
    });

  
    
  }, [path])
  
  
  
  return (
    <div className={styles.temperaturewidget}>
        <div className={styles.temperature}>
          <FaThermometerHalf className={styles.thermometericon }/>
          <div className={styles.temperaturevalue}>{State}{unit}</div>
        </div>
        <div className={styles.location}>Kolar Gold Fields</div>
        <div className={styles.description}>Yet To Be Added</div>
        {/* <img src={} alt={} className="icon" /> */}
      </div>
    
    
  )
}

export default Temp