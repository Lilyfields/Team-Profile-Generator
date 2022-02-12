const Intern = require('../Intern');

describe("Intern",()=>{
    const sampleIntern = {
        name:"Gean",
        id:778899,
        email:"gean@profile.com.au",
        school:"UTS",
        role:"Intern",
    };


describe("constructor test",()=>{
    test("construct a new instance the Intern class",()=>{
        const intern = new Intern (sampleIntern);
        expect(intern).toBe(Intern);
    });

    test("construct an new instance for Intern class with name,id, email,school",()=>{
        const intern= new Intern(sampleIntern);
        expect(intern).toEqual({
            name:"Gean",
            id: 778899,
            email:"gean@profile.com.au",
            school:"UTS",
            role:"Intern",
        });
    });
});

    describe("method test",()=>{

        test("testing the getName() method",()=>{
            const intern = new Intern(sampleIntern);
            expect(intern.getName()).toEqual("Gean");
        });

        test("testing the getId() method",()=>{
            const intern = new Intern(sampleIntern);
            expect(intern.getId()).toEqual(778899);
        });

        test("testing the getEmail() method",()=>{
            const intern = new Intern(sampleIntern);
            expect(intern.getEmail()).toEqual("gean@profile.com.au");
        });

        test("test the getSchool() method", ()=>{
            const intern = new Intern(sampleIntern);
            expect(intern.getSchool()).toEqual("UTS");
        });

        test("test the getRole() method",()=>{
            const intern = new Intern(sampleIntern);
            expect(intern.getRole()).toEqual("Intern");
        });

        });

    });
