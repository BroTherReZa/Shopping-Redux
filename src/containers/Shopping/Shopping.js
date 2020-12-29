import React from "react";
import Controls from "../../components/Controls/Controls";
import Order from "../../components/Order/Order";
import Modal from "../../components/UI/Modal/Modal";
import Wrapper from "../../hoc/Wrapper";
import axios from "../../axios-orders";
import Loader from "../../components/UI/Loader/Loader";

const prices = {
  product1: 20,
  product2: 30,
  product3: 40,
  product4: 50,
};
class Shopping extends React.Component {
  state = {
    products: null,
    totalPrice: 0,
    purchased: false,
    loading: false,
  };
  componentDidMount() {
    //console.log(this.props)
    axios
      .get(
        "https://react-redux-main-33f7e-default-rtdb.firebaseio.com/products.json"
      )
      .then((res) => {
        this.setState({ products: res.data });
      });
  }
  addProductHandler = (type) => {
    const prevCount = this.state.products[type];
    const updatedCount = prevCount + 1;
    const updatedProducts = {
      ...this.state.products,
    };
    updatedProducts[type] = updatedCount;
    // mohasebe tedad har mahsol
    const priceAdd = prices[type];
    const prevPrice = this.state.totalPrice;
    const newPrice = prevPrice + priceAdd;

    this.setState({
      totalPrice: newPrice,
      products: updatedProducts,
    });
    //console.log(newPrice)
  };
  removeProductHandler = (type) => {
    const prevCount = this.state.products[type];
    const updatedCount = prevCount - 1;
    const updatedProducts = {
      ...this.state.products,
    };
    updatedProducts[type] = updatedCount;
    // mohasebe tedad har mahsol
    const priceSub = prices[type];
    const prevPrice = this.state.totalPrice;
    const newPrice = prevPrice - priceSub;

    this.setState({
      totalPrice: newPrice,
      products: updatedProducts,
    });
    //console.log(newPrice)
  };
  purchasedHandler = () => {
    this.setState({ purchased: true });
  };
  modalCloseHandler = () => {
    this.setState({ purchased: false });
  };
  purchasedContinueHandler = () => {
    this.setState({ loading: true });
    const order = {
      products: this.state.products,
      price: this.state.totalPrice,
      customer: {
        name: "Reza",
        email: "brother_reza@yahoo.com",
      },
    };
    axios
      .post("/orders.json", order)
      .then((res) => {
        this.setState({ loading: false, purchased: false });
        this.props.history.push("/checkout");
      })
      .catch((error) => {
        this.setState({ loading: false, purchased: false });
      });
  };
  render() {
    let order = null;
    if (this.state.loading) {
      order = <Loader />;
    }

    let controls = <Loader />;
    if (this.state.products) {
      controls = (
        <Controls
          productAdd={this.addProductHandler}
          productRemove={this.removeProductHandler}
          total={this.state.totalPrice}
          order={this.purchasedHandler}
        />
      );
      order = (
        <Order
          products={this.state.products}
          total={this.state.totalPrice}
          continue={this.purchasedContinueHandler}
          cancel={this.modalCloseHandler}
        />
      );
    }
    return (
      <Wrapper>
        <Modal show={this.state.purchased} modalClose={this.modalCloseHandler}>
          {order}
        </Modal>
        {controls}
      </Wrapper>
    );
  }
}

export default Shopping;
