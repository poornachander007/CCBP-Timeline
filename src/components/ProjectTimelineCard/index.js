// Write your code here
import './index.css'
import {AiFillCalendar} from 'react-icons/ai'

const ProjectTimelineCard = props => {
  const {details} = props
  const {projectTitle, description, imageUrl, duration, projectUrl} = details

  return (
    <div className="project_card_container">
      <img className="project_image" src={imageUrl} alt="project" />
      <div className="heading_container">
        <h1 className="projectTitle">{projectTitle}</h1>
        <p className="duration">
          <AiFillCalendar className="Calendar_icon" />
          {duration}
        </p>
      </div>
      <p className="description">{description}</p>
      <a className="projectUrl" href={projectUrl}>
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
