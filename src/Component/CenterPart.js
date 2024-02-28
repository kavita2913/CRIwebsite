import React from 'react'
import Tools from '../Image/tools.png';

import './centerPart.css'
const CenterPart = () => {
    return (
        <div>
            <div className='centerpart'>
                <div className='para'>
                    <h5>
                        INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN
                        A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.
                    </h5>
                    <div className='image'>
                        <img src={Tools} />
                        <p>
                            Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors
                        </p>
                    </div>
                </div>
            </div>
            <div className='crl'>
                <h5>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h5>
                <h6>
CHEMICALS & PROCESS POWER WATER & WASTE WATER OILS & GAS PHARMA SUGARS & DISTILLERIES PAPER & PULP MARINE & DEFENCE METAL & MINING FOOD & BEVERAGE PETROCHEMICAL & REFINERIES SOLAR BUILDING HVAC FIRE FIGHTING AGRICULTURE & RESIDENTIAL

                </h6>
            </div>
        </div>
    )
}

export default CenterPart
