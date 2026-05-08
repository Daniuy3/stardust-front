export interface RegisterFormValues {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    password_confirmation: string;
    phone: string;
    bio: string;
    country: string;
    city: string;
    birth_date: string;
    headline: string;
    professional_title: string;
    specialization: string;
    years_experience: number | string;
    website_url: string;
    linkedin_url: string;
}


export interface RegisterResponse {
    success: boolean;
    message: string;
    data:    Data;
}

export interface Data {
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


export interface RegisterErrorResponse {
    success: boolean;
    message: string;
    errors:  Record<string, string[]>;
}

export interface RegisterActionResponse {
    success: boolean;
    message: string;
    data?: Data;
    errors?: Record<string, string[]>;
}
