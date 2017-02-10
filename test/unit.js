const chai = require('chai')
const expect = chai.expect
const vdxPluginCreator = require('../vdxPluginCreator.js')

describe('Plugin Unit Tests', ()=>{

  it('expects two arguments',()=>{
   expect(() => vdxPluginCreator({},{})).to.throw(Error);
  });
  it('throws error when missing parameters', ()=>{
    expect(vdxPluginCreator).to.throw(Error);
  })


})