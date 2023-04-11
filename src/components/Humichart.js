import { useRef, useEffect, useState } from 'react';
import Chart from 'chart.js/auto';
import styles from './css/Chart.module.css'
import database from '@/server/firebase';

export default function Humidchart() {
  const canvasRef = useRef(null);
  const [chart, setChart] = useState(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Initialize Firebase app and database
    // ...

    // Listen for Humid data changes in Firebase
    const HumidRef=database.ref("DHT/humidity");
    HumidRef.on('value',(snapshot)=>{
        const Humid = snapshot.val()
        if (!chart) {
            const initialChart = new Chart(ctx, {
              type: 'line',
              data: {
                labels: [],
                datasets: [
                  {
                    label: 'Humid',
                    data: [],
                    backgroundColor: '#ff4d00',
                    borderColor: '#ff4d00',
                    borderWidth: 1,
                  },
                ],
              },
              options: {
                scales: {
                  xAxes: [
                    {
                      type: 'time',
                      time: {
                        displayFormats: {
                          second: 'h:mm:ss a',
                        },
                      },
                    },
                  ],
                },
              },
            });
      
            setChart(initialChart);
          } else {
            chart.data.labels.push(new Date().toLocaleTimeString());
            chart.data.datasets[0].data.push(Humid);
            chart.update();
          }
      
    })
    // ...

    // Create or update the chart
    
    // Clean up
    return () => {
      HumidRef.off();
      if (chart) {
        chart.destroy();
      }
    };
  }, [chart]);
 
  

  return (
  
  <div className={styles.parent} >
    
    <canvas ref={canvasRef} /></div>);
}