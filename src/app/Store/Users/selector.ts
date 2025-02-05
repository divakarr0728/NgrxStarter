import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CustomerModel } from "../../Model/User.model";
import { customerAdopter } from "./state";

const getassociatestate = createFeatureSelector<CustomerModel>('customer');

const customerSeletor = customerAdopter.getSelectors();

export const getcustomerlist = createSelector(getassociatestate, customerSeletor.selectAll)

const selectedentities = createSelector(getassociatestate, customerSeletor.selectEntities)

export const getcustomer = (id: number) => createSelector(selectedentities, (state) => state[id]);

export const getErrormessage=createSelector(getassociatestate,(state)=>state.errormessage);