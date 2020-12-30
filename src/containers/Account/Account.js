import React from "react";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import "./Account.css";
import axios from "../../axios-orders";

class Account extends React.Component {
  state = {
    form: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Name ...",
        },
        value: "",
        vaildation: {
          required: true,
        },
        valid: false,
        used: false,
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Email ...",
        },
        value: "",
        vaildation: {
          required: true,
        },
        valid: false,
        used: false,
      },
      password: {
        elementType: "input",
        elementConfig: {
          type: "password",
          placeholder: "Password ...",
        },
        value: "",
        vaildation: {
          required: true,
        },
        valid: false,
        used: false,
      },
    },
  };
  submitHandler = (event) => {
    event.preventDefault();
    const formData = {};

    for (let item in this.state.form) {
      formData[item] = this.state.form[item].value;
    }
    axios
      .post("/accounts.json", formData)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  checkValidation = (value, rules) => {
    let isValid = false;
    if (rules.required) {
      isValid = value.trim() !== "";
    }
    return isValid;
  };
  inputChangeHandler = (event, inputElement) => {
    const updatedForm = {
      ...this.state.form,
    };
    const updatedElement = { ...updatedForm[inputElement] };
    updatedElement.value = event.target.value;
    updatedElement.valid = this.checkValidation(
      updatedElement.value,
      updatedElement.vaildation
    );
    updatedElement.used = true;
    updatedForm[inputElement] = updatedElement;
    this.setState({ form: updatedForm });
    //console.log(updatedElement);
  };
  render() {
    const elementsArray = [];
    for (let item in this.state.form) {
      elementsArray.push({
        id: item,
        config: this.state.form[item],
      });
    }
    return (
      <div className="account">
        <h2>Account</h2>
        <form onSubmit={this.submitHandler}>
          {elementsArray.map((item) => (
            <Input
              key={item.id}
              inputType={item.config.elementType}
              elementConfig={item.config.elementConfig}
              value={item.config.value}
              invalid={!item.config.valid}
              used={item.config.used}
              change={(event) => this.inputChangeHandler(event, item.id)}
            />
          ))}
          <Button btnType="form">Submit</Button>
        </form>
      </div>
    );
  }
}

export default Account;
