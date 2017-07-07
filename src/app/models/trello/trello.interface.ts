export interface ITrelloOrganization {
	displayName: string;
	id: string;
}

export interface ITrelloUser {
	avatarHash: string;
	fullName: string;
	id: string;
	organizations: ITrelloOrganization[];
	username: string;
}

export interface ITrelloProjectBoard {
	name: string;
	idOrganization: string;
	idBoardSource?: string;
	prefs_permissionLevel: string;
}
