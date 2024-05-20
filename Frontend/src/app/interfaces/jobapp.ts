export interface Jobapp {
    id_jobapp:number,
    id_candidate:number,
    id_job:number,
    id_status:number,
    date_application:string,
    jobName:string,
    candidateName:string,
    candidateLastname:string,
    statusDesc:string,
    jobDesc:string,
    cv: string
}

export interface Candidate {
    id_candidate?: number,
    rut: string,
    name: string,
    lastname: string,
    email: string,
    phone: string,
    cv: string
}

export interface Column {
    field: string;
    header: string;
}

export interface Position {
    id_job: number,
    name: string,
    description: string
}

export interface UploadEvent {
    originalEvent: Event;
    files: File[];
}

export interface SaveApp {
    id_job: number,
    id_candidate?:number,
    id_status: number
}

export interface Status {
    id_status: number,
    description: string
}