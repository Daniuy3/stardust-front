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
