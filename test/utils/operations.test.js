
import chai from 'chai'
import {sum, sortNumbers, isValidPage} from '../../server/utils/operations'

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


describe('isValidPage', () => {
    it('parametric', () => {
        const params = [
            { page: 0, expected: true },
            { page: 1, expected: true },
            { page: null, expected: false },
            { page: undefined, expected: false },
            { page: 'null', expected: false },
            { page: '0', expected: true },
            { page: '1', expected: true },
            { page: 150, expected: true },
            { page: -1, expected: false },
            { page: -3, expected: false }
            // {page: true, expected: false},    // TODO: wrong, does that have any sense?
            // {page: false, expected: false},   // TODO: wrong, does that have any sense?
            // {page: '', expected: false},      // TODO: wrong, does that have any sense?
        ];
        params.map(v => {
            const actual = isValidPage(v.page);
            return expect(actual).to.equal(v.expected);
        });
    });
});
