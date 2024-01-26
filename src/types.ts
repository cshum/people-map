export interface Name {
    first: string;
    last: string;
}

export interface Location {
    latitude: number | null;
    longitude: number | null;
}

export interface Person {
    _id: string;
    name: Name;
    email: string;
    picture: string;
    location: Location;
}
