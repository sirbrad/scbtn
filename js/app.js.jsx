var React = require('react');
var BtnOptions = require('./components/btn-options.js.jsx')
var BtnStage = require('./components/btn-stage.js.jsx')
 
var BtnGenerator = React.createClass({
  getInitialState: function() {
    return {
      username: "ghost",
      btnLarge: false,
      isInverted: false
    }
  },
  updateUsername: function(e){
    var username = e.target.value;
    this.setState({username: username.toLowerCase()});
  },
  updateSize: function(e){
    var selected = e.target.value;
    this.setState({
      btnLarge: (selected == "large") ? true : false
    });
  },
  updateInverted: function(e){
    this.setState({
      isInverted: e.target.checked
    });
  },
  render: function(){
    return (
      <div className="grid">
        <BtnOptions 
            updateUsername={this.updateUsername}
            updateSize={this.updateSize}
            updateInverted={this.updateInverted} />
        <BtnStage 
            username={this.state.username}
            btnLarge={this.state.btnLarge}
            isInverted={this.state.isInverted} />
      </div>
    );
  }
});

React.render(<BtnGenerator />, document.getElementById("js-stage"));
