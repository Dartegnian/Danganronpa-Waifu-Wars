export interface ICharacter {
	fullName: string;
	talent: string;
	gender: "Male" | "Female" | "Robot";
	birthDate: Date;
	height: number;
	weight: number;
	chestSize: number; // OwO what's this? how sensual.
	previousHighSchool: string;
	killingGameStatus: {
		participatedIn: "Killing School Life" | "Killing School Trip" | "Killing School Semester";
		status: "Alive" | "Deceased" | "Unknown";
		isMurderer: boolean;
		murderMethod?: string;
		executionMethod?: string;
		murderedBy?: string;
		accomplice?: string;
	};
}
