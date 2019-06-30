// @flow

import { tracks, milestones, categoryColorScale } from '../constants'
import React from 'react'
import type { MilestoneMap, TrackId, Milestone } from '../constants'

type Props = {
  milestoneByTrack: MilestoneMap,
  trackId: TrackId,
  handleTrackMilestoneChangeFn: (TrackId, Milestone) => void
}

class Track extends React.Component<Props> {
  render() {
    const track = tracks[this.props.trackId]
    const currentMilestoneId = this.props.milestoneByTrack[this.props.trackId]
    const currentMilestone = track.milestones[currentMilestoneId - 1]
    return (
      <div className="track">
        <style jsx>{`
          div.track {
            margin: 0 0 20px 0;
            padding-bottom: 20px;
            padding-top: 20px;
            border-bottom: 2px solid #ccc;
            border-top: 2px solid #ccc;
          }
          h2 {
            margin: 0 0 10px 0;
          }
          p.track-description {
            margin-top: 0;
            padding-bottom: 20px;
            border-bottom: 2px solid #ccc;
          }
          table {
            border-spacing: 3px;
          }
          td {
            line-height: 50px;
            width: 70px;
            padding:5px;
            text-align: center;
            background: #e35205;
            color: #fff;
            font-size: 16px;
            cursor: pointer;
          }
          .td__selected {
            color: #000;
            border: 2px solid #e35205;
            background: #fff;
          }

          .td__unmet {
            color: #000;
            background: #eee;
          }

          ul {
            line-height: 1.5em;
          }
        `}</style>
        <h2>{track.displayName}</h2>
        <p style={{ marginLeft: 20}} dangerouslySetInnerHTML={{ __html: track.description }}></p>
        <div style={{display: 'flex', marginTop:25}}>
          <table style={{flex: 0, marginRight: 50}}>
            <tbody>
              {milestones.slice().reverse().map((milestone) => {
                const isMet = milestone <= currentMilestoneId
                return milestone == 0 ? '' : (
                  <tr key={milestone}>
                    <td onClick={() => this.props.handleTrackMilestoneChangeFn(this.props.trackId, milestone)}
                      className={ milestone === currentMilestoneId ? 'td__selected' : (isMet ? '' : 'td__unmet')}>
                      {milestone}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
          {currentMilestone ? (
            <div style={{flex: 1}}>
              <h3>{currentMilestone.summary}</h3>
              <h4>Basic behaviors:</h4>
              <ul>
                {currentMilestone.signals.map((signal, i) => (
                  <li key={i}>{signal}</li>
                ))}
              </ul>
              <h4>Basic examples:</h4>
              <ul>
                {currentMilestone.examples.map((example, i) => (
                  <li key={i}>{example}</li>
                ))}
              </ul>
              <h3>{currentMilestone.advSummary}</h3>
              <h4>Advanced behaviors:</h4>
              <ul>
                {currentMilestone.advSignals.map((signal, i) => (
                  <li key={i}>{signal}</li>
                ))}
              </ul>
              <h4>Advanced examples:</h4>
              <ul>
                {currentMilestone.advExamples.map((example, i) => (
                  <li key={i}>{example}</li>
                ))}
              </ul>

            </div>
          ) : null}
        </div>
      </div>
    )
  }
}

export default Track
