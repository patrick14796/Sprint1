var expect = require('chai').expect

describe('Array', () =>{
    describe('#sort', () => {
        it('should sorting array by name', () =>{
            var months = ['Alice', 'Bob', 'Daniel', 'Vicrtor']
            expect(months.sort()).to.be.eql(['Alice', 'Bob', 'Daniel', 'Vicrtor'])
        })
    })
})