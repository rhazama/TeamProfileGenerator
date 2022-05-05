const Intern = require('../lib/intern')

test('create an intern objext' , () => {
    const intern = new Intern('In Tern', 1, 'intern@test.com');

    expect(intern.getName()).toBe('In Tern');
    expect(intern.getId()).toEqual(expect.any(Number));
    expect(intern.getEmail()).toBe('intern@test.com');
    expect(intern.getSchool()).toBe('University of California Riverside');
    expect(intern.getRole()).toBe('Intern');
});