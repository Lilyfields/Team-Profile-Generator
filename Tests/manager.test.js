const Manager = require ('../Manager')

const manager = new Manager('Bob',334455,'bob@profile.com.au',5549);
    


    test('test whether we can get the constructor value for TeamMember object',()=>{
        expect(manager.name).toBe('Bob');
        expect(manager.id).toBe(334455);
        expect(manager.email).toBe('bob@profile.com.au');
        expect(manager.officeNumber).toBe(5549);

    });

    
        test('using getName() method to get name',()=>{            
            expect(manager.getName()).toBe('Bob');
            });
    


        test('using getId() method to get id',()=>{
            expect(manager.getId()).toBe(334455);
        });

        test('using getEmail() method to get email',()=>{           
            expect(manager.getEmail()).toBe('bob@profile.com.au');
        });

        test('using getOfficeNumber() method to get officeNumber',()=>{           
            expect(manager.getOfficeNumber()).toBe(5549);
        });

        test('using getRole() method to get role',()=>{           
            expect(manager.getRole()).toBe('Manager');
        });