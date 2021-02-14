import React from 'react';

class ToDo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      itemList: [],
      submittedItem: '',
      hidden: false
    };

    this.handleChange = (e) => {
      this.setState({ ...this.state, submittedItem: e.target.value });
    }

    this.handleSubmit = (e) => {
      const { itemList, submittedItem } = this.state;
      e.preventDefault();
        
      this.setState({ 
        ...this.state, 
        itemList: [ ...itemList, submittedItem ]
      });
    }
  };

  render() {
    const { itemList } = this.state;

    return (
      <div>
        <h1>To Do</h1>
        <form onSubmit={this.handleSubmit}>
          <input placeholder='Enter Item Name' onChange={this.handleChange}/>
        </form>
        <ul style={{ padding: 32 }}>
          {itemList.map((item, index) => (
            <div key={index} style={{ display: 'flex' }}>
              <input type='checkbox' />
              <li>{item}</li>
            </div>
          ))}
        </ul>
      </div>
    );
  }
};

export default ToDo;