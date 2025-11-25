const Footer = () => {
  return (
    <footer className="footer bg-dark text-white text-center py-4 mt-auto">
      <div className="container">
        <p className="mb-0">
          &copy; {new Date().getFullYear()} VolleyBall. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;