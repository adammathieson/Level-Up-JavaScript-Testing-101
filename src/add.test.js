import { add } from './add'


// Unit test
// It only tests one thing
test('add', () => {
    // const value = add(1,2)
    // expect(value).toBe(3)
    expect(add(1,2)).toBe(3)
    // expect(add).toHaveBeenCalledTimes(1)
    // expect(add).toHaveBeenCalledWith(1,2)
    // expect(add(10,15)).toBe(25)
})