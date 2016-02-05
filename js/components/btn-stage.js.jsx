var React = require('react');
var cx = require('classnames');

var BtnStage = React.createClass({
  iframeUrl: function(hi){
    console.log(hi)
    var src = "http://scbtn.com.s3-website-us-east-1.amazonaws.com/src/button.html";
        src += "?username=" + escape(this.props.username);
        src += "?invert=" + this.props.isInverted;
        src += "?large=" + this.props.btnLarge,
        height = (this.props.btnLarge) ? 30 : 20;

    return '\n<iframe src="' + src + ' frameborder="0" scrolling="no" height="' + height + 'px"></iframe>'
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
            <span className={classes}>
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
              { this.iframeUrl(this) }
            </code>
          </pre>
        </footer>
      </div>
    );
  }
});

module.exports = BtnStage;
