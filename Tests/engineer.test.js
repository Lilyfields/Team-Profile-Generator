const Engineer = require ('../Engineer');

describe("Engineer",()=>{
    const sampleEngineer = {
        name:"Lily",
        id:101122,
        email:"lily@profile.com.au",
        githubUsername:"Lilyfields",
    };



describe("constructor test",()=>{
    test("construct a new instance the Engineer class",()=>{
        const engineer = new Engineer (sampleEngineer);
        expect(engineer).toBe(Engineer);
    });

    test("construct an new instance for Engineer class with name,id, email, Github Username",()=>{
        const engineer = new Engineer(sampleEngineer);
        expect(engineer).toEqual({
            name:"Lily",
            id: 101122,
            email:"lily@profile.com.au",
            githubUsername:"Lilyfields",
        });
    });
});

    describe("method test",()=>{

        test("testing the getName() method",()=>{
            const engineer = new Engineer(sampleEngineer);
            expect(engineer.getName()).toEqual("Lily");
        });

        test("testing the getId() method",()=>{
            const engineer = new Engineer(sampleEngineer);
            expect(engineer.getId()).toEqual(101122);
        });

        test("testing the getEmail() method",()=>{
            const engineer = new Engineer(sampleEngineer);
            expect(engineer.getEmail()).toEqual("lily@profile.com.au");
        });

        test("testing the getGithubUsername() method",()=>{
            const engineer = new Engineer(sampleEngineer);
            expect(engineer.getGithubUsername()).toEqual("Lilyfields");
        });

        });

    });