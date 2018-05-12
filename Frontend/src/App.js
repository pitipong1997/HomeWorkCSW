import React, { Component } from 'react';
import './App.css';
import { getCurriculums,createCurriculums,deleteCurriculums } from './actions';
import { connect } from 'react-redux';

class App extends Component {
   state = {
     id:'',
     name:''
    
   }

   componentDidmMount(){
     this.props.getCurriculums();
   }
   handleDelete = (e) => {
     const {id} = e.target;
     this.props.deleteCurriculums(id);
   }
   handleChange =(e)=>{
     var name = e.target.name,
     value = e.target.value;
     this.setState({[name] : value});
   }
   handleSubmit = (e) => {
     e.preventDefault();
     const {name} = this.state;
     this.props.createCurriculums({
       name : name
     });
     this.setState({
       name : ''
     });
   }
   

  render() {
    const {curriculums} = this.props;
    return (
      <div>
      <h1>College of Computing</h1>
      <ul>
{
curriculums.map((curriculum , index) => {
return (
  <li key={curriculums.id}>
{curriculum.id + '. ' + curriculum.name + ' '}
<button id={curriculum.id} onClick={this.handleDelete}>Delete</button>
</li>
)
})
}
      </ul>
      <h1>Add Curriculum</h1>
      <form onSubmit={this.handleSubmit}>
      <input type="text"  name="name"  onChange={this.handleChange} value={this.state.name}/>
      <button type="submmit">Add</button>
      </form>

      

      </div>
    );
  }
}

const mapStatetoProps = ({  curriculums }) => {
  return { curriculums }
}

export default connect(mapStatetoProps , { getCurriculums, createCurriculums,deleteCurriculums})(App);
