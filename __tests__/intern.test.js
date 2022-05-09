const Intern = require('../lib/intern')

test('create an intern objext' , () => {
    const intern = new Intern('', 1, '');

    expect(intern.getName()).toBe('');
    expect(intern.getId()).toEqual(expect.any(Number));
    expect(intern.getEmail()).toBe('');
    expect(intern.getSchool()).toBe('');
    expect(intern.getRole()).toBe('Intern');
});