import React, {Component} from 'react';
import LaptopOption from './LaptopOption';
import slugify from 'slugify';

export default class LaptopOptionsDisplay extends Component {
  render() {
    const features = Object.keys(this.props.features).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const options = this.props.features[feature].map(item => {
        const itemHash = slugify(JSON.stringify(item));
        return (
          <LaptopOption 
            itemHash={itemHash}
            item={item}
            feature={feature}
            updateFeature={this.props.updateFeature}
            {...this.props}
          />
        );
      });

      return (
        <fieldset className="feature" key={featureHash}>
          <legend className="feature__name">
            <h3>{feature}</h3>
          </legend>
          {options}
        </fieldset>
      );
    });
    return(
      <form className="main__form">
        <h2>Customize your laptop</h2>
        {features}
      </form>
    )
  }
}