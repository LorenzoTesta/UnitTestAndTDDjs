
import chai from 'chai'
import { sum } from '../../server/utils/operations'

let expect = chai.expect

describe('test di prova', () => {
    it('test singolo', ()=> {
        let a = sum(4,5)
        expect(a).to.equal(9)
    })
})
