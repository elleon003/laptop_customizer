import React, {Component} from 'react';

export default class LaptopOptionsDisplay extends Component {
  render() {
    return(
      <form className="main__form">
        <h2>Customize your laptop</h2>
        {features}
      </form>
    )
  }
}