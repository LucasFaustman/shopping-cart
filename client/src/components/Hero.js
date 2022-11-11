export default function Hero() {
    return (
        <header className="mb-5">
            <div className="container-fluid px-5">
                <div className="row gx-5 align-items-center">
                    <div className="col-lg-6">
                        <div className="mb-5 mb-lg-0 text-center text-lg-start">
                            <h1 className="display-1 lh-1 mb-3">Find your Fall Essentials Now.</h1>
                            <p className="lead fw-normal text-muted mb-5">Get out of the Vancouver rain with our new fall products.</p>
                            <div className="d-flex flex-column flex-lg-row align-items-center">
                            <a href="/shop" className="btn btn-primary" role="button">Shop Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <img className="w-75" src="/img/hero.jpg" alt="lucas faustman"/>
                    </div>
                </div>
            </div>
        </header>
    )
}