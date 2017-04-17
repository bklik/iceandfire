export interface IBook {
    id: string;
    url: string;
    name: string;
    isbn: string;
    authors: Array<string>;
    numberOfPages: number;
    publisher: string;
    country: string;
    mediaType: string;
    released: Date;
    characters: Array<string>;
    povCharacters: Array<string>;
}

export interface ICharacter {
    id: string;
    url: string;
    name: string;
    gender: string;
    culture: string;
    born: string;
    died: string;
    titles: Array<string>;
    aliases: Array<string>;
    father: string;
    mother: string;
    spouse: string;
    allegiances: Array<string>;
    books: Array<string>;
    povBooks: Array<string>;
    tvSeries: Array<string>;
    playedBy: Array<string>;
}