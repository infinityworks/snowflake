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
    "displayName": "Building great relationships",
    "category": "A",
    "description": `• Being a great colleague and working effectively as part of a team </br>
    • Being able to clearly articulate your view and share with others (and do this in an effective way) </br>
    • Building relationships (at all levels, both internally and externally) </br>
    • Using a range of communication mediums e.g. presentations, pitches, written comms (blogs) </br>
    • Being able to influence </br>
    • Giving and receiving feedback effectively </br>
    • I speak up about things that aren't right e.g. inappropriate behaviour </br>
    • Understanding when to escalate or ask for help`,

    "milestones": [{
      // ===== LEVEL 1
      "summary": "Establishing yourself in a team",
      "signals": [
        "Can communicate clearly with colleagues so that thoughts and ideas are well understood, providing rationale for decisions (both written and verbal)",
        "Can work collaboratively alongside colleagues and clients as part of a team:",
        "Are respectful to others",
        "Represent IW in a professional and positive way"
      ],
      "examples": [
        "Engage in two way, collaborative effective discussion whilst pairing with others",
        "Ask questions to clarify understanding",
        "Contribute effectively in meetings, knowing when to speak up and when to listen",
        "Use clear and effective written information to support your work"
      ],
      "advSummary": "Expanding your skills and confidence to include working with clients",
      "advSignals": [
        "Can communicate clearly with clients so that thoughts and ideas are well understood, providing sound rationale for decisions (both written and verbal)",
      ],
      "advExamples": [
        "Ask questions to explore the client's view",
        "Explain your thinking on a topic to the client",
        "Ask questions to provoke thought and challenge the team",
        "Write blogs (or similar) on key learnings"
      ],
    }, {
      // ===== LEVEL 2
      "summary": "Being a valuable colleague",
      "signals": [
        "Have awareness of and seek to develop non-verbal communication aspects like body language and tone as part of communications and interactions",
        "Are able to develop effective and active listening skills"
      ],
      "examples": [
        "Be conscious of allowing colleagues to make their point",
        "Use a friendly and engaging manner to help others feel at ease"
      ],
      "advSummary": "Expanding your sphere of influence",
      "advSignals": [
        "Being able to influence colleagues in effective non-confrontation ways"
      ],
      "advExamples": [
        "Draw out opinions from colleagues through open questions",
        "Work out the best way to phrase (and re-phrase) your thoughts to help others understand, both verbally and in writing"
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
    "displayName": "Figuring stuff out",
    "category": "A",
    "description": `• Analyses the situation to extract a clear and simple understanding of what needs to be done </br>
    • Practices continuous improvement </br>
    • Adapts to change  </br>
    • Is results oriented  </br>
    • Is not daunted by a challenge  </br>
    • Is open minded`,

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
       "summary": "Leading larger tasks",
       "signals": [
         "Leads the definition and specification of larger tasks for self and others",
         "Heavily involved in the solution design to achieve the task goals",
         "Predicts likely/immediate impacts and consequences when assessing candidate solutions",
         "Identifies when larger tasks should be split or merged to better represent how they can be delivered effectively",
         "Identifies the underlying principles and their relevance from complex information and can clearly explain them to others"
       ],
       "examples": [
         "Leads the technical design for an epic",
         "Leads the organising of an annual conference"
       ],
       "advSummary": "Maintaining the project",
         "advSignals": [
           "Leads the definition and specification of larger tasks for self and others",
           "Leads parts of the overall project solution design",
           "Plays an active role in maintaining the team delivery plan in the face of changing circumstances",
           "Helps the team understand and align around the overall solution design and delivery plan",
           "Plays an active role in the identification and resolution of risks, issues, dependencies",
           "Challenges fundamental assumptions and proposes sometimes radically different alternative approaches to achieve the ultimate goals"
         ],
         "advExamples": [
           "// TODO"
         ],
      }, {
       // ===== LEVEL 4
       "summary": "Forming or fixing the project",
       "signals": [
         "Leads the formation of the initial solution design and delivery plan for new projects of moderate size/complexity",
         "Predicts subtle and indirect impacts and consequences when assessing candidate solutions",
         "Leads identification and resolution of risks, issues, dependencies",
         "Identifies issues with in-flight projects and puts in place changes to the solution design and delivery plan to address them",
         "Identifies client/department-wide strengths and weaknesses, amplifies and develops strengths and proactively proposes ways to strengthen weaknesses",
         "Uses awareness of others' strengths to lead larger-scale problem solving initiatives"
       ],
       "examples": [
         "// TODO",
       ],
       "advSummary": "Introducing company-wide thinking",
         "advSignals": [
           "Leads the formation of the initial solution design and delivery plan for wholly new or large/complex client engagements / departments",
           "Helps others in identifying issues with in-flight projects and identifying changes to the solution design and delivery plan to address them",
           "Identifies company-wide strengths and weaknesses, amplifies strengths and proactively proposes ways to strengthen weaknesses"
         ],
         "advExamples": [
           "// TODO"
         ],
      }, {
       // ===== LEVEL 5
       "summary": "Increasing company wide contribution",
       "signals": [
         "Supports others in leading the initial solution design and delivery plan for wholly new or large/complex client engagements / departments",
         "Develops the skills in others needed to identify issues with in-flight projects and put in place changes to the solution design and delivery plan to address them",
         "Leads others in identifying company-wide strengths and weaknesses, and coaches on how to amplify strengths and strengthen weaknesses",
         "Works across multiple teams and provides point support for particularly challenging situations",
         "Recognised throughout the company as an exceptionally clear thinker, able to take on the largest challenges"
       ],
       "examples": [
         "// TODO",
       ],
       "advSummary": "Taking a leading role, company wide",
         "advSignals": [
           "Leads the development of new company capabilities",
           "Leads process and organisational design at a whole company level to deliver company values",
           "Draws on a whole-company and industry-wide awareness to provide high impact support and intervention for the most challenging situations across a region"
         ],
         "advExamples": [
           "// TODO"
         ],
    }],
  },

  "LEAD_PER_EFF": {
    "displayName": "Leading the Infinity Works way",
    "category": "A",
    "description": `• Not criticising people for mistakes; learning experience opportunity </br>
    • Ambassadorship </br>
    • Inclusivity </br>
    • Helping others do their job well (e.g. at more senior level), sharing your skills with others to help them develop </br>
    • Developing and caring about your team and your peers </br>
    • Taking ownership of your career </br>
    • Sharing and celebrating team successes`,
    "milestones": [{
      // ===== LEVEL 1
      "summary": "// TODO",
      "signals": [
        "// TODO",
      ],
      "examples": [
        "// TODO",
      ],
      "advSummary": "// TODO",
        "advSignals": [
          "// TODO"
        ],
        "advExamples": [
          "// TODO"
        ],
    }, {
       // ===== LEVEL 2
       "summary": "// TODO",
       "signals": [
         "// TODO",
       ],
       "examples": [
         "// TODO",
       ],
       "advSummary": "// TODO",
         "advSignals": [
           "// TODO"
         ],
         "advExamples": [
           "// TODO"
         ],
      }, {
       // ===== LEVEL 3
       "summary": "// TODO",
       "signals": [
         "// TODO",
       ],
       "examples": [
         "// TODO",
       ],
       "advSummary": "// TODO",
         "advSignals": [
           "// TODO"
         ],
         "advExamples": [
           "// TODO"
         ],
      }, {
       // ===== LEVEL 4
       "summary": "// TODO",
       "signals": [
         "// TODO",
       ],
       "examples": [
         "// TODO",
       ],
       "advSummary": "// TODO",
         "advSignals": [
           "// TODO"
         ],
         "advExamples": [
           "// TODO"
         ],
      }, {
       // ===== LEVEL 5
       "summary": "// TODO",
       "signals": [
         "// TODO",
       ],
       "examples": [
         "// TODO",
       ],
       "advSummary": "// TODO",
         "advSignals": [
           "// TODO"
         ],
         "advExamples": [
           "// TODO"
         ],
    }],
  },

  "COMM_FINANCE": {
    "displayName": "Developing Infinity Works",
    "category": "A",
    "description": `• Understanding the Consulting Business Model and how we manage the business e.g. rate cards, margin, costs </br>
    • Treating IW money as your own </br>
    • Negotiation skills </br>
    • Focused on Customer outcomes </br>
    • Taking an interest in my client's business and the challenges they are facing </br>
    • Bridge the gap between client challenges and IW offerings to seed new business opportunities </br>
    • Bringing the best of IW to our clients </br>
    • Being able to understand and manage risk`,
    "milestones": [{
      // ===== LEVEL 1
      "summary": "Undertanding the basics of our business",
      "signals": [
        "Can explain the basics of how our business operates",
        "Can explain the impact your contribution has on the business",
        "Complete the tasks needed to support the business operations (accurately and on time)"
      ],
      "examples": [
        "Complete timesheets when requested, ensuring these are completed with care to avoid mistakes",
        "When making a request for funding e.g. project event, I have asked myself the question \"would I spend my own money on this, is it good value?\""
      ],
      "advSummary": "Starting to show Commercial awareness of the client",
        "advSignals": [
          "// TODO"
        ],
        "advExamples": [
          "// TODO"
        ],
    }, {
       // ===== LEVEL 2
       "summary": "Expanding knowledge of our business as well as understanding that of our clients",
       "signals": [
         "Can describe your client's business and how they operate in their marketplace",
         "Have an understanding of the IW service offerings",
         "Continues to drive cost effectiveness in terms of how IW spends its money"
       ],
       "examples": [
         "Could describe the different IW service offerings to a colleague",
         "Could deliver a short talk about your client and the objectives project",
         "Make suggestions on how to be more cost effective, recognising that money spent on one thing means it can't be spent on another"
       ],
       "advSummary": "// TODO",
         "advSignals": [
           "// TODO"
         ],
         "advExamples": [
           "// TODO"
         ],
      }, {
       // ===== LEVEL 3
       "summary": "Sound understanding of our business and clients and developing a commercial and customer outcome mindset",
       "signals": [
         "Understand the construct of the SOW you are currently working on and the key elements of it from a commercial perspective",
         "Are able to articulate the value IW are currently bringing to the client under the current SOW",
         "Are able to articulate the IW service offerings to an existing or potential client",
         "Helping ensure the business can deliver against it's operational requirements"
       ],
       "examples": [
         "Being able to deliver an elevator pitch on IW Service Offerings",
         "Ensuring timesheet approvals are completed on time"
       ],
       "advSummary": "// TODO",
         "advSignals": [
           "Participate and seek ways to add value through Account Planning",
           "Support different elements of the sales pipeline (generation, proposal, pitch, closure)",
           "Understanding the business risks of our business or a certain opportunity"
         ],
         "advExamples": [
           "// TODO"
         ],
      }, {
       // ===== LEVEL 4
       "summary": "Solidifying your commercial and financial awareness and supporting the improvement of the business (e.g. profitabilty, growth)",
       "signals": [
         "Contribute to Account Planning",
         "Understand the construct of a Statement of Work (SOW) and be able to draft a Time and Materials SOW",
         "Consider the profitability and business strategy when making commercial decisions",
         "Can lead some aspects of the sales pipeline (generation, proposal, pitch, closure)"
       ],
       "examples": [
         "// TODO",
       ],
       "advSummary": "Taking Responsibility for Commercial and Financial Aspects within a certain sphere of influence",
         "advSignals": [
           "Lead on Account Planning activities",
           "Draft a Fixed Price Statement of Work (SOW)",
           "Can lead on all aspects of the sales pipeline (generation, proposal, pitch, closure)",
           "Understands the levers that drive profitability in the business"
         ],
         "advExamples": [
           "Reviewing and approving client invoices"
         ],
      }, {
       // ===== LEVEL 5
       "summary": "Taking responsibility for broader and more strategic commercial and financial aspects",
       "signals": [
         "Focus on profitability and long-term sustainable growth",
         "Support the development of new Service Offerings",
         "Can lead in sales generation into new markets and with new offerings",
         "Are comfortable making decisions that impact business profitability",
         "Manage Account Planning"
       ],
       "examples": [
         "// TODO",
       ],
       "advSummary": "// TODO",
         "advSignals": [
           "// TODO"
         ],
         "advExamples": [
           "// TODO"
         ],
    }],
  },

  "ADAPT_RESIL": {
    "displayName": "Embracing change and ambiguity",
    "category": "B",
    "description": `• Ability to be pragmatic and handle failure </br>
    • Not throwing your toys out of the pram </br>
    • Dealing with uncertainty and ambiguity </br>
    • Strong opinion, loosely held (Egoless) </br>
    • Demonstrating staying power </br>
    • Take actions to build my mental, emotional and physical resilience`,
    "milestones": [{
      // ===== LEVEL 1
      "summary": "// TODO",
      "signals": [
        "Recognise the nature of our business which can lead to uncertainty or the need to adapt to new situations quickly",
        "Are learning the skills to operate in a client delivery environment and the pressures this may create",
        "Recognise when you need more support",
        "Are working on building your self-awareness (ability to identify your own thoughts, emotions and behaviours)"
      ],
      "examples": [
        "Asking for help from your Account Lead or Advocate if you are struggling on your project for any reason",
      ],
      "advSummary": "// TODO",
        "advSignals": [
          "Can remain calm and professional under pressure",
          "Takes a failure as a learning opportunity",
          "Are working on building the skill of self-regulation (being able to regulate your thoughts, actions, and emotions)"
        ],
        "advExamples": [
          "Don't fixate on failure, accept defeat and focus on the future"
        ],
    }, {
       // ===== LEVEL 2
       "summary": "Understands the need for Adaptability and Resilience",
       "signals": [
         "Operates with a growth rather than fixed mindset",
         "Seek opportunities to build resilience",
         "Maintain perspective of a situation and avoid over-reacting"
       ],
       "examples": [
         "// TODO",
       ],
       "advSummary": "// TODO",
         "advSignals": [
           "// TODO"
         ],
         "advExamples": [
           "// TODO"
         ],
      }, {
       // ===== LEVEL 3
       "summary": "// TODO",
       "signals": [
         "Deals with difficult situations with maturity and provides support to work towards an outcome",
         "Can provide to others when faced with a challenging situation",
         "Having an open-minded approach and be willing to adapt",
         "Can transition between roles with ease, accepting new situations readily",
         "Recognising the need to balance opinions and potentially adapt your perspective"
       ],
       "examples": [
         "// TODO",
       ],
       "advSummary": "// TODO",
         "advSignals": [
           "// TODO"
         ],
         "advExamples": [
           "// TODO"
         ],
      }, {
       // ===== LEVEL 4
       "summary": "// TODO",
       "signals": [
         "Demonstrate staying power; to be able to see something through to conclusion",
         "Support the leadership team in building resilience in the teams and people you are responsible for",
         "Being able to operate when there is no precedent or structure in place",
         "Being able to manage conflict or difficult situations",
         "Being able to manage criticism objectively"
       ],
       "examples": [
         "// TODO",
       ],
       "advSummary": "// TODO",
         "advSignals": [
           "Being able to manage a crisis or highly stressful situation without losing your head"
         ],
         "advExamples": [
           "// TODO"
         ],
      }, {
       // ===== LEVEL 5
       "summary": "// TODO",
       "signals": [
         "Can support others in building their adaptablity and resilience",
       ],
       "examples": [
         "// TODO",
       ],
       "advSummary": "// TODO",
         "advSignals": [
           "// TODO"
         ],
         "advExamples": [
           "// TODO"
         ],
    }],
  },

  "CREATIVITY_INNO": {
    "displayName": "Thinking differently",
    "category": "B",
    "description": `• Generating ideas
    • Apply creativity to critical thinking
    • Being curious
    • Thinking outside the box
    • Synthesising and reorganising information in the search for better outcomes
    • Being willing to try something new
    • Continuous improvement, both yourself and Infinity Works
    • Developing thought leadership
    • Intelligent risk taking`,
    "milestones": [{
      // ===== LEVEL 1
      "summary": "Come up with multiple approaches for yourself",
      "signals": [
        "Are able to come up with multiple approaches to a problem or challenge and evaluate these",
        "Are able to experiment and learn from your findings",
        "Are keen to explore multiple views from others"
      ],
      "examples": [
        "Create a list of options and test out each one",
        "Put forward ideas to improve within team sessions such as retros",
        "Ask good questions to explore what others think"
      ],
      "advSummary": "Share your ideas with others",
        "advSignals": [
          "Are confident in sharing thoughts and ideas with colleagues on your team",
          "Are able to evaluate the ideas of others and make a judgment on which to try"
        ],
        "advExamples": [
          "Engage in conversations with colleagues to generate ideas and approaches to try",
          "Summarise the different options and weigh these up objectively"
        ],
    }, {
       // ===== LEVEL 2
       "summary": "Generate ideas to help improve your team and be comfortable with change",
       "signals": [
         "Put forward multiple options to challenges that the team encounter",
         "Can show that you've learnt and adapted from trying and experimenting with different approaches"
       ],
       "examples": [
         "Seed in ideas in response to things both you and the team identify",
         "Explain your improvements in a clear and concise way"
       ],
       "advSummary": "Your ideas and creativity have benefited your team and colleagues in a tangible way",
         "advSignals": [
           "Encourage others to share their thoughts and ideas",
           "Realise a change from the status quo may be needed and make a case for this",
           "Are comfortable with ambiguity and happy to work with this"
         ],
         "advExamples": [
           "Take on a task or requested outcome and own generating various options to achieve it"
         ],
      }, {
       // ===== LEVEL 3
       "summary": "You generate experiments and solutions to help in a wider context (client and IW)",
       "signals": [
         "Are able to spot where a challenge lies and think about different approaches to improve it",
         "Are able to use creative thinking to help present and implement ideas that can help solve a larger challenge"
       ],
       "examples": [
         "Take a specific client or IW challenge and come up with options to improve it",
         "Try out these ideas and learn from their implementation"
       ],
       "advSummary": "Your ideas and experiments are changing the status quo in a wider context. You're able to help others do so too",
         "advSignals": [
           "Encourage a team culture of looking to continuously improve and try out new ideas",
           "Analyse learning from experiments to adapt and evolve",
           "Are able to influence the adoption of new approaches in a wider context"
         ],
         "advExamples": [
           "Lead sessions for the team to brainstorm ideas and approaches",
           "Help the team deal with ambiguity and work through it"
         ],
      }, {
       // ===== LEVEL 4
       "summary": "Your innovation and creativity is bringing real benefits to your client or area within IW",
       "signals": [
         "Are known as a key person to help bring about improvements within your area",
         "Can show a clear pattern of improvements generated from experiments and learning",
         "Can bring creativity and options to significant challenges and revel in this",
         "Realise your views are not always the best and be open to others",
         "Show leadership in helping drive the above forward"
       ],
       "examples": [
         "Track a roadmap of experiments and improvements made for your team/client",
       ],
       "advSummary": "Improvements are being realised for IW",
         "advSignals": [
           "Have helped IW improve through application of innovation and creativity",
           "Have led challenging change and demonstrated how innovative changes have benefited"
         ],
         "advExamples": [
           "// TODO"
         ],
      }, {
       // ===== LEVEL 5
       "summary": "You provide leadership to develop a culture of creativity and innovation",
       "signals": [
         "Foster the right environment to help creativity and innovation take place",
         "Lead on the application of techniques to foster creativity",
         "Provide support and cover for change",
         "Provide a physiologically safe environment to experiment"
       ],
       "examples": [
         "// TODO",
       ],
       "advSummary": "Innovation and creativity are things you are reknowned for within your industry and career",
         "advSignals": [
           "Are sought out for your input and support to solving tricky challenges",
           "Are seen as a thought leader around innovation in your given field",
           "Share your continuous improvement journey and learning through experimentation with a wide audience"
         ],
         "advExamples": [
           "// TODO"
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
