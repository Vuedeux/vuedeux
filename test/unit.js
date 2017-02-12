const chai = require('chai')
const expect = chai.expect
const vdxPluginCreator = require('../vdxPluginCreator.js')
// const vuex = require('../examples/TodoMVC/store/vuex')

const store = {
  dispatch: () => {
    console.log("I'm dispatching!!!")
  },
}
const badStore = {};
const actionTypes = { ACTION :"ACTION"}

let vdxStore = vdxPluginCreator(store,actionTypes)


describe('Plugin Unit Tests', () => {

  it('expects redux store as first param', () => {
    expect(() => vdxPluginCreator(badStore)).to.throw(Error, /expects Redux store/);
  });
  it('throws error when missing actionTypes', () => {
    expect(() => vdxPluginCreator(store)).to.throw(Error, /expects Action Type Object/);
  })
  it('returns a function', () => {
    expect(() => vdxPluginCreator(store, actionTypes)).to.be.a('function')
  })
  xit('Maps all action types', () => {
    //  expect(() => vdxStore()).to
  })
  xit('outputs correct ', () => {

  })

})