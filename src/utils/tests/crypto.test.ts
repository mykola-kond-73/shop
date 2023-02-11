import { sagasGetCustomerData } from '../../test/testingData'
import { code, decode, runData } from '../crypto'

describe('crypto utils testing',()=>{
    test('code function testing',()=>{
        expect(typeof(code('test string'))).toBe('string')
    })

    test('decode function testing',()=>{
        expect(typeof(decode('test string'))).toBe('string')
    })

    test('runData function testing',()=>{
        const newData=runData(code,sagasGetCustomerData,['email','phone'])
        expect(typeof(newData.email)).toBe('string')
        expect(typeof(newData.phone)).toBe('string')
    })
})