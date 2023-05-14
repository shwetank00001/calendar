import React from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'


const Comp = () => {

    const [data, setData] = React.useState(new Date())

  return (
    <div>
        <Calendar onChange={setData} value={data} />
    </div>
  )
}

export default Comp