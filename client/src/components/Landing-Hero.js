export default function Hero() {
    return (
        <header className="h-75">
            <div className="container-fluid h-100 px-5">
                <div className="row h-100  gx-5 justify-content-center align-items-center">
                    <div className="col-lg-6">
                        <div className="text-center text-lg-start mb-5 ml-5">
                            <h1 className="display-1 lh-1 mb-3">Find your Travel Essentials Now.</h1>
                            <p className="lead fw-normal text-muted mb-5">Begin your travels in comfort with Travel Buddi</p>
                            <div className="d-flex flex-column flex-lg-row align-items-center">
                            <a href="/shop" className="btn btn-primary" role="button">Shop Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <img className="mw-100 rounded" src="/img/hero.jpg" alt="travel buddi"/>
                    </div>
                </div>
            </div>
        </header>
    )
}