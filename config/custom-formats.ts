// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts

export const Formats: import('../sim/dex-formats').FormatList = [

	// Emerald Nuzhacke
	///////////////////////////////////////////////////////////////////

	{
		section: "Emerald Nuzhacke",
	},
	{
		name: "[Gen 9] Emerald Nuzhacke VGC",
		desc: "VGC rules (Team Preview, Species Clause, Item Clause, Level 50, Open Team Sheets, Bring 6 Pick 4), but every Pok&eacute;mon is allowed and any move/ability combination is legal on it.",
		mod: 'gen9',
		gameType: 'doubles',
		bestOfDefault: true,
		ruleset: ['Flat Rules', 'NatDex Mod', 'VGC Timer', 'Open Team Sheets', '!Obtainable Moves', '!Obtainable Abilities', '+LGPE'],
		unbanlist: ['Mythical', 'Restricted Legendary', 'Greninja-Bond'],
	},
];
