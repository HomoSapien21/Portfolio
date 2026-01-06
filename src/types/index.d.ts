export interface ContactInfo {
    email: string;
    phone: string;
    linkedin: string;
}


export interface Info {
    name: string;
    designation: string;
    about: string;
    skills: string[];
    contact: ContactInfo;
}

export interface Project {
    title: string;
    description: string;
    "github link": string;
    imageurl: string;
}