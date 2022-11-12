export default function Testimonials() {
    return (

<section className="bg-light">
  <div className="row text-center ">
    <div className="col-md-12">
      <div id="carouselBasicExample" className="carousel slide carousel-dark" data-mdb-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <p className="lead font-italic mx-4 mx-md-5">
              "I love using Travel Buddi. I brought all the whole collection on my last flight and I was comfortable the whole way!"
            </p>
            <div className="mt-5 mb-4">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                className="rounded-circle img-fluid shadow-1-strong" alt="testimonial" width="100"
                height="100" />
            </div>
            <p className="text-muted mb-0">- Anna Morian</p>
          </div>


          <div className="carousel-item">
            <p className="lead font-italic mx-4 mx-md-5">
              "Comfort has never been easier"
            </p>
            <div className="mt-5 mb-4">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(31).webp"
                className="rounded-circle img-fluid shadow-1-strong" alt="testimonial" width="100"
                height="100" />
            </div>
            <p className="text-muted mb-0">- Teresa May</p>
          </div>


          <div className="carousel-item">
            <p className="lead font-italic mx-4 mx-md-5">
              "I LOVE Travel Buddi! The neck pillow has changed my flying life!"
            </p>
            <div className="mt-5 mb-4">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
                className="rounded-circle img-fluid shadow-1-strong" alt="testimonial" width="100"
                height="100" />
            </div>
            <p className="text-muted mb-0">- Kate Allise</p>
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-mdb-target="#carouselBasicExample"
          data-mdb-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-mdb-target="#carouselBasicExample"
          data-mdb-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </div>
</section>
    )
}