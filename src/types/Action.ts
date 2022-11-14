import { ActionsType } from "./ActionsType";

export interface Action {
  type: ActionsType,
  payload: any
}