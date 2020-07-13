// @flow

import { tracks, milestones, categoryColorScale, milestoneToPoints } from '../constants'
import React from 'react'
import type { MilestoneMap, TrackId, Milestone } from '../constants'
import NewExample from './NewExample';

type Props = {
  milestoneByTrack: MilestoneMap,
  trackId: TrackId,
  handleTrackMilestoneChangeFn: (TrackId, Milestone) => void
}

class Track extends React.Component<Props> {
  shuffle(array) {
    var ctr = array.length, temp, index;

    // While there are elements in the array
    while (ctr > 0) {
      // Pick a random index
      index = Math.floor(Math.random() * ctr);
      // Decrease ctr by 1
      ctr--;
      // And swap the last element with it
      temp = array[ctr];
      array[ctr] = array[index];
      array[index] = temp;
    }
    return array;
  }

  shuffleExamples(examples) {
    var exampleArray = examples.split("<br/>").filter(s => s != "");
    var shuffledArray = this.shuffle(exampleArray.slice(0, 5));

    return shuffledArray.join("</br>");
  }

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
          .title {
            position: sticky;
            top: 75px;
            background: #fff;
            padding-bottom: 0;
            margin-bottom: 2rem;
          }
          .title:after {
            content: '';
            position: absolute;
            bottom: -2rem;
            width: 100%;
            height: 2rem;
            display: block;
            background: linear-gradient(to bottom, #ffffff, rgba(255,255,255,0));
          }
          h2 {
            margin: 0 0 10px 0;
          }
          p.track-description {
            margin-top: 0;
            padding-bottom: 20px;
            border-bottom: 2px solid #ccc;
          }
          p.summary {
            color: #111;
            border-left: 7px solid #ffee00bb;
            padding-left: 10px;
            background: #ffee0028;
            padding-top: 0.25em;
            padding-bottom: 0.25em;
            margin-bottom: 1.25em;
          }
          p.examples-title {
            padding-bottom: 0.25em;
            color: #666;
          }
          p.examples {
            padding-left: 15px;
            line-height: 1.5em;
          }
          table {
            border-spacing: 3px;
          }
          td {
            line-height: 40px;
            width: 70px;
            padding: 10px;
            text-align: center;
            background: #eee;
            font-size: 16px;
            cursor: pointer;
          }
          td:hover {
            background: #e3520544;
          }
          .td__selected {
            color: #000;
            background: #e35205;
            color: #fff;
          }
          .td__selected:hover {
            background: #e35205;
          }

          ul {
            line-height: 1.5em;
          }

        `}</style>

        <h2 className="title" title={track.movieQuote}>{track.displayName}</h2>

        <p style={{ marginLeft: 20 }} dangerouslySetInnerHTML={{ __html: track.description }}></p>

        <div style={{ display: 'flex', marginTop: 25 }}>
          <table style={{ flex: 0, marginRight: 50 }}>
            <tbody>
              {milestones.slice().reverse().map((milestone) => {
                const isMet = milestone <= currentMilestoneId
                return milestone == 0 ? undefined : (
                  <tr key={milestone}>
                    <td onClick={() => this.props.handleTrackMilestoneChangeFn(this.props.trackId, milestone)}
                      className={milestone === currentMilestoneId ? 'td__selected' : (isMet ? '' : 'td__unmet')}>
                      {milestone}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
          {currentMilestone ? (
            <div style={{ flex: 1 }}>
              <h4>Level {currentMilestoneId} Core</h4>
              <p className="summary" dangerouslySetInnerHTML={{ __html: currentMilestone.signals }}></p>
              <p className="examples-title">Examples</p>
              <p className="examples" dangerouslySetInnerHTML={{ __html: this.shuffleExamples(currentMilestone.examples) }}></p>
              <h4>Level {currentMilestoneId} Advanced</h4>
              <p className="summary" dangerouslySetInnerHTML={{ __html: currentMilestone.advSignals }}></p>
              <p className="examples-title">Examples</p>
              <p className="examples" dangerouslySetInnerHTML={{ __html: this.shuffleExamples(currentMilestone.advExamples) }}></p>

              <NewExample skill={track.displayName} level={currentMilestoneId} />
            </div>

          ) : null}
        </div>

      </div >
    )
  }
}

export default Track
