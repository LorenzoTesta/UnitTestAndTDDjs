
import chai from 'chai'
import { playFizzBuzz } from '../../server/fizzBuzz/fizzBuzz'

let expect = chai.expect

describe('playFizzBuzz', () => {

    it('test zero', ()=> {
        playFizzBuzz(9)
    })

    it('test empty', ()=> {
        let res = playFizzBuzz()
        expect(res).to.equal('')
    })

    it('parametric', ()=>{
        let param = [
            {arg: 1, Fizz: "Fizz", Buzz: "Buzz", expected: '1'},
            {arg: 2, Fizz: "Fizz", Buzz: "Buzz", expected: '1 2'},
            {arg: 3, Fizz: "Fizz", Buzz: "Buzz", expected: '1 2 Fizz'},
            {arg: 4, Fizz: "Fizz", Buzz: "Buzz", expected: '1 2 Fizz 4'},
            {arg: 5, Fizz: "Fizz", Buzz: "Buzz", expected: '1 2 Fizz 4 Buzz'},
            {arg: 6, Fizz: "Fizz", Buzz: "Buzz", expected: '1 2 Fizz 4 Buzz Fizz'},
            {arg: 14, Fizz: "Fizz", Buzz: "Buzz", expected: '1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14'},
            {arg: 15, Fizz: "Fizz", Buzz: "Buzz", expected: '1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz'},
            {arg: 16, Fizz: "Fizz", Buzz: "Buzz", expected: '1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz 16'},
        ]
        param.map(x => {
            let res = playFizzBuzz(x.arg, x.Fizz, x.Buzz)
            expect(res).to.equal(x.expected, "arg: " + x.arg)
        })
    })

    it('parametric multi', ()=>{
        let param = [
            {arg: 2, Fizz: "A", Buzz: "A", expected: '1 2'},
            {arg: 3, Fizz: "A", Buzz: "B", expected: '1 2 A'},
            {arg: 6, Fizz: "C", Buzz: "D", expected: '1 2 C 4 D C'},
            {arg: 16, Fizz: "K", Buzz: "J", expected: '1 2 K 4 J K 7 8 K J 11 K 13 14 KJ 16'},
        ]
        param.map(x => {
            let res = playFizzBuzz(x.arg, x.Fizz, x.Buzz)
            expect(res).to.equal(x.expected, "arg: " + x.arg)
        })
    })

})
