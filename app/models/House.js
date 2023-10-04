import { generateId } from "../utils/GenerateId.js";

export class House {
  constructor(data) {
    this.id = data.id || generateId()
    this.year = data.year
    this.name = data.name
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.sqft = data.sqft
    this.price = data.price
    this.description = data.description
    this.imgUrl = data.imgUrl

  }
  get HouseCard() {
    return `<section class="row justify-content-center">

    <div class="col-10 ">
      <div class="d-flex m-3 mt-4 border border-3 border-dark shadow">

        <img class="house-img "
        src="${this.imgUrl}"
        alt="house">
      <div class="p-3 fs-4 house-txt">
        <p class="fs-2 m-0">${this.name}</p>
        <p>Price: ${this.price}</p>
        <p>Year: ${this.year}</p>
        <p>${this.bedrooms} Bedrooms, ${this.bathrooms} Bathrooms, ${this.sqft} Square Feet,</p>
        <p>Description: ${this.description}</p>
        <div class="text-end ">
        <button type="button" class="btn btn-danger" onclick="app.HousesController.removeHouse('${this.id
      }')">Sold!</button>
        </div>
      </div>
    </div>
  </section>
    
    `
  }
}