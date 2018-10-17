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
const PositionSummary = require('../models/positionSummary');
const PersonalSummary = require('../models/personalSummary');

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
    },
    positionSummary: {
      type: PositionSummaryType,
      resolve(parent, args) {
        return PositionSummary.findById(parent.positionSummary)
      }
    },
    personalSummary: {
      type: PersonalSummaryType,
      resolve(parent, args) {
        return PersonalSummary.findById(parent.personalSummary)
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

const PositionSummaryType = new GraphQLObjectType({
  name: 'PositionSummary',
  fields: () => ({
    id:         {type: GraphQLID},
    employeeID: {type: GraphQLInt},
    deptName:   {type: GraphQLString},
    jobTitle:   {type: GraphQLString},
    startDate:  {type: GraphQLString},
    endDate:    {type: GraphQLString},
    timeType:   {type: GraphQLString},
    posType:    {type: GraphQLString}
  })
});

const PersonalSummaryType = new GraphQLObjectType({
  name: 'PersonalSummary',
  fields: () => ({
    id:         {type: GraphQLID},
    employeeID: {type: GraphQLInt},
    title:      {type: GraphQLString},
    middleName: {type: GraphQLString},
    dob:        {type: GraphQLString},
    gender:     {type: GraphQLString},
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
    employeeByID: {
      type: EmployeeType,
      args: {employeeID: {type: GraphQLInt}},
      resolve(parent, args) {
        return Employee.findOne({ employeeID: args.employeeID})
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