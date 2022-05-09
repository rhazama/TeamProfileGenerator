const Engineer = require('../lib/engineer')

test('create an engineer objext' , () => {
    const engineer = new Engineer('', 1, '');

    expect(engineer.getName()).toBe('');
    expect(engineer.getId()).toEqual(expect.any(Number));
    expect(engineer.getEmail()).toBe('');
    expect(engineer.getGithub()).toBe('');
    expect(engineer.getRole()).toBe('Engineer');
});