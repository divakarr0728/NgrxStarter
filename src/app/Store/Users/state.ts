import { CustomerModel, Customers } from "../../Model/User.model";
import {createEntityAdapter} from '@ngrx/entity'

export const customerAdopter=createEntityAdapter<Customers>({
    selectId:(customer:Customers)=>customer.id,
    sortComparer:sortbyName
});

export const CustomerState:CustomerModel=customerAdopter.getInitialState({
    errormessage:'',
    isloading:false
});

export function sortbyName(a:Customers,b:Customers){
    return a.email.localeCompare(b.email);
}