// @flow

import React from 'react'
import { trackIds, tracks, categoryColorScale } from '../constants'
import type { MilestoneMap, TrackId } from '../constants'

type Props = {
  milestoneByTrack: MilestoneMap,
  focusedTrackId: TrackId,
  setFocusedTrackIdFn: (TrackId) => void
}

class TrackSelector extends React.Component<Props> {
  render() {
    return (
      <table>
        <style jsx>{`
          table {
            width: 100%;
            border-spacing: 3px;
            border-bottom: 2px solid #ccc;
            padding-bottom: 20px;
            margin-bottom: 20px;
            margin-left: -3px;
          }
          .track-selector-value {
            line-height: 50px;
            width: 50px;
            text-align: center;
            background: #e35205;
            font-size: 18px;
            cursor: pointer;
            color: #fff;
          }
          .track-selector__selected {
            color: #fff;
            border: 2px solid #000;
            background: #07a69b;
            line-height: 50px;
            width: 50px;
            text-align: center;
            font-size: 18px;
            border-radius: 3px;
            cursor: pointer;
          }
          .track-selector-label {
            text-align: center;
            font-size: 16px;
            padding:7px;
          }
        `}</style>
        <tbody>
          <tr>
            {trackIds.map(trackId => (
              <td key={trackId} className="track-selector-label" onClick={() => this.props.setFocusedTrackIdFn(trackId)}>
                {tracks[trackId].displayName}
              </td>
            ))}
          </tr>
          <tr>
            {trackIds.map(trackId => (
              <td key={trackId}
                className={trackId == this.props.focusedTrackId ? 'track-selector__selected' : 'track-selector-value'}
                onClick={() => this.props.setFocusedTrackIdFn(trackId)}>
                Level {this.props.milestoneByTrack[trackId]}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    )
  }
}

export default TrackSelector
