import { ICharacter } from "@models/character.model";

export interface IGameInformation {
	name: string;
	kanjiName: string;
	tagline: "Trigger Happy Havoc" | "Goodbye Despair" | "Killing Harmony";
	releaseDate: Date;
	platforms: Array<string>;
	staffInfo: {
		writer: string;
		artist: string;
		developer: string;
	};
	characters: ICharacter;
	killingGame: IKillingGameInformation;
}

export interface IKillingGameInformation {
	name: "Killing School Life" | "Killing School Trip" | "Killing School Semester";
	location: "Hope's Peak Academy" | "Jabberwock Island" | "Ultimate Academy for Gifted Juveniles";
	game:
		| "Danganronpa: Trigger Happy Havoc"
		| "Danganronpa 2: Goodbye Despair"
		| "Danganronpa V3: Killing Harmony";
	host: "Monokuma";
	sideHosts?: "Monomi" | "Monokubs";
	participants: {
		totalParticipants: number;
		totalSurvivors: number;
		totalDeaths: number;
		murderers: Array<string>;
		deadParticipants: Array<string>;
	};
	murderers: {
		executionMethod: string;
		victims: Array<string>;
		motives: string;
		relevantChapter: number;
	};
}
