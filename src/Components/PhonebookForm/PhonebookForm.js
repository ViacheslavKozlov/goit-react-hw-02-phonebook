import React, { Component } from "react";
import style from "./PhonebookForm.module.css";
// import PropTypes from "prop-types";
// import { v4 as uuidv4 } from "uuid";

class PhonebookForm extends Component {
  //   static propTypes = {
  //     onSubmit: PropTypes.func.isRequired
  //   };

  state = {
    name: "",
    number: ""
  };

  handleChange = evt => {
    // const { name, value } = evt.currentTarget;
    this.setState({ [evt.currentTarget.name]: evt.target.value });
  };

  resetForm = () => {
    this.setState({
      //   id: "",
      name: "",
      number: ""
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    this.props.onSubmit(this.state.name, this.state.number);
    this.resetForm();
  };

  render() {
    return (
      <form className={style.formWarpper} onSubmit={this.handleSubmit}>
        <div className={style.formInputWarpper}>
          <label className={style.lableName} htmlFor="name">
            Name
            <input
              className={style.inputField}
              type="text"
              name="name"
              value={this.state.name}
              autocomplete="off"
              onChange={this.handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
            />
          </label>
        </div>
        <div className={style.formInputWarpper}>
          <label className={style.lableName} htmlFor="number">
            Number
            <input
              className={style.inputField}
              type="tel"
              name="number"
              value={this.state.number}
              autocomplete="off"
              onChange={this.handleChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
            />
          </label>
        </div>
        <button className={style.formBtn} type="submit">
          Add contact to phonebook
        </button>
      </form>
    );
  }
}

export default PhonebookForm;
