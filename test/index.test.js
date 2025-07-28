const assert = require("assert")
const {isEven} = require("../src/index")

//using mocha -testing
describe("is Even function",()=>{
    it('should return true for isEven(2)', ()=>{
        assert.strictEqual(isEven(2),true)
    })
    it('should return true for isEven(5)', ()=>{
        assert.strictEqual(isEven(5),false)
    })
    it('should return true for isEven(42)', ()=>{
        assert.strictEqual(isEven(42),true)
    })
})
