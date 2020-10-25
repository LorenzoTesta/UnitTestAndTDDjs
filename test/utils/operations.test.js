
import chai from 'chai'
import { sum, sortNumbers } from '../../server/utils/operations'

let expect = chai.expect

describe('sum', () => {
    it('easy one', ()=> {
        let a = sum(4,5)
        expect(a).to.equal(9)
    })
})

describe('sortNumbers', ()=> {
    it('easy one', ()=> {
        let l = [3, 44, 55, 52, 11]
        let actual = sortNumbers(l)
        expect(actual).to.eql([3, 11, 44, 52, 55])
    })
})
