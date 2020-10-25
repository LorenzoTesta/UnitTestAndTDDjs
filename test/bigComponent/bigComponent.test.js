
import chai from 'chai'
import { getBigComponentValue } from '../../server/bigComponent/bigComponent'

let expect = chai.expect

describe('getBigComponentValue', () => {
    it('empty params', async ()=> {
        let a = await getBigComponentValue(22,5, 'BROWN')
        expect(a).to.equal(1)
    })
})
