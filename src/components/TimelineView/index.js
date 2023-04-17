// Write your code here
import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props
  const items = timelineItemsList.map(itemObj => ({
    title: itemObj.title,
  }))

  return (
    <div className="timeline_chrono_container">
      <h1 className="timeline_main_heading">
        MY JOURNEY OF <br />
        CCBP 4.0
      </h1>
      <Chrono items={items} mode="VERTICAL_ALTERNATING">
        {timelineItemsList.map(eachItem => {
          if (eachItem.categoryId === 'COURSE') {
            return <CourseTimelineCard key={eachItem.id} details={eachItem} />
          }
          return <ProjectTimelineCard key={eachItem.id} details={eachItem} />
        })}
      </Chrono>
    </div>
  )
}

export default TimelineView
