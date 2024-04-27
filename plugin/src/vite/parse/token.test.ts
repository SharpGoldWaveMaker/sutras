import { expect, test} from 'vitest'
import { parseToken } from './token'

test("test basic", async () => {
    const testStr = `
    <div>
        <demo path="a" dir/>
        <demo
            path='b' 
        />
    </div>
    `
    const {tokens} = parseToken(testStr)
    expect(tokens[0].path).eq("a")
    expect(tokens[0].dir).eq(true)
    expect(tokens[1].path).eq("b")
    expect(tokens[1].dir).eq(false)
})
