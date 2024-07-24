import { Component } from "react";
import { Col, ListGroup } from "react-bootstrap";
import { FaUtensils } from "react-icons/fa6";
import { IoFastFoodSharp } from "react-icons/io5";
import { GiCoffeeCup } from "react-icons/gi";
import axios from "axios";
import { API_KEY } from "../utils/constants";

const Icon = ({ nama }) => {
  if (nama === "Makanan") return <FaUtensils className="mt-1" />;
  if (nama === "Minuman") return <GiCoffeeCup className="mt-0" />;
  if (nama === "Cemilan") return <IoFastFoodSharp className="mt-0" />;

  return;
};

export default class ListCategory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    axios
      .get(API_KEY + "categories")
      .then((res) => {
        const categories = res.data;
        this.setState({ categories });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { categories } = this.state;
    const { changeCategory, categoriYangDiPilih } = this.props;
    return (
      <Col md={2} mt="2">
        <h4>
          <strong>Daftar Kategori</strong>
        </h4>
        <hr />
        <ListGroup>
          {categories &&
            categories.map((category) => (
              <ListGroup.Item
                key={category.id}
                onClick={() => changeCategory(category.nama)}
                className={categoriYangDiPilih === category.nama && "category-aktif"}
                style={{cursor: 'pointer'}}
              >
                <h5>
                  <Icon nama={category.nama} /> {category.nama}
                </h5>
              </ListGroup.Item>
            ))}
        </ListGroup>
      </Col>
    );
  }
}
