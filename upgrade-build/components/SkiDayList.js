import Terrain from 'react-icons/lib/md/terrain'
import Snow from 'react-icons/lib/ti/weather-snow'
import Calander from 'react-icons/lib/fa/calendar'
import {SkiDayRow} from "./SkiDayRow";

export const SkiDayList = (props) => (
     <table border="2">
         <tbody>
         {
             props.days.map((day, i )=> (
                 <SkiDayRow num={i}
                            key={i}
                            day={day}
                 />
             ))
         }
         </tbody>
     </table>
)
