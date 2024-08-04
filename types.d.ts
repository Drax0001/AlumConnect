export type EventType = {
    id: number,
    title: string,
    description: string,
    date: string,
    time: string,
    category: string,
    location: string,
    authorId: number,
    attendees: StudentType[]
}

export type StudentType = {
    id: number,
    username: string,
    email: string,
    faculty: string,
    department: string,
    AreasOfFocus: string[],
    events: EventType[],
    // MentorshipRequest
}

export type BlogType = {
    id: number,
    title: string,
    body: string,
    author: AlumniType,
    authorId: number,
    createdAt: string
}

export type AlumniType = {
    id: number,
    username: string, 
    email: string,
    skills: string[],
    mentorshipPreferences: string[],
    jobTitle: string,
    Blogs: BlogType[],
    Events: EventType[],
    // mentorshiprequest
    AreasOfFocus: string[],
}