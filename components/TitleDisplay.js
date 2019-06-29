// @flow

import React from 'react'
import { eligibleTitles } from '../constants'
import type { MilestoneMap } from '../constants'

type Props = {
  milestoneByTrack: MilestoneMap,
  currentTitle: String,
  setTitleFn: (string) => void
}

class TitleDisplay extends React.Component {
  render() {
    const titles = eligibleTitles(this.props.milestoneByTrack)
    return <div>
      Available roles based on your experience:
      <ul>
        {titles.map(title => (
          <li>
            {title}
          </li>
        ))}
      </ul>
    </div>
  }
}

export default TitleDisplay
