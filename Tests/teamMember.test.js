const TeamMembers = require ('../teamMembers');

const teamMembers = new TeamMembers('Linda',112233,'linda@profile.com.au');
    


    test('test whether we can get the constructor value for TeamMember object',()=>{
        expect(teamMembers.name).toBe('Linda');
        expect(teamMembers.id).toBe(112233);
        expect(teamMembers.email).toBe('linda@profile.com.au');

    });

    
        test('using getName() method to get name',()=>{            
            expect(teamMembers.getName()).toBe('Linda');
            });
    


        test('using getId() method to get id',()=>{
            expect(teamMembers.getId()).toBe(112233);
        });

        test('using getEmail() method to get email',()=>{           
            expect(teamMembers.getEmail()).toBe('linda@profile.com.au');
        });
       
        

