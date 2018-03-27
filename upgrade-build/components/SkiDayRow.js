import Terrain from 'react-icons/lib/md/terrain'
import Snow from 'react-icons/lib/ti/weather-snow'
import Calander from 'react-icons/lib/fa/calendar'

export const SkiDayRow = (props)=>
(
    <tr>
            <td>
                {props.num}
            </td>
        <td>
            {props.day.date}
        </td>
        <td>
            {props.day.resort}
        </td>
        <td>
            { (props.day.powder) ? <Snow/> : null}
        </td>
        <td>
            { (props.day.backcountry) ? <Terrain/> : null }
        </td>

    </tr>
)