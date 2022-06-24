export interface User extends Object{
    id?: number;
    name: string;
    email: string;
    password?: string;
    // profiles: Profile[];
}

// export interface Profile extends Object{
//     id: number;
//     name: string;
//     authority: string;
// }