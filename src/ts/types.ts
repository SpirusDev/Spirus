export type Vector = {
	x: number
};

export type Vector2 = {
	x: number,
	y: number
};

export type Collision = {
	up: boolean,
	right: boolean,
	left: boolean,
	down: boolean,

	overall: boolean
}

export type Transform = {
	position: Vector2,
	rotation: Vector,
	scale: Vector2	
};

export type Options = {
	text?: {
		text: string,
		font: Fonts
	}
}

export enum Color {
	red = "#f00",
	orange = "#ffa500",
	yellow = "#ffff00",
	dark_green = "#060",
	green = "#0a0",
	lime = "#0f0",
	dark_blue = "#060",
	blue = "#0f0",
	light_blue = "#7dd3e2",
	purple = "#404",
	black = "#000",
	white = "#fff",

	brown = "#804000",
	yellowish_gray = "#C2B280",
	cloudy_blue = "#d4f1f9"
}

export enum Font {
	Arial = "Arial"
}

export type Type = "px" | "em"
export type Size = number

export type FontSize = `${Size}${Type}`
export type Fonts = `${FontSize} ${Font}`

export enum ObjectType {
	square,
	text
};