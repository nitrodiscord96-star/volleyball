import {useState, useEffect} from "react";

export default function Feedbacks() {
  const [form, setForm] = useState({
    email: "",
    textarea: "",
  });


  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem("feedbacks")) ?? [];
    setFeedback(storage);
  }, []);

  function handleClickFeed() {
    const updated = [...feedback, form];

    localStorage.setItem("feedbacks", JSON.stringify(updated));

    setFeedback(updated);

    setForm({ email: "", textarea: "" });
  }
  
  return (
    <div className="hero-section bg-dark text-white text-left py-5 bg-dark vh-100">
      <div className=" bg-white p-4 rounded border-50 border-primary m-auto " style={{width: "80%"}}>
          <h1 className="text-black fw-bold mb-4">Feedback Form</h1>
          <div>
            <label htmlFor="email" className="form-label text-black">Email</label>
            <input
              id="email"
              type="email"
              value={form.email}
              onChange={(e) => setForm({...form, email: e.target.value})}s
              placeholder="name@example.com"
              className="form-control mb-3"
            />
          </div>
          <div>
            <label htmlFor="feedback" className="form-label text-black">Feedbacks</label>
            <textarea
              id="feedback"
              type="email"
              value={form.textarea}
              onChange={(e) => setForm({...form, textarea: e.target.value})}
              placeholder="Write Your Feedback Here."
              className="form-control mb-5"
              style={{maxHeight: "150px"}}
            />
          </div>
          <button onClick={handleClickFeed} type="button" className="btn btn-primary w-100">Submit</button>
      </div>
    </div>
  );
}