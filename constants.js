// @flow
import * as d3 from 'd3'

export type TrackId = 'COMM_PERSONAL' | 'PROB_CRIT' | 'LEAD_PER_EFF' | 'COMM_FINANCE' | 'ADAPT_RESIL' | 'CREATIVITY_INNO'
export type Milestone = 0 | 1 | 2 | 3 | 4 | 5

export type MilestoneMap = {
  'COMM_PERSONAL': Milestone,
  'PROB_CRIT': Milestone,
  'LEAD_PER_EFF': Milestone,
  'COMM_FINANCE': Milestone,
  'ADAPT_RESIL': Milestone,
  'CREATIVITY_INNO': Milestone
}
export const milestones = [0, 1, 2, 3, 4, 5]

export const milestoneToPoints = (milestone: Milestone): number => {
  switch (milestone) {
    case 0: return 0
    case 1: return 1
    case 2: return 2
    case 3: return 3
    case 4: return 4
    case 5: return 5
    default: return 0
  }
}

export const maxLevel = 135

export type Track = {
  displayName: string,
  category: string, // TK categoryId type?
  description: string,
  movieQuote: string,
  milestones: {
    summary: string,
    advSummary: string,
    signals: string[],
    examples: string[],
    advSignals: string[],
    advExamples: string[]
  }[]
}

type Tracks = {|
  'COMM_PERSONAL': Track,
  'PROB_CRIT': Track,
  'LEAD_PER_EFF': Track,
  'COMM_FINANCE': Track,
  'ADAPT_RESIL': Track,
  'CREATIVITY_INNO': Track
  |}

let dataFile = require('./tracks.json');

export const tracks: Tracks = {
  "COMM_PERSONAL": dataFile[0],
  "PROB_CRIT": dataFile[1],
  "LEAD_PER_EFF": dataFile[2],
  "COMM_FINANCE": dataFile[3],
  "ADAPT_RESIL": dataFile[4],
  "CREATIVITY_INNO": dataFile[5]
}

export const trackIds: TrackId[] = Object.keys(tracks)

export const categoryIds: Set<string> = trackIds.reduce((set, trackId) => {
  set.add(tracks[trackId].category)
  return set
}, new Set())

export const categoryPointsFromMilestoneMap = (milestoneMap: MilestoneMap) => {
  let pointsByCategory = new Map()
  trackIds.forEach((trackId) => {
    const milestone = milestoneMap[trackId]
    const categoryId = tracks[trackId].category
    let currentPoints = pointsByCategory.get(categoryId) || 0
    pointsByCategory.set(categoryId, currentPoints + milestoneToPoints(milestone))
  })
  return Array.from(categoryIds.values()).map(categoryId => {
    const points = pointsByCategory.get(categoryId)
    return { categoryId, points: pointsByCategory.get(categoryId) || 0 }
  })
}

export const totalPointsFromMilestoneMap = (milestoneMap: MilestoneMap): number =>
  trackIds.map(trackId => milestoneToPoints(milestoneMap[trackId]))
    .reduce((sum, addend) => (sum + addend), 0)

export const categoryColorScale = d3.scaleOrdinal()
  .domain(categoryIds)
  .range(['#E35205', '#E35205', '#E35205', '#E35205'])

export const advocateLevels = [2,2,2,2,2,2];


export const titles = [
  { label: 'Advocate', minPoints: 0, minLevels: 2 },
  { label: 'Engineer', minPoints: 0, minLevels: 1 },
  { label: 'Technical Lead', minPoints: 0, minLevels: 3 }
]

export const consultantLevels = [
  { label: 'Associate Consultant', minLevels: 1, minPoints:0 },
  { label: 'Consultant', minLevels: 1, minPoints:12 },
  { label: 'Senior Consultant', minLevels: 2, minPoints:18 },
  { label: 'Principal Consultant', minLevels: 3, minPoints:24 },
]

export const getMinLevel = (milestoneMap: MilestoneMap): number => {
  return Math.min(...trackIds.map(trackId => milestoneMap[trackId]))
}

export const approximateCareerLevel = (milestoneMap: MilestoneMap): string[] => {
   const totalPoints = totalPointsFromMilestoneMap(milestoneMap)
   const minLevel = getMinLevel(milestoneMap)

   return consultantLevels.filter(consultantLevel => (consultantLevel.minPoints === undefined || totalPoints >= consultantLevel.minPoints)
    && (consultantLevel.minLevels <= minLevel))
    .map(consultantLevel => consultantLevel.label)

}

export const eligibleTitles = (milestoneMap: MilestoneMap): string[] => {
  const totalPoints = totalPointsFromMilestoneMap(milestoneMap)
  const minLevel = getMinLevel(milestoneMap)

  return titles.filter(title => (title.minPoints === undefined || totalPoints >= title.minPoints)
    && (title.maxPoints === undefined || totalPoints <= title.maxPoints) && (title.minLevels <= minLevel))
    .map(title => title.label)
}
