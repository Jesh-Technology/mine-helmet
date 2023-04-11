import React,{useState,useEffect} from 'react'
import database from '../server/firebase';
import {  FaWater } from 'react-icons/fa';
function bt({path,unit}) {
  const [State, setState] = useState();

  useEffect(() => {
    
    database.ref().child(path).on('value',(snapshot)=>{
      const Tdata = snapshot.val()
      setState(Tdata)
    });

  
    
  }, [path])
  
  
  return (
    <div className={styles.btwidget}>
        <div className={styles.bt}>
          <FaWater className={styles.bticon} />
          <div className={styles.btvalue}>{State}{unit}</div>
        </div>
        <div className={styles.location}>Kolar Gold Fields</div>
        <div className={styles.description}>Yet to be added</div>
        {/* <img src={} alt={} className="icon" /> */}
      </div>
    
    
  )
}

export default bt