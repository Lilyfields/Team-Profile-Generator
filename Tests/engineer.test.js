const Engineer = require ('../Engineer');

const engineer = new Engineer('Lily',778899,'lily@profile.com.au','Lilyfields@github');
    


    test('test whether we can get the constructor value for TeamMember object',()=>{
        expect(engineer.name).toBe('Lily');
        expect(engineer.id).toBe(778899);
        expect(engineer.email).toBe('lily@profile.com.au');
        expect(engineer.githubUsername).toBe('Lilyfields@github');

    });

    
        test('using getName() method to get name',()=>{            
            expect(engineer.getName()).toBe('Lily');
            });
    


        test('using getId() method to get id',()=>{
            expect(engineer.getId()).toBe(778899);
        });

        test('using getEmail() method to get email',()=>{           
            expect(engineer.getEmail()).toBe('lily@profile.com.au');
        });

        test('using getGithubUsername() method to get Github Username',()=>{           
            expect(engineer.getGithubUsername()).toBe('Lilyfields@github');
        });
        test('using getRole() method to get role',()=>{           
            expect(engineer.getRole()).toBe('Engineer');
        });

