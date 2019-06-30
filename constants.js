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
    case 2: return 3
    case 3: return 6
    case 4: return 12
    case 5: return 20
    default: return 0
  }
}

export const maxLevel = 135

export type Track = {
  displayName: string,
  category: string, // TK categoryId type?
  description: string,
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

export const tracks: Tracks = {
  "COMM_PERSONAL": {
    "displayName": "Communication & Interpersonal skills",
    "category": "A",
    "description": `Being a great colleague and working effectively as part of a team </br>
    Being able to clearly articulate your view and share with others (and do this in an effective way) </br>
    Building relationships (at all levels, both internally and externally) </br>
    Using a range of communication mediums e.g. presentations, pitches, written comms (blogs) </br>
    Being able to influence </br>
    Giving and receiving feedback effectively </br>
    I speak up about things that aren't right e.g. inappropriate behaviour </br>
    Understanding when to escalate or ask for help`,

    "milestones": [{
      // ===== LEVEL 1
      "summary": "Delivering small routine tasks",
      "signals": [
        "Understands well-formed requirements",
        "Applies previous experience to solve similar problems",
        "Fills in minor gaps in specification, applying common sense",
        "Asks for help when stuck and able to follow through if given specific guidance"
      ],
      "examples": [
        "Take a well-understood user story through elaboration and implementation with minimal support",
        "Figures out what is being asked for without needing it to be spelled out in complete detail"
      ],
      "advSummary": "Delivering more challenging single tasks",
      "advSignals": [
        "Understands what needs to be done to deliver small tasks based on brief and vague requirements",
        "Uses novel combinations of previous experience to solve somewhat new problems",
        "Fills in more significant gaps in specification, applying common sense",
        "Asks for help when stuck and applies general guidance to specific problem"
      ],
      "advExamples": [
        "Infers missing requirements for a user story using a basic understanding of business need",
        "(Non-tech example to be added)"
      ],
    }, {
      // ===== LEVEL 2
      "summary": "Tackling larger tasks",
      "signals": [
        "Understands what needs to be done for larger tasks (e.g. taking several days) and thinks through them clearly without being daunted by the task",
        "Splits up the work into logical chunks and works through them systematically",
        "Challenges unclear or poorly-formed requirements and asks appropriate questions to get clarity on what's needed",
        "Starting to form opinions about how problems should be solved",
        "May identify specific issues at a company level without necessarily knowing how to solve them",
      ],
      "examples": [
        "Plays an active role in breaking down an epic into user stories",
        "Asks revealing questions of product owner when refining/elaborating a user story",
        "Takes responsibility for organising one aspect of the annual conference",
      ],
      "advSummary": "Taking ownership of larger tasks",
      "advSignals": [
        "Plays an active part in designing the solution to achieve the goals for larger tasks (e.g. taking several days)",
        "Has clear opinions which are applied when comparing solution options but may sometimes get blinkered and fail to adequately explore alteratives",
        "Proposes reasonable adjustments or alternatives to the given business requirements, when needed, to avoid spending undue effort on unimportant things",
        "Helps others understand tasks like this so they can deliver them effectively",
        "Involved with prioritising tasks and determining the best order to deliver them"
      ],
      "advExamples": [
        "Contributes to the technical design for an epic",
        "Leads the organising of a mini conference"
      ],
    }, {
      // ===== LEVEL 3
      "summary": "Establishing yourself as a valued consultant for the client",
      "signals": [
        "Can frame and communicate complex issues or situations and clearly articulate next steps",
        "Are able to organise and facilitate client meetings"
      ],
      "examples": [
        "Organise sessions with the team and client to discuss and decide on key topics"
      ],
      "advSummary": "Widening your client consultancy impact",
      "advSignals": [
        "Are able to tailor communication style to the audience e.g. level of detail, technical content etc.",
        "Can use facilitation techniques to help a group arrive at consensus or resolve issues"
      ],
      "advExamples": [
        "Provide information in an understandable format for both technical and non-technical audiences",
        "Use facilitation techniques to help keep workshops and meetings productive, e.g. set agenda, timebox discussions, set a goal for the meeting and don't let it end without a list of actions"
      ],
    }, {
      // ===== LEVEL 4
      "summary": "Taking on more client responsibility and influence",
      "signals": [
        "Are able to seamlessly transition between different types of communication styles based on stakeholder needs",
        "Have an engaging communication style",
      ],
      "examples": [
        "Use data to support people who are analytical in style, or storytelling for those who are more emotive",
        "Vary your approach and techniques dependent on the client situation"
      ],
      "advSummary": "Able to lead on consultancy engagements for clients",
      "advSignals": [
        "Are able to use emotional intelligence to guide behaviour"
      ],
      "advExamples": [
        "Read the situation and reactions of both yourself and others and adapt accordingly to aim for the best outcomes"
      ],
    }, {
      // ===== LEVEL 5
      "summary": "Taking on the lead role for a significant area",
      "signals": [
        "Are able to adapt communication style to work effectively with all levels, from C-level down",
      ],
      "examples": [
        " Tailor your communication and how you influence for different levels of client engagement, from board down",
        ],
        "advSummary": "Recognised as the go-to leader for your area",
        "advSignals": [
          "Are comfortable presenting clearly and confidently in high profile situations, acting as an ambassador for IW"
        ],
        "advExamples": [
          "Speak and network at large conferences",
          "Present and participate in client board meetings",
          "Facilitate challenging sessions with the aim of arriving at a clear outcome"
        ],
    }],
  },

  "PROB_CRIT": {
    "displayName": "Problem Solving & Critical Thinking",
    "category": "A",
    "description": "Develops expertise in web client technologies, such as HTML, CSS, and JavaScript",
    "milestones": [{
      "summary": "Works effectively within established web client architectures, following current best practices",
      "signals": [
        "Makes minor modifications to existing screens",
        "Fixes simple design quality issues",
        "Uses CSS appropriately, following style guide",
      ],
      "examples": [
        "Implemented sticky footer on the post page",
        "Hooked up the action to dismiss a post from a stream",
        "Built PaymentHistory screen using ResponseScreen",
      ],
    }, {
      "summary": "Develops new instances of existing architecture, or minor improvements to existing architecture",
      "signals": [
        "Makes sensible abstractions based on template and code patterns",
        "Specs and builds interactive components independently",
        "Prototypes simple new features quickly",
      ],
      "examples": [
        "Built credit card input component",
        "Created shared buttons template",
        "Built modal system",
      ],
    }, {
      "summary": "Designs major new features and demonstrates a nuanced understanding of browser constraints",
      "signals": [
        "Provides useful design feedback and suggests feasible alternatives",
        "Performs systemic tasks to significantly minimise bundle size",
        "Acts a caretaker for all of web client code",
      ],
      "examples": [
        "Designed font loading strategy for Medium",
        "Researched utility of service workers for Medium",
        "Designed and implemented ResponseScreen",
      ],
    }, {
      "summary": "Builds complex, reusable architectures that pioneer best practices and enable engineers to work more effectively",
      "signals": [
        "Pioneers architecture migrations that reduce programmer burden",
        "Implements complex UI transitions that bring delight",
        "Makes architectural decisions that eliminate entire classes of bugs",
      ],
      "examples": [
        "Designed Medium's post morpher and delta system",
        "Implemented Medium's scrolling text over image blur",
        "Designed and pioneered proto-based model storage",
      ],
    }, {
      "summary": "Is an industry-leading expert in web client or sets strategic web client direction for an eng team",
      "signals": [
        "Invents new techniques to innovate and overcome browser constraints",
        "Identifies and solved systemic problems with current architecture",
        "Defines a long-term vision for web client and ensures projects are in service of it",
      ],
      "examples": [
        "Invented CSS in JS",
        "Defined and drove migration strategy to Lite",
        "Implemented unidirectional data flow to completion",
      ],
    }],
  },

  "LEAD_PER_EFF": {
    "displayName": "Leadership & Personal Effectiveness",
    "category": "A",
    "description": "Develops expertise in foundational systems, such as deployments, pipelines, databases and machine learning",
    "milestones": [{
      "summary": "Works effectively within established structures, following current best practices",
      "signals": [
        "Writes thorough postmortems for service outages",
        "Makes simple configuration changes to services",
        "Performs backfills safely and effectively, without causing pages",
      ],
      "examples": [
        "Made safe and effective Ansible changes",
        "Implemented new ETL pipelines based on existing ones",
        "Resolved out of disk errors independently",
      ],
    }, {
      "summary": "Develops new instances of existing architecture, or minor improvements to existing architecture",
      "signals": [
        "Made minor version upgrades to technologies",
        "Builds machine learning jobs within the ML framework",
        "Triages service issues correctly and independently",
      ],
      "examples": [
        "Upgraded NodeJS from 8.0 to 8.1.1",
        "Built custom packages for RPMs",
        "Improved ETL efficiency by improving Dynamo to S3 loading",
      ],
    }, {
      "summary": "Designs standalone systems of moderate complexity, or major new features in existing systems",
      "signals": [
        "Acts as primary maintainer for existing critical systems",
        "Designs moderately complex systems",
        "Makes major version upgrades to libraries",
      ],
      "examples": [
        "Designed Ansible configuration management",
        "Built Medium's realtime stats pipeline",
        "Designed flexible framework for writing machine learning jobs",
      ],
    }, {
      "summary": "Builds complex, reusable architectures that pioneer best practices for other engineers, or multi-system services",
      "signals": [
        "Designs complex projects that encompass multiple systems and technologies",
        "Demonstrates deep knowledge of foundational systems",
        "Introduces new databases and technologies to meet underserved needs",
      ],
      "examples": [
        "Designed and built BBFD",
        "Designed AWS configuration management",
        "Introduced Kinesis and pioneered streaming events pipeline",
      ],
    }, {
      "summary": "Is an industry-leading expert in foundational engineering or sets strategic foundational direction for an eng team",
      "signals": [
        "Designs transformational projects in service of long-term goals",
        "Defines the strategic vision for foundational work and supporting technologies",
        "Invents industry-leading techniques to solve complex problems",
      ],
      "examples": [
        "Invented a novel ML technique that advanced the state of the art",
        "Defined and developed Medium's continuous delivery strategy",
        "Developed and implemented HA strategy",
      ],
    }],
  },

  "COMM_FINANCE": {
    "displayName": "Commercial & Financial Acumen",
    "category": "A",
    "description": "Develops expertise in server side engineering, using technologies such as Go, NodeJS, or Scala",
    "milestones": [{
      "summary": "Works effectively within established server side frameworks, following current best practices",
      "signals": [
        "Adds NodeJS endpoints using layers architecture",
        "Adds golang endpoints using Gotham architecture",
        "Makes minor server changes to support client needs",
      ],
      "examples": [
        "Added IFTTT trigger for new bookmark to medium2",
        "Added delete audio route to Buggle",
        "Queried a Dynamo LSI appropriately",
      ],
    }, {
      "summary": "Develops new instances of existing architecture, or minor improvements to existing architecture",
      "signals": [
        "Assesses correctness and utility of existing code and avoids blind copy-pasting",
        "Generalizes code when appropriate",
        "Determines data needs from product requirements",
      ],
      "examples": [
        "Identified need for new index on Dynamo",
        "Acted as caretaker for routes protos",
        "Updated Facebook API version and codebase dependencies",
      ],
    }, {
      "summary": "Designs standalone systems of moderate complexity, or major new features in existing systems",
      "signals": [
        "Acts as primary maintainer for existing critical systems",
        "Integrates third party services effectively",
        "Writes playbooks for new service maintenance",
      ],
      "examples": [
        "Implemented Google Auth login to Medium",
        "Implemented payments integration with Stripe",
        "Built Textshots server",
      ],
    }, {
      "summary": "Builds complex, reusable architectures that pioneer best practices for other engineers, or multi-system services",
      "signals": [
        "Delivers complex systems that achieve their goals",
        "Avoids subtle architectural mistakes when considering new systems",
        "Makes appropriate buy vs build choices",
      ],
      "examples": [
        "Designed Medium's ranked feed architecture",
        "Designed custom domains architecture",
        "Created Gotham framework for creating Go services",
      ],
    }, {
      "summary": "Is an industry-leading expert in server side engineering or sets strategic server side direction for an eng team",
      "signals": [
        "Designs transformational projects of significant complexity and scope",
        "Makes decisions that have positive, long term, wide ranging consequences",
        "Identifies and solves systemic problems with current architecture",
      ],
      "examples": [
        "Researched, vetted, and selected Go as Medium's statically typed language",
        "Defined microservices architecture and medium2 migration plan",
        "Defined and implemented proprietary IP core to the company's success",
      ],
    }],
  },

  "ADAPT_RESIL": {
    "displayName": "Adaptability & Resilience",
    "category": "B",
    "description": "Delivers well-scoped programs of work that meet their goals, on time, to budget, harmoniously",
    "milestones": [{
      "summary": "Effectively delivers individual tasks",
      "signals": [
        "Estimates small tasks accurately",
        "Delivers tightly-scoped projects efficiently",
        "Writes effective technical specs outlining approach",
      ],
      "examples": [
        "Wrote the technical spec for featured post images",
        "Delivered stream item support for email digests",
        "Delivered payment history dashboard",
      ],
    }, {
      "summary": "Effectively delivers small personal projects",
      "signals": [
        "Performs research and considers alternative approaches",
        "Balances pragmatism and polish appropriately",
        "Defines and hits interim milestones",
      ],
      "examples": [
        "Delivered promo editor",
        "Delivered audio uploading for web client",
        "Executed the recommends to claps backfill",
      ],
    }, {
      "summary": "Effectively delivers projects through a small team",
      "signals": [
        "Delegates tasks to others appropriately",
        "Integrates business needs into project planning",
        "Chooses appropriate project management strategy based on context",
      ],
      "examples": [
        "Ran project retro to assess improvement opportunities",
        "Completed launch checklist unprompted for well controlled rollout",
        "Facilitated project kickoff meeting to get buy-in",
      ],
    }, {
      "summary": "Effectively delivers projects through a large team, or with a significant amount of stakeholders or complexity",
      "signals": [
        "Finds ways to deliver requested scope faster, and prioritizes backlog",
        "Manages dependencies on other projects and teams",
        "Leverages recognition of repeated project patterns",
      ],
      "examples": [
        "Oversaw technical delivery of Hightower",
        "Managed infrastructure migration to VPC",
        "Involved marketing, legal, and appropriate functions at project start",
      ],
    }, {
      "summary": "Manages major company pushes delivered by multiple teams",
      "signals": [
        "Considers external constraints and business objectives when planning",
        "Leads teams of teams, and coordinates effective cross-functional collaboration",
        "Owns a key company metric",
      ],
      "examples": [
        "Managed technical migration to SOA",
        "Lead technical delivery of 10/7",
        "Delivered multi-month engineering project on time",
      ],
    }],
  },

  "CREATIVITY_INNO": {
    "displayName": "Creativity & Innovation",
    "category": "B",
    "description": "Shares the right amount of information with the right people, at the right time, and listens effectively",
    "milestones": [{
      "summary": "Communicates effectively to close stakeholders when called upon, and incorporates constructive feedback",
      "signals": [
        "Communicates project status clearly and effectively",
        "Collaborates with others with empathy",
        "Asks for help at the appropriate juncture",
      ],
      "examples": [
        "Updated The Watch before running a backfill",
        "Updated project status changes in Asana promptly",
        "Gave thoughtful check-in and check-out comments",
      ],
    }, {
      "summary": "Communicates with the wider team appropriately, focusing on timeliness and good quality conversations",
      "signals": [
        "Practises active listening and suspension of attention",
        "Ensures stakeholders are aware of current blockers",
        "Chooses the appropriate tools for accurate and timely communication",
      ],
      "examples": [
        "Received and integrated critical feedback positively",
        "Created cross-team Slack channel for payments work",
        "Spoke to domain experts before writing spec",
      ],
    }, {
      "summary": "Proactively shares information, actively solicits feedback, and facilitates communication for multiple stakeholders",
      "signals": [
        "Resolves communication difficulties between others",
        "Anticipates and shares schedule deviations in plenty of time",
        "Manages project stakeholder expectations effectively",
      ],
      "examples": [
        "Directed team response effectively during outages",
        "Gave a substantial Eng All Hands presentation on React",
        "Gave notice of upcoming related work in Eng Briefing",
      ],
    }, {
      "summary": "Communicates complex ideas skillfully and with nuance, and establishes alignment within the wider organization",
      "signals": [
        "Communicates project risk and tradeoffs skillfully and with nuance",
        "Contextualizes and clarifies ambiguous direction and strategy for others",
        "Negotiates resourcing compromises with other teams",
      ],
      "examples": [
        "Lead off-site workshop on interviewing",
        "Wrote Medium's growth framework and rationale",
        "Aligned the entire organization around claps",
      ],
    }, {
      "summary": "Influences outcomes at the highest level, moves beyond mere broadcasting, and sets best practices for others",
      "signals": [
        "Defines processes for clear communication for the entire team",
        "Shares the right amount of information with the right people, at the right time",
        "Develops and delivers plans to execs, the board, and outside investors",
      ],
      "examples": [
        "Organized half year check-in company offsite",
        "Created the communication plan for a large organizational change",
        "Presented to the board about key company metrics and projects",
      ],
    }],
  }
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

export const titles = [
  { label: 'Associate Consultant', minPoints: 0, maxPoints: 16 },
  { label: 'Consultant', minPoints: 17, maxPoints: 35 },
  { label: 'Senior Consultant', minPoints: 36, maxPoints: 57 },
  { label: 'Principal Consultant', minPoints: 36, maxPoints: 57 },
  { label: 'Practice Lead', minPoints: 58 },
  { label: 'Technical Lead', minPoints: 58 },
  { label: 'Delivery Lead', minPoints: 60 },
  { label: 'Account Lead', minPoints: 60 }
]

export const eligibleTitles = (milestoneMap: MilestoneMap): string[] => {
  const totalPoints = totalPointsFromMilestoneMap(milestoneMap)

  return titles.filter(title => (title.minPoints === undefined || totalPoints >= title.minPoints)
    && (title.maxPoints === undefined || totalPoints <= title.maxPoints))
    .map(title => title.label)
}
