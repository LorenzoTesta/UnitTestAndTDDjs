import {convertToRoman} from '../../server/roman2numeral/roman2numeral'

import chai from 'chai'
let expect = chai.expect

describe('convertToRoman', ()=>{

    it('easy one', ()=>{
        let result = convertToRoman(5);
        console.log(result)
    })

})
