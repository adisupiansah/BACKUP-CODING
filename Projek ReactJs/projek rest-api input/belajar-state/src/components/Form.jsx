// import React from 'react'
import axios from "axios";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { FaUser } from "react-icons/fa";
import { FaCommentDots } from "react-icons/fa6";

const Formd = ({ fetchData }) => {
  // state input data
  const [input, setInput] = useState("");
  // START STATE KOMENTAR
 const [komentar, setKomentar] = useState("");

 const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://komen-api.vercel.app/items", { name: input, comment: komentar });
      setInput(""); // Mengosongkan input setelah berhasil diupload
      setKomentar(""); // Mengosongkan komentar setelah berhasil diupload
      fetchData();
    } catch (error) {
      console.log("error item:", error);
    }
  };
  

  return (
    <div>
      <Container>
        <div className="row col-12 d-flex justify-content-center align-items-center">
          <div className="col-12 col-md-8">
            <div className="card shadow-sm">
              <div className="card-body d-flex justify-content-center align-items-center flex-column">
                <div className="col-12 col-md-10">
                  <h5 className="text-center mb-4">Form input</h5>

                  <form onSubmit={handleSubmit}>

                    <div className="input-group mt-3">
                      <label className="bg-warning p-2 d-flex justify-content-center align-items-center">
                        <FaUser className="fw-bold" />
                      </label>
                      <input type="text" className="form-control" value={input} onChange={(e) => setInput(e.target.value)} placeholder="name" required/>
                    </div>

                    <div className="input-group mt-3">
                      <label className="bg-warning p-2 d-flex justify-content-center align-items-center">
                        <FaCommentDots className="fw-bold" />
                      </label>
                      <input type="text" className="form-control" value={komentar} onChange={(e) => setKomentar(e.target.value)} placeholder="komentar"/>
                    </div>

                    <div className="tombol d-flex justify-content-center align-items-center">
                      <button className="btn btn-warning mt-3 col-6 col-md-4 fw-bold btn-sm" type="submit">
                        Submit
                      </button>
                    </div>

                  </form>

                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Formd;
