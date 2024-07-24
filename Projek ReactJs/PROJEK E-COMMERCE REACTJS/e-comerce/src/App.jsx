import { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
import swal from "sweetalert";
import axios from "axios";
import { API_KEY } from "./utils/constants";
import Navigasi from './components/Navigasi'
import Hasil from "./components/Hasil";
import Menus from "./components/Menus";
import ListCategory from "./components/ListCategory";


export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menus: [],
      categoriYangDiPilih: "Makanan",
      keranjangs: [],
    };
  }

  componentDidMount() {
    axios
      .get(API_KEY + "products?category.nama=" + this.state.categoriYangDiPilih)
      .then((res) => {
        const menus = res.data;
        this.setState({ menus });
      })
      .catch((error) => {
        console.log(error);
      });

      // memanfaatkan state keranjangs untuk ditampilkan di hasil
      axios
      .get(API_KEY + "keranjangs")
      .then((res) => {
        const keranjangs = res.data;
        this.setState({ keranjangs });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // componentDidUpdate akan selalu jalan dan terus melakukan perbuhan pada state tanpa harus me refres ulang website
  componentDidUpdate(prevState)  {
    if (this.state.keranjangs !== prevState.keranjangs ) {
      axios
      .get(API_KEY + "keranjangs")
      .then((res) => {
        const keranjangs = res.data;
        this.setState({ keranjangs });
      })
      .catch((error) => {
        console.log(error);
      });
    }
  }

  changeCategory = (value) => {
    this.setState({
      categoriYangDiPilih: value,
      menus: [],
    });
    axios
      .get(API_KEY + "products?category.nama=" + value)
      .then((res) => {
        const menus = res.data;
        this.setState({ menus });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // ini logic masuk keranjang, ketika card makanan di tekan
 masukKeranjang = (value) => {

    // sebelum di simpan get dlu keranjang belanjanya apakah sama atw tidak? jika sama cukup jumlah dan total harga saj ayang bertambah
    axios
    .get(API_KEY + "keranjangs?product.id=" + value.id)
    .then((res) => {
      // kalau berhasil kita cek dlu
      if (res.data.length === 0 ) {
        // variable keranjang cek
        const keranjang = {
          jumlah: 1,
          total_harga: value.harga,
          product: value 
        }
      
        // axios pengecekan
        axios
            .post(API_KEY +"keranjangs", keranjang)
            .then(() => {
              swal({
                title: "sukses masuk keranjang",
                // di sini tambahkan keranjang.product.nama untuk memanggil nama produk yang di pilih di alert
                text: "berhasil masuk di keranjang: "+keranjang.product.nama,
                icon: "success",
                button: false,
                timer: 1000,
              });
            })
            .catch((error) => {
              console.log(error);
            });
      } else {
      // kalau ada gimana ?
      const keranjang = {
        jumlah: res.data[0].jumlah+1,
        total_harga: res.data[0].total_harga+value.harga,
        product: value 
      };

      // kalau berhasil kita put menggunakan metode put json-server
      axios
            .put(API_KEY +"keranjangs/"+res.data[0].id, keranjang)
            .then(() => {
              swal({
                title: "sukses masuk keranjang",
                // di sini tambahkan keranjang.product.nama untuk memanggil nama produk yang di pilih di alert
                text: "berhasil masuk di keranjang: "+keranjang.product.nama,
                icon: "success",
                button: false,
                timer: 1000,
              });
            })
            .catch((error) => {
              console.log(error);
            });
      
      }

    })
    .catch((error) => {
      console.log(error);
    });
 }

  render() {
    const { menus, categoriYangDiPilih, keranjangs } = this.state;
    return (
      <div>
        <Navigasi/>
        <div className="mt-4">
          <Container>
            <Row>
              <ListCategory
                changeCategory={this.changeCategory}
                categoriYangDiPilih={categoriYangDiPilih}
              />
              <Col>
                <h4>
                  <strong>Daftar Produk</strong>
                </h4>
                <hr />
                <Row>
                  {menus &&
                    menus.map((menu) => (
                      <Menus
                        key={menu.id}
                        menu={menu}
                        masukKeranjang={this.masukKeranjang}
                      />
                    ))}
                </Row>
              </Col>
              <Hasil keranjangs={keranjangs}/>
            </Row>
          </Container>
        </div>

      </div>
    );
  }
}
