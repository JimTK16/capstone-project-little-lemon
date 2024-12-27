const MenuCategories = () => {
  return (
    <section className="mt-5">
      <div className="container">
        <h3 className="text-center text-uppercase fs-2 fw-bolder">
          Order for delivery!
        </h3>
        <div className="row mt-3 justify-content-center g-3">
          <div className="col-6 col-sm-3 d-flex justify-content-center">
            <button
              type="button"
              className="btn bg-secondary-subtle fw-bold fs-4 px-4"
            >
              Lunch
            </button>
          </div>
          <div className="col-6 col-sm-3 d-flex justify-content-center">
            <button
              type="button"
              className="btn bg-secondary-subtle fw-bold fs-4 px-4"
            >
              Desserts
            </button>
          </div>
          <div className="col-6 col-sm-3 d-flex justify-content-center">
            <button
              type="button"
              className="btn bg-secondary-subtle fw-bold fs-4 px-4"
            >
              Meals
            </button>
          </div>
          <div className="col-6 col-sm-3 d-flex justify-content-center">
            <button
              type="button"
              className="btn bg-secondary-subtle fw-bold fs-4 px-4"
            >
              Specials
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MenuCategories
