export const HousesView = `
<div class="container-fluid">
      <section class="row">
        <div class="col-12 p-3">
          <h1>Houses</h1>
        </div>
      </section>
      <section class="row justify-content-center">
        <div class="col-12 col-md-8">
          <form onsubmit="app.HousesController.newHouse(event)">
            <div class="mb-2">
              <label for="name">Name</label>
            <input id="name" type="text" name="name" placeholder="First and Last" maxlength="80" minlength="2" required>
            </div>
            <div class="mb-2">
              <label for="year">Year</label>
              <input id="year" type="number" name="year" max='2025' placeholder="Year Built" required>
            </div>
            <div class="mb-2">
              <label for="bedrooms">Bedrooms</label>
              <input id="bedrooms" type="number" name="bedrooms" placeholder="Number Of Bedrooms" min="1" max="30" required>
            </div>
            <div class="mb-2">
              <label for="bathrooms">Bathrooms</label>
              <input id="bathrooms" type="number" name="bathrooms" placeholder="Number Of Bathrooms" min="1" max="20" required>
            </div>
            <div class="mb-2">
              <label for="sqft">Square Feet</label>
              <input id="sqft" type="number" name="sqft" placeholder="Square Feet" min="100" max="50000" required>
            </div>
            <div class="mb-2">
              <label for="price">Price</label>
              <input id="price" type="number" name="price" placeholder="Price Amount" min="1" max="3000000" required>
            </div>
            <div class="mb-2">
              <label for="imgUrl">Image URL</label>
              <input id="imgUrl" type="text" name="imgUrl" placeholder="Image URL" maxlength="400" required>
            </div>
            <div class="mb-2">
              <label for="description">Description</label>
              <textarea name="description" id="description" cols="1" rows="5" placeholder="House Description"
                maxlength="350"></textarea>
            </div>

            <div>
              <button type="submit" class="btn btn-danger">Submit</button>
            </div>

          </form>
        </div>
      </section>
      <section class="row" id="houseInsert">

      </section>
    </div>
`
