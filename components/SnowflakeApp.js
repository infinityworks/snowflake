// @flow

import TrackSelector from '../components/TrackSelector'
import NightingaleChart from '../components/NightingaleChart'
import KeyboardListener from '../components/KeyboardListener'
import Track from '../components/Track'
import { eligibleTitles, trackIds, milestones, milestoneToPoints } from '../constants'
import type { Milestone, MilestoneMap, TrackId } from '../constants'
import React from 'react'
import TitleSelector from '../components/TitleSelector'
import Helmet from 'react-helmet'


type SnowflakeAppState = {
  milestoneByTrack: MilestoneMap,
  name: string,
  title: string,
  focusedTrackId: TrackId,
}

const hashToState = (hash: String): ?SnowflakeAppState => {
  if (!hash) return null
  const result = defaultState()
  const hashValues = hash.split('#')[1].split(',')
  if (!hashValues) return null
  trackIds.forEach((trackId, i) => {
    result.milestoneByTrack[trackId] = coerceMilestone(Number(hashValues[i]))
  })
  if (hashValues[16]) result.name = decodeURI(hashValues[16])
  if (hashValues[17]) result.title = decodeURI(hashValues[17])
  return result
}

const coerceMilestone = (value: number): Milestone => {
  // HACK I know this is goofy but i'm dealing with flow typing
  switch (value) {
    case 0: return 0
    case 1: return 1
    case 2: return 2
    case 3: return 3
    case 4: return 4
    case 5: return 5
    default: return 0
  }
}

const emptyState = (): SnowflakeAppState => {
  return {
    name: '',
    title: '',
    milestoneByTrack: {
      'COMM_PERSONAL': 0,
      'PROB_CRIT': 0,
      'LEAD_PER_EFF': 0,
      'COMM_FINANCE': 0,
      'ADAPT_RESIL': 0,
      'CREATIVITY_INNO': 0
    },
    focusedTrackId: 'COMM_PERSONAL'
  }
}

const defaultState = (): SnowflakeAppState => {
  return {
    name: 'Tamas Infinite',
    title: 'Senior Consultant',
    milestoneByTrack: {
      'COMM_PERSONAL': 1,
      'PROB_CRIT': 3,
      'LEAD_PER_EFF': 3,
      'COMM_FINANCE': 3,
      'ADAPT_RESIL': 4,
      'CREATIVITY_INNO': 2
    },
    focusedTrackId: 'COMM_PERSONAL'
  }
}

const stateToHash = (state: SnowflakeAppState) => {
  if (!state || !state.milestoneByTrack) return null
  const values = trackIds.map(trackId => state.milestoneByTrack[trackId]).concat(encodeURI(state.name), encodeURI(state.title))
  return values.join(',')
}

type Props = {}

class SnowflakeApp extends React.Component<Props, SnowflakeAppState> {
  constructor(props: Props) {
    super(props)
    this.state = emptyState()
  }

  componentDidUpdate() {
    const hash = stateToHash(this.state)
    if (hash) window.location.replace(`#${hash}`)
  }

  componentDidMount() {
    const state = hashToState(window.location.hash)
    if (state) {
      this.setState(state)
    } else {
      this.setState(defaultState())
    }
  }

