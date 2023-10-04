import { AppState } from "../AppState.js";
import { House } from "../models/House.js"
import { saveState } from "../utils/Store.js";

function _saveHouses() {
  saveState('houses', AppState.houses)
}


class HousesService {
  newHouse(houseData) {
    const newHouse = new House(houseData)
    console.log('new house', houseData);
    AppState.houses.push(new House(houseData))
    _saveHouses()
    AppState.emit('houses')
  }
}



export const housesService = new HousesService()