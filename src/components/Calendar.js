import React from 'react'
import moment from 'moment'

const Calendar = () => {

    function getDays(monthMoment){
        console.log(":HELALD")
        console.log(moment().startOf('year'))
  
    }

    function show(){
        getDays()
    }
  return (
    <div>
        Calendar
        <button onClick={show}>SHow</button>
    </div>
  )
}

export default Calendar