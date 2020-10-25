
import chai from 'chai'
import sinon from 'sinon'

import * as partA from '../../server/bigComponent/partA'
import * as partB from '../../server/bigComponent/partB'
import { getBigComponentValue } from '../../server/bigComponent/bigComponent'

let expect = chai.expect

describe('getBigComponentValue', () => {

    it('empty params', async ()=> {

        sinon.stub(partA, 'partAfn').returns(true);
        sinon.stub(partB, 'partBfn').returns(42);

        let a = await getBigComponentValue(22, 5, 'BROWN')
        expect(a).to.equal('true - 133210 - 42')
    })

})
