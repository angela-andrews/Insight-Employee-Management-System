const graphql = require('graphql');
const {
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString
} = graphql;

const Employee = require('../models/employee');
const HomeAddress = require('../models/homeAddress');
const WorkAddress = require('../models/workAddress');

const EmployeeType = new GraphQLObjectType({
  name: 'Employee',
  fields: () => ({
    id:             {type: GraphQLID},
    employeeID:     {type: GraphQLInt},
    firstName:      {type: GraphQLString},
    lastName:       {type: GraphQLString},
    position:       {type: GraphQLString},
    supervisor:     {type: GraphQLString},
    homeAddress: {
      type: HomeAddressType,
      resolve(parent, args) {
        return HomeAddress.findById(parent.homeAddress)
      }
    },
    workAddress: {
      type: WorkAddressType,
      resolve(parent, args) {
        return WorkAddress.findById(parent.workAddress);
      }
    }
  })
});

const HomeAddressType = new GraphQLObjectType({
  name: 'HomeAddress',
  fields: () => ({
    id:         {type: GraphQLID},
    employeeID: {type: GraphQLInt},
    streetOne:  {type: GraphQLString},
    streetTwo:  {type: GraphQLString},
    city:       {type: GraphQLString},
    state:      {type: GraphQLString},
    zip:        {type: GraphQLString},
    country:    {type: GraphQLString},
  })
});

const WorkAddressType = new GraphQLObjectType({
  name: 'WorkAddress',
  fields: () => ({
    id:         {type: GraphQLID},
    employeeID: {type: GraphQLInt},
    streetOne:  {type: GraphQLString},
    streetTwo:  {type: GraphQLString},
    city:       {type: GraphQLString},
    state:      {type: GraphQLString},
    zip:        {type: GraphQLString},
    country:    {type: GraphQLString},
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
    },
    homeAddress: {
      type: HomeAddressType,
      args: {id: {type: GraphQLID}},
      resolve(parent, args) {
        return HomeAddress.findById(args.id);
      }
    },
    workAddress: {
      type: WorkAddressType,
      args: {id: {type: GraphQLID}},
      resolve(parent, args) {
        return WorkAddress.findById(args.id);
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});