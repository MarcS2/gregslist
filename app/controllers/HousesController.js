import { AppState } from "../AppState.js"
import { housesService } from "../services/HousesService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

function _drawHouses() {
  let content = ''
  AppState.houses.forEach(house => content += house.HouseCard)
  setHTML('houseInsert', content)
}

export class HousesController {
  constructor() {
    console.log('Houses Controller loaded');
    _drawHouses()

    AppState.on('houses', _drawHouses)
  }

  newHouse(event) {
    event.preventDefault()
    const houseData = getFormData(event.target)
    console.log('house added', houseData);
    housesService.newHouse(houseData)
    event.target.reset()
  }

  async removeHouse(id) {
    const deleteRequest = await Pop.confirm("Would you like to remove this house ?")

    if (!deleteRequest) {
      return

    }
    housesService.removeHouse(id)
  }


}