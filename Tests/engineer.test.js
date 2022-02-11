const Engineer = require ('../Engineer');

const engineer= new Engineer('Lily','101112','Lily@profile.com.au','Lilyfields');

test('test retrieve of constructor values for the Intern object ', ()=> {
   expect(engineer.name).toBe('Lily');
   expect(engineer.id).toBe('101112');
   expect(engineer.email).toBe('Lily@profile.com.au');
   expect(engineer.githubUsername).toBe('Lilyfields')
});

test('testing the getName() method', () => {
    expect(engineer.getName()).toBe('Lily');
});

test('testing the getId() method', () => {
    expect(engineer.getId()).toBe('101112');
});

test('test the getEmail() method', () =>{
    expect(engineer.getEmail()).toBe ('Lily@profile.com.au');
});

test('test the getGithubUsername() method', () =>{
    expect(engineer.getGithubUsername()).toBe ('Lilyfields');
});

test('test the getRole() method', () => {
    expect(engineer.getRole()).toBe (Engineer);
});