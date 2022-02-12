const Manager = require ('../Manager')

describe("Manager",()=>{
    const sampleManager = {
        name:"Bob",
        id:334455,
        email:"bob@profile.com.au",
        officeNumber:5549,
        role:"Manager",
    };



describe("constructor test",()=>{
    test("construct a new instance the Manager class",()=>{
        const manager = new Manager (sampleManager);
        expect(manager).toBe(Manager);
    });

    test("construct an new instance for Manager class with name,id, email,office number, role",()=>{
        const manager= new Manager(sampleManager);
        expect(manager).toEqual({
            name:"Bob",
            id:334455,
            email:"bob@profile.com.au",
            officeNumber:5549,
            role:"Manager",
        });
    });
});

    describe("method test",()=>{

        test("testing the getName() method",()=>{
            const manager = new Manager(sampleManager);
            expect(manager.getName()).toEqual("Bob");
        });

        test("testing the getId() method",()=>{
            const manager = new Manager(sampleManager);
            expect(manager.getId()).toEqual(334455);
        });

        test("testing the getEmail() method",()=>{
            const manager = new Manager(sampleManager);
            expect(manager.getEmail()).toEqual("bob@profile.com.au");
        });

        test("testing the getOfficeNumber() method",()=>{
            const manager = new Manager (sampleManager);
            expect(manager.getOfficeNumber()).toEqual(5549)

        });

        test("test the getRole() method", ()=>{
            const manager = new Manager (sampleManager);
            expect(manager.getRole()).toEqual("Manager");
        });

    });

    });
