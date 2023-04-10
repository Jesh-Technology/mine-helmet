import React from 'react';
import Tempchart from '@/components/Tempchart';
import Gaschart from '@/components/Gaschart';
import Humidchart from '@/components/Humichart';

export default function ChartComponent() {
 

  return (
  <div>

<Tempchart/>
<Gaschart/>
<Humidchart/>
  </div>
  )
}