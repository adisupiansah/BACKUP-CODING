import { Container } from 'react-bootstrap';
import { FaUserCircle } from "react-icons/fa";

const Komentar = ({ items }) => {
  return (
    <div className='clas-komentar'>
      <Container>
            <div className="card border-0 shadow">
                <div className="card-body">
                    <div className="row d-flex justify-content-center align-item-center">
                        <div className="col-11">
                            {items.map((item) => (
                            <div key={item.id} className="card mt-3 kartu-komentar">
                                <div className="card-header">
                                    <div className="input-group">
                                      <FaUserCircle className="fw-bold fs-4" />
                                        <h6 className="fw-bold mx-2">{item.name}</h6>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <p className='hasil-komentar'>{item.comment}</p>
                                </div>
                            </div>

                            ))}

            
                        </div>
                    </div>
                </div>
            </div>
      </Container>
    </div>
  )
}

export default Komentar
