const Specials = () => {
  const dishes = [
    {
      title: 'Classic Margherita Pizza',
      description:
        'Traditional pizza with fresh mozzarella, basil, and tomato sauce',
      price: '$12.99',
      image:
        'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: 'Grilled Salmon',
      description:
        'Fresh Atlantic salmon with herb butter and roasted vegetables',
      price: '$18.50',
      image:
        'https://images.unsplash.com/photo-1683327846986-a64f3f3a98d0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: 'Vegetarian Burger',
      description: 'Plant-based patty with avocado, lettuce, and special sauce',
      price: '$14.25',
      image:
        'https://images.unsplash.com/photo-1512152272829-e3139592d56f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  ]

  return (
    <section className="mt-5" id="specials">
      <div className="container">
        <p className="fs-2 fw-bold">This week&apos;s specials</p>
        {dishes.map((dish, index) => (
          <div className="card mb-3 border-0 border-top" key={index}>
            <div className="card-body">
              <div className="row">
                {/* Text Column */}
                <div className="col-7 ps-0 ps-sm-2">
                  <h5 className="card-title fs-3">{dish.title}</h5>
                  <div className="cart-text fs-4">{dish.description}</div>
                  <div className="cart-text h4 text-primary mt-2">
                    {dish.price}
                  </div>
                </div>

                {/* Image Column */}
                <div className="col-5 d-flex align-items-center px-0 px-sm-2">
                  <img
                    src={dish.image}
                    alt={dish.title}
                    className="card-img-top img-fluid rounded  "
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Specials
