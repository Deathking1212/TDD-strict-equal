var describe = require('mocha').describe
var it = require('mocha').it
var expect = require('chai').expect
var strictEqual = require('../comparison')

describe('comparison', () => {
    describe('strictEqual', () => {
        it('returns true when given two parameters of the same type and same value', () => {
            // setup test data
            //call the function with the test data 
            var result = strictEqual(5, 5)

            //assert what should be true
            expect(result).to.equal(true)
        })

        it('returns false when given two parameters of the different type and different value', () => {
            // setup test data
            //call the function with the test data 
            var result = strictEqual(5, 'a')

            //assert what should be true
            expect(result).to.equal(false)
        })

        it('returns false when given two parameters of the different type and same value', () => {
            // setup test data
            //call the function with the test data 
            var result = strictEqual('5', 5)

            //assert what should be true
            expect(result).to.equal(false)
        })

        it('returns false when given two parameters of the same type and different value', () => {
            // setup test data
            //call the function with the test data 
            var result = strictEqual('8', '5')

            //assert what should be true
            expect(result).to.equal(false)
        })
    })
})