import React from 'react';
import Content from './Content.jsx';

export default class App extends React.Component {

   constructor(props) {
      super(props);

      this.state = {
         data: 'Initial data...'
      }
      this.updateState = this.updateState.bind(this);
   }

   updateState(e) {
      // Updating state causes rerender and therefore the Content is passed new props value
      this.setState({data: e.target.value});
   }

   render() {
      return (
         <div>
            <Content
              myDataProp = {this.state.data}
              updateStateProp = {this.updateState}
            />
         </div>
      );
   }
}
