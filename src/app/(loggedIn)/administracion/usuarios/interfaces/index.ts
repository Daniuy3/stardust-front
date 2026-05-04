
export interface GetUsersResponse {
    success: boolean;
    message: string;
    data:    Data;
}

export interface Data {
    current_page: number;
    per_page:     number;
    total:        number;
    last_page:    number;
    data:         User[];
}

export interface User {
    id:           number;
    first_name:   string;
    last_name:    string;
    display_name: string;
    email:        string;
    status:       string;
    avatar_url:   string;
    bio:          string;
    roles:        Role[];
    profile:      Profile;
}

export type RoleType = "admin" | "student" | "teacher";
interface OptionalFields {
    id?: number;
    phone?: string;
    bio?: string;
    country?: string;
    city?: string;
    birth_date?: Date ;
    headline?: string;
    professional_title?: string;
    specialization?: string;
    years_experience?: number;
    website_url?: string;
    linkedin_url?: string;
}
export interface UserCreationData extends OptionalFields {
    
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    password_confirmation: string;
    roles: RoleType[];
}

export interface UserUpdateData extends OptionalFields {
    first_name?: string;
    last_name?: string;
    email?: string;
    password?: string;
    password_confirmation?: string;
    status?: string;
    roles?: RoleType[];
}
export interface Profile {
    user_id:            number;
    phone:              string;
    country:            string;
    city:               string;
    birth_date:         Date;
    headline:           string;
    professional_title: string;
    specialization:     string;
    years_experience:   number;
    website_url:        string;
    linkedin_url:       string;
}

export interface Role {
    id:          number;
    code:        string;
    name:        string;
    description: string;
}


export type UserFormValues = {
    first_name: string
    last_name: string
    email: string
    password: string
    password_confirmation: string
    roles: RoleType[]
    
    phone: string
    bio: string
    country: string
    city: string
    birth_date: string
    headline: string
    professional_title: string
    specialization: string
    years_experience: number
    website_url: string
    linkedin_url: string
}

export interface DetailedUserResponse {
    success: boolean;
    message: string;
    data:    User;   
}