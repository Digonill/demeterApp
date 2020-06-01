import { Role } from "./role";

export class UserDTO {
    id?: string;
    email: string;
    password: string;
    firstName:string;
    lastName:string;
    enabled?:boolean;
    roles?: Array<Role>;
}