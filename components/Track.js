// @flow

import { tracks, milestones, categoryColorScale, milestoneToPoints } from '../constants'
import React from 'react'
import type { MilestoneMap, TrackId, Milestone } from '../constants'

type Props = {
  milestoneByTrack: MilestoneMap,
  trackId: TrackId,
  handleTrackMilestoneChangeFn: (TrackId, Milestone) => void
}

class Track extends React.Component<Props> {
  showComingSoonMessage() {
    alert("Coming soon!");
  }

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
    var exampleArray = examples.split("<br/>");
    var shuffledArray = this.shuffle(exampleArray.slice(0,5));

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

        <h2 title={track.movieQuote}>{track.displayName}</h2>

        <p style={{ marginLeft: 20}} dangerouslySetInnerHTML={{ __html: track.description }}></p>
   
        <div style={{display: 'flex', marginTop:25}}>
          <table style={{flex: 0, marginRight: 50}}>
            <tbody>
              {milestones.slice().reverse().map((milestone) => {
                const isMet = milestone <= currentMilestoneId
                return milestone == 0 ? undefined : (
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
              <h4 dangerouslySetInnerHTML={{ __html: currentMilestone.signals }}></h4>
              <h5>Examples</h5>
              <p style={{marginLeft:15}} dangerouslySetInnerHTML={{ __html: this.shuffleExamples(currentMilestone.examples) }}></p>
            
              <h4 dangerouslySetInnerHTML={{ __html: currentMilestone.advSignals }}></h4> 
              <h5>Examples <i style={{fontSize:12}}>(Advanced)</i></h5>
              <p style={{marginLeft:15}} dangerouslySetInnerHTML={{ __html: this.shuffleExamples(currentMilestone.advExamples) }}></p>


              <button className="button" onClick={this.showComingSoonMessage}>Suggest an example</button>
            </div>
            
          ) : null}
        </div>
        
      </div>
    )
  }
}

export default Track
