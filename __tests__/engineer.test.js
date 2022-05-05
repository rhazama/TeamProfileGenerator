const Engineer = require('../lib/engineer')

test('create an engineer objext' , () => {
    const engineer = new Engineer('Engine Er', 1, 'engineercompany@test.com');

    expect(engineer.getName()).toBe('Engine Er');
    expect(engineer.getId()).toEqual(expect.any(Number));
    expect(engineer.getEmail()).toBe('engineercompany@test.com');
    expect(engineer.getGithub()).toBe('EngineEr');
    expect(engineer.getRole()).toBe('Engineer');
});