export interface TransformedMeetTheTeam {
    Id: string;
    name: string;
    image: string;
    designation: string;
    bio: string;
}

export interface MeetTheTeamData {
    Id: string;
    name: string;
    image: { url: string };
    designation: string;
    bio: string;
}