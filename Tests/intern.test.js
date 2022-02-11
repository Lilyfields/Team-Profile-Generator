const Intern = require ('../Intern');

const intern= new Intern('Gean','778899','Gean@profile.com.au','UTS');

test('test retrieve of constructor values for the Intern object ', ()=> {
   expect(intern.name).toBe('Gean');;
   expect(intern.id).toBe('778899');
   expect(intern.email).toBe('Gean@profile.com.au');
   expect(intern.school).toBe('UTS')
});

test('testing the getName() method', () => {
    expect(intern.getName()).toBe('Gean');
});

test('testing the getId() method', () => {
    expect(intern.getId()).toBe('778899');
});

test('test the getEmail() method', () =>{
    expect(intern.getEmail()).toBe ('Gean@profile.com.au');
});

test('test the getSchool() method', () =>{
    expect(intern.getSchool()).toBe ('UTS')
});

test('test the getRole() method', () => {
    expect(intern.getRole()).toBe (Intern);
});