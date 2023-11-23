import React, { useState } from "react";
import styles from './Calendar.module.css'
import CalendarHeader from "./CalendarHeader";
import CalendarBody from "./CalendarBody";
import CommentsLoader from "./Comments";

function Calendar() {
    const [startDate, setStartDate] = useState(new Date())
    return(
      <div className={styles.container}>
        <CalendarHeader startDate={startDate}/>
        <CalendarBody startDate={startDate}/>
        {/* <CommentsLoader/> */}
      </div>
    )
}

export default Calendar;