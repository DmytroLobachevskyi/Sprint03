'use strict'

let superTeam = {
    title: prompt('Name of the TEAM'),
    leader: prompt('Name of the team\'s leader'),
    members: prompt('Members of the team separated by a COMMA').split(','),
    memberCount: '',
    agenda: prompt('What are the ideas of the team'),
    isEvil: false
}

superTeam.memberCount = superTeam.members.length + 1
let str = prompt('Team is Evil (true) or Not (false)')
    if (str === 'true') superTeam.isEvil = true

alert(`Here's the team:
name - ${superTeam.title}
leader - ${superTeam.leader}
members - ${superTeam.members}
memberCount - ${superTeam.memberCount}
agenda - ${superTeam.agenda}
isEvil - ${superTeam.isEvil}`)

console.log(superTeam)