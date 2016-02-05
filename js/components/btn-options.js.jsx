var React = require('react');
var cx = require('classnames');

var BtnOptions = React.createClass({
  render: function(){
    return (
      <div className="grid__cell cell--1of3">
        <h3>Button Options</h3>

        {/* Username input */}
        <div className="form__item">
          <label htmlFor="username">Snapchat username</label>
          <input type="text" id="username" onChange={this.props.updateUsername} />
          <small className="form__instruction">
            *Double check your username as there&#x0027;s no way to verify.
          </small>
        </div>
        
        {/* Size input */}
        <div className="form__item">
          <label>Button size</label>
          <div className="push-top">
            <input type="radio" id="size-default" 
                    name="size" value="default" defaultChecked={true}
                    onChange={this.props.updateSize} />
            <label htmlFor="size-default">Default</label>
            <input type="radio" id="size-large" name="size" value="large"
                    onChange={this.props.updateSize} />
            <label htmlFor="size-large">Large</label>
          </div>
        </div>

        {/* Invert input */}
        <div className="form__item">
          <label>Button appearance</label>
          <div className="push-top">
            <input type="checkbox" id="invert" checked={this.props.isInverted}
                    onChange={this.props.updateInverted} />
            <label htmlFor="invert">Invert</label>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = BtnOptions;
