const TeamMembers = require ('../Develop/teamMembers');

const teamMembers= new TeamMembers('Linda','112233','Linda@profile.com.au');

test('test retrieve of constructor values for the TeamMember object ', ()=> {
   expect(teamMembers.name).toBe('Linda');;
   expect(teamMembers.id).toBe('112233');
   expect(teamMembers.email).toBe('Linda@profile.com.au');
});

test('testing the getName() method', () => {
    expect(teamMembers.getName()).toBe('Linda');
});

test('testing the getId() method', () => {
    expect(teamMembers.getId()).toBe('112233');
});

test('test the getEmail() method', () =>{
    expect(teamMembers.getEmail()).toBe ('Linda@profile.com.au');
});
test('test the getRole() method', () => {
    expect(teamMembers.getRole()).toBe (TeamMembers);
});
