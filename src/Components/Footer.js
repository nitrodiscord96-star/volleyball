import { useState } from 'react';
import { Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  const [formData, setFormData] = useState({
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const developers = [
    { name: 'Mazen', role: 'Developer', image: 'mazen.jpg' },
    { name: 'Afram Hanna', role: 'Developer', image: 'afram.jpg' },
    { name: 'Mohamed Talha', role: 'Developer', image: 'talha.jpg' },
  ];

  const handleSubmit = async () => {
    if (!formData.email || !formData.message) {
      setStatus({ type: 'error', message: 'Please fill in all fields' });
      return;
    }

    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const serviceID = 'service_5yd3qlb';
      const templateID = 'template_0df78yu';
      const publicKey = 'dGIV6TavAYvsWGH8i';

      const templateParams = {
        username: "test",
        from_email: formData.email,
        message: formData.message,
        to_email: 'mazenmars.work@gmail.com',
        email: 'mazenmars.work@gmail.com'
      };

      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: serviceID,
          template_id: templateID,
          user_id: publicKey,
          template_params: templateParams,
        })
    });
    
    //   email: 'mazenmars.work@gmail.com'
      if (response.ok) {
        setStatus({ 
          type: 'success', 
          message: 'Message sent successfully! We will get back to you soon.' 
        });
        setFormData({ email: '', message: '' });
      } else {
        throw new Error('Failed to send');
      }
    } catch (error) {
      setStatus({ 
        type: 'error', 
        message: 'Failed to send message. Please try again later.' 
      });
    } finally {
      setLoading(false);
      setTimeout(() => setStatus({ type: '', message: '' }), 5000);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <style>{`
        .footer-gradient {
          background: linear-gradient(to bottom, #1a1a1a, #0d0d0d);
        }
        
        .developer-circle {
          width: 80px;
          height: 80px;
          background: #000;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 0.75rem;
          border: 3px solid #0d6efd;
          transition: transform 0.3s ease, border-color 0.3s ease;
          overflow: hidden;
        }
        
        .developer-circle:hover {
          transform: scale(1.1);
          border-color: #0a58ca;
        }
        
        .developer-circle img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .developer-card {
          transition: transform 0.3s ease;
        }
        
        .developer-card:hover {
          transform: translateY(-5px);
        }
        
        .footer-divider {
          height: 2px;
          background: linear-gradient(to right, transparent, #0d6efd, transparent);
          margin: 2rem 0;
        }
        
        .section-title {
          position: relative;
          display: inline-block;
          padding-bottom: 0.5rem;
          margin-bottom: 1.5rem;
        }
        
        .section-title::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 3px;
          background: #0d6efd;
        }

        .contact-form {
          max-width: 600px;
          margin: 0 auto;
        }

        .form-control {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #fff;
          transition: all 0.3s ease;
        }

        .form-control:focus {
          background: rgba(255, 255, 255, 0.15);
          border-color: #0d6efd;
          color: #fff;
          outline: none;
          box-shadow: 0 0 0 0.2rem rgba(13, 110, 253, 0.25);
        }

        .form-control::placeholder {
          color: rgba(255, 255, 255, 0.5);
        }

        .btn-send {
          background: #0d6efd;
          border: none;
          padding: 0.75rem 2rem;
          transition: all 0.3s ease;
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }

        .btn-send:hover:not(:disabled) {
          background: #0a58ca;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(13, 110, 253, 0.4);
        }

        .btn-send:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .spinner {
          display: inline-block;
          width: 18px;
          height: 18px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-top-color: white;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .status-message {
          animation: fadeIn 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="footer-gradient text-white py-5 mt-auto">
        <div className="container">
          {/* About Section */}
          <div className="row mb-4">
            <div className="col-12">
              <h4 className="section-title text-center">About This Project</h4>
              <p className="text-center text-light px-3" style={{ maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
                This website explores the history and fundamentals of volleyball, providing comprehensive information 
                about the sport. Created by students from the Faculty of Sport Sciences - Abo Qir as an academic project 
                under the supervision of <span className="text-primary fw-bold">Dr. Balhah Ashraf</span>.
              </p>
            </div>
          </div>

          <div className="footer-divider"></div>

          {/* Contact Us Section */}
          <div className="row mb-4">
            <div className="col-12">
              <h4 className="section-title text-center">
                <Mail className="me-2" size={24} style={{ marginBottom: '4px' }} />
                Contact Us
              </h4>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-12">
              <div className="contact-form">
                <div className="mb-3">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Your Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={loading}
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    name="message"
                    className="form-control"
                    rows="4"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    disabled={loading}
                  ></textarea>
                </div>
                {status.message && (
                  <div 
                    className={`alert ${status.type === 'success' ? 'alert-success' : 'alert-danger'} status-message`} 
                    role="alert"
                  >
                    {status.type === 'success' ? (
                      <CheckCircle size={20} />
                    ) : (
                      <AlertCircle size={20} />
                    )}
                    <span>{status.message}</span>
                  </div>
                )}
                <div className="text-center">
                  <button 
                    onClick={handleSubmit} 
                    className="btn btn-send text-white"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span className="spinner me-2"></span>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="me-2" size={18} style={{ marginBottom: '2px' }} />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-divider"></div>

          {/* Developers Section */}
          <div className="row mb-4">
            <div className="col-12">
              <h4 className="section-title text-center">Development Team</h4>
            </div>
          </div>

          <div className="row justify-content-center mb-4">
            {developers.map((dev, index) => (
              <div key={index} className="col-md-4 col-sm-6 mb-4">
                <div className="developer-card text-center p-3">
                  <div className="developer-circle">
                    <img 
                      src={dev.image}
                      alt={dev.name}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = `<span class="text-primary fs-2 fw-bold">${dev.name.charAt(0)}</span>`;
                      }}
                    />
                  </div>
                  <h5 className="mb-1">{dev.name}</h5>
                  <p className="text-muted small mb-0 text-white-50">{dev.role}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="footer-divider"></div>

          {/* Copyright */}
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-light">
                &copy; 2025 <span className="text-primary fw-bold">VolleyBall</span> - All rights reserved.
              </p>
              <p className="text-center mb-0 text-muted small mt-2 text-white-50">
                Faculty of Sport Sciences - Abo Qir Academic Project
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;