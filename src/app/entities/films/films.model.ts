export interface Films extends Object{
    title: string;
    episode_id: string;
    opening_crawl: string;
    director: string;
    producer: string;
    release_date: string;
    characters: string[];  
    planets: string[];  
    starships: string[];  
    vehicles: string[];  
    species: string[];  
    created: string;  
    edited: string;  
    url: string;  
}

export interface FilmsResult {
    count: number;
    results: Films[];
}
