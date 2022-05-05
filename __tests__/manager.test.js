const Manager = require('../lib/manager')

test('create an manager objext' , () => {
    const manager = new Manager('Mana Ger', 1, 'managercompany@test.com');

    expect(manager.getName()).toBe('Mana Ger');
    expect(manager.getId()).toEqual(1);
    expect(manager.getEmail()).toBe('managercompany@test.com');
    expect(manager.getOfficeNum()).toBe('01');
    expect(manager.getRole()).toBe('manager');
});