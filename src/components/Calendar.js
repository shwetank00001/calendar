import React from 'react'
import moment from 'moment'

const Calendar = () => {

    function getDays(monthMoment){
        console.log(":HELALD")
        const monthCopy = moment().startOf('month')
        // console.log(monthCopy)
  
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