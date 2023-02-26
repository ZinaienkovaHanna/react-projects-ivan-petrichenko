import { Component } from 'react';

import { v4 as uuidv4 } from 'uuid';

import './employees-add-form.css';

class EmployeesAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      salary: '',
    };
  }

  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.name.trim() !== '' && this.state.salary.trim() !== '') {
      const newData = {
        name: this.state.name,
        salary: this.state.salary,
        increase: false,
        rise: false,
        id: uuidv4(),
      };

      this.setState({
        name: '',
        salary: '',
        increase: '',
        rise: '',
        id: '',
      });

      this.props.onAdd(newData);
    }
  };

  render() {
    const { name, salary } = this.state;

    return (
      <div className="app-add-form">
        <h3>Додайте нового працівника</h3>
        <form className="add-form d-flex">
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="Як його звати?"
            onChange={this.onValueChange}
            name="name"
            value={name}
          />
          <input
            type="number"
            className="form-control new-post-label"
            placeholder="З/П в $?"
            onChange={this.onValueChange}
            name="salary"
            value={salary}
          />

          <button
            type="submit"
            onClick={this.handleSubmit}
            className="btn btn-outline-light"
          >
            Добавить
          </button>
        </form>
      </div>
    );
  }
}

export default EmployeesAddForm;
