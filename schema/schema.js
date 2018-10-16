const graphql = require('graphql');
const {
  GraphQLID,
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString
} = graphql;
const Employee = require('../models/employee');

const EmployeeType = new GraphQLObjectType({
  name: 'Employee',
  fields: () => ({
    id:             {type: GraphQLID},
    firstName:      {type: GraphQLString},
    lastName:       {type: GraphQLString},
    homeStreetOne:  {type: GraphQLString},
    homeStreetTwo:  {type: GraphQLString},
    homeCity:       {type: GraphQLString},
    homeState:      {type: GraphQLString},
    homeZip:        {type: GraphQLString},
    homeCountry:    {type : GraphQLString}
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    employee: {
      type: EmployeeType,
      args: {id: {type: GraphQLID}},
      resolve(parent, args) {
        return Employee.findById(args.id);
      }
    },
    allEmployees: {
      type: new GraphQLList(EmployeeType),
      resolve(parent, args) {
        return Employee.find({});
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});