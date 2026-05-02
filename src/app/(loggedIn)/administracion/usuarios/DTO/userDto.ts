import { User, UserCreationData } from "../interfaces"



export const fromUserUpdateData = (user: User): UserCreationData => {
    return {
        id: user.id,
        first_name: user.first_name || "",
        last_name: user.last_name || "",
        email: user.email || "",
        phone: user.profile?.phone || "",
        city: user.profile?.city || "",
        bio: user.bio || "",
        password: "",
        password_confirmation: "",
        roles: user.roles.map(role => role.code as "admin" | "student" | "teacher"),
        birth_date: user.profile?.birth_date ? new Date(user.profile.birth_date) : undefined,
        country: user.profile?.country || "",
        headline: user.profile?.headline || "",
        professional_title: user.profile?.professional_title || "",
        specialization: user.profile?.specialization || "",
        website_url: user.profile?.website_url || "",
        linkedin_url: user.profile?.linkedin_url || "",
        years_experience: user.profile?.years_experience || 0,
    }
}