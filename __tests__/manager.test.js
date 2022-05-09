const Manager = require('../lib/manager')

test('create an manager objext' , () => {
    const manager = new Manager('', 1, '');

    expect(manager.getName()).toBe('');
    expect(manager.getId()).toEqual(1);
    expect(manager.getEmail()).toBe('');
    expect(manager.getOfficeNum()).toBe('');
    expect(manager.getRole()).toBe('Manager');
});