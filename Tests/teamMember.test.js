const TeamMembers = require ('../teamMembers');

describe("TeamMembers",()=>{
    const sampleTeamMember = {
        name:"Linda",
        id:112233,
        email:"linda@profile.com.au",
    };



describe("constructor test",()=>{
    test("construct a new instance the TeamMember class",()=>{
        const teamMember = new TeamMembers (sampleTeamMember);
        expect(teamMember).toBeInstanceOf(TeamMembers);
    });

    test("construct an new instance for TeamMember class with name,id, email",()=>{
        const teamMember = new TeamMembers (sampleTeamMember);
        expect(teamMember).toEqual({
            name:"Linda",
            id: 112233,
            email:"linda@profile.com.au",
        });
    });
});

    describe("method test",()=>{

        test("testing the getName() method",()=>{
            const teamMember = new TeamMembers(sampleTeamMember);
            expect(teamMember.getName()).toBe("Linda");
        });

        test("testing the getId() method",()=>{
            const teamMember = new TeamMembers(sampleTeamMember);
            expect(teamMember.getId()).toBe(112233);
        });

        test("testing the getEmail() method",()=>{
            const teamMember = new TeamMembers(sampleTeamMember);
            expect(teamMember.getEmail()).toBe("linda@profile.com.au");
        });

        });

    });

