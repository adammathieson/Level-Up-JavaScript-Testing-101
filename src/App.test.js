import { add, total } from './App'

// Unit test
// It only tests one thing
test('add', () => {
    // const value = add(1,2)
    // expect(value).toBe(3)
    expect(add(1,2)).toBe(3)
    expect(add(10,15)).toBe(25)
})

test('total', () => {
    expect(total(5, 20)).toBe('$25')
})

