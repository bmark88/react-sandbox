import React from 'react';

class ToDo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      itemList: [],
      submittedItem: ''
    };
  };

  render() {
    const { itemList, submittedItem } = this.state;

    return (
      <div>
        <h1>To Do</h1>
        <form onSubmit={(e) => {
          e.preventDefault();
        
          this.setState({ ...this.state, itemList: [ ...itemList, submittedItem ]});
        }}>
          <input placeholder='Enter Item Name' onChange={(e) => this.setState({ ...this.state, submittedItem: e.target.value })}/>
        </form>
        <ul>
          {itemList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
};

export default ToDo;