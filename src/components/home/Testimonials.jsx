function Testimonials() {
  return (
    <section className="container mt-5" id="testimonials">
      <h2 className="text-center mb-4">What our customers say</h2>
      <div className="row">
        <div className="col-md-4 mb-2 ">
          <div className="card border-0">
            <div className="card-body">
              <div className="row">
                <div className="col-4">
                  <img
                    src="https://images.unsplash.com/photo-1607529378676-a20456ee2f6b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className="img-fluid rounded-circle "
                    style={{
                      width: '60px',
                      height: '60px',
                      objectFit: 'cover'
                    }}
                  />
                </div>{' '}
                <div className="col-8">
                  <p className="fs-4">
                    The food was delicious and the staff was friendly!
                  </p>
                  <p className="text-muted">— John Doe, Happy Customer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-2 ">
          <div className="card border-0">
            <div className="card-body">
              <div className="row">
                <div className="col-4">
                  <img
                    src="https://images.unsplash.com/photo-1542596594-649edbc13630?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className="img-fluid rounded-circle "
                    style={{
                      width: '60px',
                      height: '60px',
                      objectFit: 'cover'
                    }}
                  />
                </div>{' '}
                <div className="col-8">
                  <p className="fs-4">
                    My favourite spot for dinner with friends and family!
                  </p>
                  <p className="text-muted">— Elon Mask, Hotel Manager</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-2 ">
          <div className="card border-0">
            <div className="card-body">
              <div className="row">
                <div className="col-4">
                  <img
                    src="https://images.unsplash.com/photo-1474176857210-7287d38d27c6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className="img-fluid rounded-circle "
                    style={{
                      width: '60px',
                      height: '60px',
                      objectFit: 'cover'
                    }}
                  />
                </div>{' '}
                <div className="col-8">
                  <p className="fs-4">Excellent food with great service!</p>
                  <p className="text-muted">— Will Smith, Food Reviewer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
