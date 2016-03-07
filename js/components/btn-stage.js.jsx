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

    //TODO: Remove jquery move this to a transitionEnd func
    $(el).one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(e){
      _this.updateStateWidth(newWidth);
    })

    this.updateStateWidth(newWidth);
  },
  buildAnchor: function(){
    var username = escape(this.props.username),
        url = "href='https://snapchat.com/add/"+username+"'",
        clss = "",
        height = (this.props.btnLarge) ? 28 : 20,
        style = "",
        title = (username) ? " title='Add " + username + " on Snapchat'" : "";

    clss += (!!this.props.btnLarge) ? "lrg" : "";
    clss += (!!this.props.isInverted) ? "invert" : "";

    switch (clss) {
      case "lrg":
        clss = ' class="lrg"';
        break;
      case "invert":
        clss = ' class="invert"';
        break;
      case "lrginvert":
        clss = ' class="lrg invert"';
        break;
    };

    style = 'height:' + height + 'px;';
    style += 'width:' + this.state.btnWidth.toFixed(3) + 'px;';

    return '\n<div id="sc-btn"'+ clss +' style="'+style+'"><a '+url+''+title+'><i></i>' +username+'</a></div>'

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
      "lrg": this.props.btnLarge,
      "invert": this.props.isInverted
    });

    return (
      <div className="grid__cell cell--2of3">
        <div className="stage">
          <div className="stage__item">
            <span id="sc-btn" className={classes} ref="button">
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
              { this.buildAnchor() }
            </code>
          </pre>
        </footer>
      </div>
    );
  }
});

module.exports = BtnStage;
