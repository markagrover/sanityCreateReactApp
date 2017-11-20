import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import blockContent from './blockContent'
import crewMember from './crewMember'
import castMember from './castMember'
import movie from './movie'
import person from './person'
import screening from './screening'
import todo from './todo'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([todo, blockContent, castMember, crewMember, movie, person, screening])
})
