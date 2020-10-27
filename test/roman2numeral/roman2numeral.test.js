import {convertToRoman} from '../../server/roman2numeral/roman2numeral'

import chai from 'chai'
let expect = chai.expect

describe('convertToRoman', ()=>{

    it('easy one', ()=>{
        let result = convertToRoman(5);
        console.log(result)
    })

    it('parametric', ()=>{
        let params = [
            {arg: 1	, expected: 'I'},
            {arg: 2	, expected: 'II'},
            {arg: 3	, expected: 'III'},
            {arg: 4	, expected: 'IV'},
            {arg: 5	, expected: 'V'},
            {arg: 6	, expected: 'VI'},
            {arg: 7	, expected: 'VII'},
            {arg: 8	, expected: 'VIII'},
            {arg: 9	, expected: 'IX'},
            {arg: 10	, expected: 'X'},
            {arg: 20	, expected: 'XX'},
            {arg: 30	, expected: 'XXX'},
            {arg: 40	, expected: 'XL'},
            {arg: 50	, expected: 'L'},
            {arg: 60	, expected: 'LX'},
            {arg: 70	, expected: 'LXX'},
            {arg: 80	, expected: 'LXXX'},
            {arg: 90	, expected: 'XC'},
            {arg: 100	, expected: 'C'},
            {arg: 200	, expected: 'CC'},
            {arg: 300	, expected: 'CCC'},
            {arg: 400	, expected: 'CD'},
            {arg: 500	, expected: 'D'},
            {arg: 600	, expected: 'DC'},
            {arg: 700	, expected: 'DCC'},
            {arg: 800	, expected: 'DCCC'},
            {arg: 900	, expected: 'CM'},
            {arg: 1000, expected: 'M'},
            {arg: 2000, expected: 'MM'},
            {arg: 3000, expected: 'MMM'},
            {arg: 11, expected: 'XI'},
        ];
        params.map(x => {
            let actual = convertToRoman(x.arg)
            expect(actual).to.equal(x.expected)
        })
    })




})
