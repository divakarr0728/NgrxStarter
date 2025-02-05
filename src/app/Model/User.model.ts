import { EntityState } from "@ngrx/entity"

export interface Customers{
    id:number,
    name:string,
    username:string,
    email:string,
    // type:string,
    // address:string,
    // associategroup:string,
    // status:boolean
}

export interface CustomerModel extends EntityState<Customers>{
     errormessage:string,
     isloading:boolean
}