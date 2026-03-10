export type bowler = {
    bowlerId: number;
    bowlerLastName: string;
    bowlerFirstName: string;
    bowlerMiddleInit: string;
    bowlerAddress: string;
    bowlerCity: string;
    bowlerState: string;
    bowlerZip: number;
    bowlerPhoneNumber: number;
    team: {
        teamId: number;
        teamName: string;
    } | null;
}
