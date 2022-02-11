const Manager = require ('../Manager')

const manager= new Manager('Bob','445566','Bob@profile.com.au','(02) 96105547');

test('test retrieve of constructor values for the Manager object ', ()=> {
   expect(manager.name).toBe('Bob');;
   expect(manager.id).toBe('445566');
   expect(manager.email).toBe('Bob@profile.com.au');
   expect(manager.officeNumber).toBe('(02) 96105547')
});

test('testing the getName() method', () => {
    expect(manager.getName()).toBe('Bob');
});

test('testing the getId() method', () => {
    expect(manager.getId()).toBe('444466');
});

test('test the getEmail() method', () =>{
    expect(manager.getEmail()).toBe ('Bob@profile.com.au');
});

test('test the getOfficeNumber() method', () =>{
    expect(manager.getOfficeNumber()).toBe ('(02) 96105547')
});

test('test the getRole() method', () => {
    expect(manager.getRole()).toBe (Manager);
});