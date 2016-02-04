var React = require('react');
var cx = require('classnames');

var BtnStage = React.createClass({
  iframeUrl: function(){
    var src = "http://scbtns.com/btn";
    src += "?username=" + escape(this.props.username);
    src += "?token=" + this.props.token;
    src += "?invert=" + this.props.isInverted;
    src += "?large=" + this.props.btnLarge;

    return '\n<iframe src="' + src + '></iframe>'
  },
  render: function(){
    // defaultProps doesn't seem to be working :'(
    var username = this.props.username || "ghost";
    var classes = cx({
      "sc-btn": true,
      "sc-btn--large": this.props.btnLarge,
      "sc-btn--invert": this.props.isInverted
    });

    return (
      <div className="grid__cell cell--2of3">
        <div className="stage">
          <div className="stage__item">
            <span className={classes}>
              <a>
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