const Intern = require('../Intern');

const intern = new Intern('Gean',667788,'gean@profile.com.au','UTS');
    


    test('test whether we can get the constructor value for TeamMember object',()=>{
        expect(intern.name).toBe('Gean');
        expect(intern.id).toBe(667788);
        expect(intern.email).toBe('gean@profile.com.au');
        expect(intern.school).toBe('UTS');

    });

    
        test('using getName() method to get name',()=>{            
            expect(intern.getName()).toBe('Gean');
            });
    


        test('using getId() method to get id',()=>{
            expect(intern.getId()).toBe(667788);
        });

        test('using getEmail() method to get email',()=>{           
            expect(intern.getEmail()).toBe('gean@profile.com.au');
        });

        test('using getSchool() method to get school',()=>{           
            expect(intern.getSchool()).toBe('UTS');
        });
        test('using getRole() method to get role',()=>{           
            expect(intern.getRole()).toBe('Intern');
        });