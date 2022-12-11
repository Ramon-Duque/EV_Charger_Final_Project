export interface Activities {
    name: string;
    rating: number;
    vicinity: string;
    photos: Photos[];
    plus_code: PostalCode[];
    // latitude: number;
    // longitude: number;
}

export interface Photos {
    html_attributions: string;
    photo_reference: string;
}

export interface PostalCode {
    compound_code: string;
    global_code: string;
}
