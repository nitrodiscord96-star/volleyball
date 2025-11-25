export default function Home() {
  return (
    <div className="home-page">
      <section className="hero-section bg-dark text-white py-5">
        <div className="container text-center py-5">
          <h1 className="display-3 fw-bold mb-4 gradient-text-title">
            Welcome to VolleyBall
          </h1>
          <p className="lead fs-4 mb-4">
            This is the main landing page of the Volleyball application.
          </p>
          <div className="d-flex gap-3 justify-content-center">
            <button className="btn btn-primary btn-lg px-4 py-3">
              Get Started
            </button>
            <button className="btn btn-outline-light btn-lg px-4 py-3">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}