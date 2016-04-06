var React = require('react');
var ReactDOM = require('react-dom');
var cx = require('classnames');
var $ = require('jquery');

var BtnStage = React.createClass({
  getInitialState: function(){
    return {
      btnWidth: 0
    }
  },
  componentDidMount: function(){
    this.setState({
      btnWidth: ReactDOM.findDOMNode(this.refs.button).getBoundingClientRect().width
    });
  },
  componentDidUpdate: function(){
    var _this = this,
        el = ReactDOM.findDOMNode(this.refs.button),
        newWidth = el.getBoundingClientRect().width;

    this.updateStateWidth(newWidth);
  },
  iframeUrl: function(){
    var src = "https://scbutton.com/src/button.html";
        src += "?username=" + escape(this.props.username);
        src += "&invert=" + this.props.isInverted;
        src += "&large=" + this.props.btnLarge,
        height = (this.props.btnLarge) ? 28 : 20;

    return '\n<iframe src="' + src + '" frameborder="0" scrolling="no" height="' + height + 'px" width="' + this.state.btnWidth +'px"></iframe>'
  },
  updateStateWidth: function(newWidth){
    if (this.state.btnWidth && this.state.btnWidth !== newWidth) {
      this.setState({
        btnWidth: newWidth
      })
    }
  },
  render: function(){
    // defaultProps doesn't seem to be working :'(
    var username = this.props.username || "ghost";
    var classes = cx({
      "sc-wrapper": true,
      "sc-btn--large": this.props.btnLarge,
      "sc-btn--invert": this.props.isInverted
    });

    return (
      <div className="grid__cell cell--2of3">
        <div className="stage">
          <div className="stage__item">
            <span className={classes} ref="button">
              <a className="sc-btn">
                <i></i>
                {username}
              </a>
            </span>
          </div>
        </div>
        <footer className="stage__foot">
          <pre>
            &#x003C;-- copy and paste code below --&#x003E;
            <code>
              { this.iframeUrl() }
            </code>
          </pre>
        </footer>
      </div>
    );
  }
});

module.exports = BtnStage;
