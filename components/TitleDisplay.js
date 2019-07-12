// @flow

import React from 'react'
import { eligibleTitles, approximateCareerLevel } from '../constants'
import type { MilestoneMap } from '../constants'

type Props = {
  milestoneByTrack: MilestoneMap,
  currentTitle: String,
  setTitleFn: (string) => void
}

class TitleDisplay extends React.Component {
  render() {
    const titles = eligibleTitles(this.props.milestoneByTrack);
    const careerLevels = approximateCareerLevel(this.props.milestoneByTrack);
    return <div>
      <style jsx>{`
        ul {
          line-height: 1.5em;
        }
        li {
          font-size: 16px;
        }
      `}</style>
      <h2>Available roles based on your experience</h2>
      <ul>
        {titles.map(title => (
          <li>
            {title}
          </li>
        ))}
      </ul>
      <h2>Approximate career level</h2>
      {careerLevels[careerLevels.length - 1]}
    </div>
  }
}

export default TitleDisplay