  render() {
    return (
      <main>
        <Helmet>
          <meta charSet="utf-8" />
          <title>IW Snowflake v0.1</title>
          <link rel="canonical" href="http://mysite.com/example" />
          <link rel="icon" type="image/png" href="/static/favicon.ico" />
          <link href="/static/css/print/print.css" rel="stylesheet" media="print" type="text/css" />
          <link href="/static/css/main/core.css" rel="stylesheet" type="text/css" />
        </Helmet>

        <header id="header" class="site-header nav-dark">
          <div class="container">
            <div class="row">
              <div class="col bpxxs-col-12 bps-col-3 bpm-off-col-0 bpm-col-3 bpl-off-col-1 bpl-col-3">
                <div class="site-header__logo">
                  <a class="site-header__link" href="/">
                    <h1 class="h2 site-header__logo">Infinity Works</h1>
                  </a>
                </div>
              </div>

              {/* <div class="col bps-col-3 bpm-off-col-0 bpm-col-3 bpl-off-col-1 bpl-col-3">
                <input
                    type="text"
                    className="name-input"
                    value={this.state.name}
                    onChange={e => this.setState({ name: e.target.value })}
                    placeholder="Name"
                  />
              </div> */}

            </div>
          </div>
        </header>

        <div id="main-content" style={{height:1200}}>
          <section id="section2" class="section2__container">
            <div class="container" >
              <div class="row section2">
                <div style={{ paddingTop: 70 }}>
                  <div>
                    <TitleSelector
                      milestoneByTrack={this.state.milestoneByTrack}
                      currentTitle={this.state.title}
                      setTitleFn={(title) => this.setTitle(title)} />
                  </div>
                  <div>
                    <NightingaleChart
                      milestoneByTrack={this.state.milestoneByTrack}
                      focusedTrackId={this.state.focusedTrackId}
                      handleTrackMilestoneChangeFn={(track, milestone) => this.handleTrackMilestoneChange(track, milestone)} />
                  </div>
                </div>

                <TrackSelector
                  milestoneByTrack={this.state.milestoneByTrack}
                  focusedTrackId={this.state.focusedTrackId}
                  setFocusedTrackIdFn={this.setFocusedTrackId.bind(this)} />
                <KeyboardListener
                  selectNextTrackFn={this.shiftFocusedTrack.bind(this, 1)}
                  selectPrevTrackFn={this.shiftFocusedTrack.bind(this, -1)}
                  increaseFocusedMilestoneFn={this.shiftFocusedTrackMilestoneByDelta.bind(this, 1)}
                  decreaseFocusedMilestoneFn={this.shiftFocusedTrackMilestoneByDelta.bind(this, -1)} />
                <Track
                  milestoneByTrack={this.state.milestoneByTrack}
                  trackId={this.state.focusedTrackId}
                  handleTrackMilestoneChangeFn={(track, milestone) => this.handleTrackMilestoneChange(track, milestone)} />
              </div>
            </div>
          </section>
        </div>

        <footer class="site-footer">
            <div class="container group">
              <div class="row no-bp-clear-2 bpxxs-clear-2 bpxs-clear-3 bpm-clear-6">
                            <div class="col no-bp-col-6 bpxs-col-4 bpm-off-col-1 bpm-col-2 ">
                              <p>
                                <span class="bold">Leeds (Head Office)</span>
                                Apsley House,
                                78 Wellington Street,
                                Leeds LS1 2EQ
                              </p>
                            </div>
              </div>
            </div>
        </footer>
      </main>
    )
  }

  handleTrackMilestoneChange(trackId: TrackId, milestone: Milestone) {
    const milestoneByTrack = this.state.milestoneByTrack
    milestoneByTrack[trackId] = milestone

    const titles = eligibleTitles(milestoneByTrack)
    const title = titles.indexOf(this.state.title) === -1 ? titles[0] : this.state.title

    this.setState({ milestoneByTrack, focusedTrackId: trackId, title })
  }

  shiftFocusedTrack(delta: number) {
    let index = trackIds.indexOf(this.state.focusedTrackId)
    index = (index + delta + trackIds.length) % trackIds.length
    const focusedTrackId = trackIds[index]
    this.setState({ focusedTrackId })
  }

  setFocusedTrackId(trackId: TrackId) {
    let index = trackIds.indexOf(trackId)
    const focusedTrackId = trackIds[index]
    this.setState({ focusedTrackId })
  }

  shiftFocusedTrackMilestoneByDelta(delta: number) {
    let prevMilestone = this.state.milestoneByTrack[this.state.focusedTrackId]
    let milestone = prevMilestone + delta
    if (milestone < 0) milestone = 0
    if (milestone > 5) milestone = 5
    this.handleTrackMilestoneChange(this.state.focusedTrackId, milestone)
  }

  setTitle(title: string) {
    let titles = eligibleTitles(this.state.milestoneByTrack)
    title = titles.indexOf(title) == -1 ? titles[0] : title
    this.setState({ title })
  }
}

export default SnowflakeApp
