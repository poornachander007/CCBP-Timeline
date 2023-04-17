// Write your code here
import './index.css'
import {AiFillClockCircle} from 'react-icons/ai'

const CourseTimelineCard = props => {
  const {details} = props
  const {courseTitle, description, duration, tagsList} = details
  return (
    <div className="course_card_container">
      <div className="heading_container">
        <h1 className="courseTitle">{courseTitle}</h1>
        <p className="duration">
          <AiFillClockCircle className="clock_icon" /> {duration}
        </p>
      </div>
      <p className="description">{description}</p>
      <ul className="ul_tagsList_container">
        {tagsList.map(item => (
          <p key={item.id} className="li_item">
            {item.name}
          </p>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
