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
const WorkHistory = require('../models/workHistory');
const Education = require('../models/education');
const Award = require('../models/award');
const Certificate = require('../models/certificate');
const Skill = require('../models/skill');

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
    },
    workHistory: {
      type: new GraphQLList(WorkHistoryType),
      resolve(parent, args) {
        return WorkHistory.find({employeeID: parent.employeeID})
      }
    },
    education: {
      type: new GraphQLList(EducationType),
      resolve(parent, args) {
        return Education.find({employeeID: parent.employeeID})
      }
    },
    award: {
      type: new GraphQLList(AwardType),
      resolve(parent, args) {
        return Award.find({employeeID: parent.employeeID})
      }
    },
    certificate: {
      type: new GraphQLList(CertificateType),
      resolve(parent, args) {
        return Certificate.find({employeeID: parent.employeeID})
      }
    },
    skill: {
      type: new GraphQLList(SkillType),
      resolve(parent, args) {
        return Skill.find({employeeID: parent.employeeID})
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

const WorkHistoryType = new GraphQLObjectType({
  name: 'WorkHistory',
  fields: () => ({
    id:           {type: GraphQLID},
    employeeID:   {type: GraphQLInt},
    jobTitle:     {type: GraphQLString},
    companyName:  {type: GraphQLString},
    startDate:    {type: GraphQLString},
    endDate:      {type: GraphQLString},
    location:     {type: GraphQLString},
    bullet1:      {type: GraphQLString},
    bullet2:      {type: GraphQLString},
    bullet3:      {type: GraphQLString},
    bullet4:      {type: GraphQLString},
  })
});

const EducationType = new GraphQLObjectType({
  name: 'Education',
  fields: () => ({
    id:         {type: GraphQLID},
    employeeID: {type: GraphQLInt},
    schoolName: {type: GraphQLString},
    degree:     {type: GraphQLString},
    startDate:  {type: GraphQLInt},
    endDate:    {type: GraphQLInt},
    bullet1:    {type: GraphQLString},
    bullet2:    {type: GraphQLString}
  })
});

const AwardType = new GraphQLObjectType({
  name: 'Award',
  fields: () => ({
    id:           {type: GraphQLID},
    employeeID:   {type: GraphQLInt},
    type:         {type: GraphQLString},
    date:         {type: GraphQLString},
    dollarAmount: {type: GraphQLString},
    reason:       {type: GraphQLString},
    status:       {type: GraphQLString}
  })
});

const CertificateType = new GraphQLObjectType({
  name: 'Certificate',
  fields: () => ({
    id:           {type: GraphQLID},
    employeeID:   {type: GraphQLInt},
    schoolName:   {type: GraphQLString},
    certificate:  {type: GraphQLString},
    date:         {type: GraphQLString},
    bullet1:      {type: GraphQLString},
    bullet2:      {type: GraphQLString}
  })
});

const SkillType = new GraphQLObjectType({
  name: 'Skill',
  fields: () => ({
    id:         {type: GraphQLID},
    employeeID: {type: GraphQLInt},
    skill:      {type: GraphQLString}
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