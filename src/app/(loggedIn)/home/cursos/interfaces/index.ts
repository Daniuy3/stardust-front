
export interface GetCourseResponse {
    message: string;
    data:    Data;
    success: boolean;
}

export interface Data {
    current_page:   number;
    data:           GetCourseData[];
    first_page_url: string;
    from:           number;
    last_page:      number;
    last_page_url:  string;
    links:          Link[];
    next_page_url:  null;
    path:           string;
    per_page:       number;
    prev_page_url:  null;
    to:             number;
    total:          number;
}

export interface GetCourseData {
    id:                       number;
    uuid:                     string;
    teacher_id:               number;
    teacher_display_name:     string;
    domain_id:                number;
    domain_name:              string;
    course_type_id:           number;
    course_type_name:         string;
    modality_id:              number;
    modality_name:            string;
    difficulty_level_id:      number;
    difficulty_level_name:    string;
    title:                    string;
    slug:                     string;
    short_description:        string;
    full_description:         string;
    learning_objectives:      string;
    target_audience:          string;
    prerequisites_text:       string;
    thumbnail_url:            null;
    trailer_video_url:        null;
    language_code:            string;
    estimated_duration_hours: string;
    total_sessions:           number;
    certificate_enabled:      boolean;
    is_free:                  boolean;
    price:                    string;
    currency_code:            string;
    visibility:               string;
    status:                   string;
    published_at:             null;
    starts_at:                null;
    ends_at:                  null;
    deleted_at:               null;
    deleted_by:               null;
    created_at:               Date;
    updated_at:               Date;
}

export interface Link {
    url:    null | string;
    label:  string;
    page:   number | null;
    active: boolean;
}

