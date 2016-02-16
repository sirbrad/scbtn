var React = require('react');
var cx = require('classnames');

var BtnStage = React.createClass({
  getInitialState: function(){
    return {
      btnWidth: 0
    }
  },
  // componentWillReceiveProps: function(){
  //   console.log('componentWillReceiveProps')
  //   console.log('props: ' +this.refs.button.getDOMNode().clientWidth)
  //   // this.setState({ btnWidth: this.refs.button.getDOMNode().getBoundingClientRect().width })
  // },
  componentDidMount: function(){
    console.log('did mount')
    console.log(this.refs.button.getDOMNode().clientWidth)
    this.setState({btnWidth: this.refs.button.getDOMNode().clientWidth})

    // console.log("state = " +this.state.btnWidth)
  },
  componentDidUpdate: function(){
    console.log('componentDidUpdate')

    console.log(this.refs.button.getDOMNode().clientWidth)

    this.setState({btnWidth: this.refs.button.getDOMNode().clientWidth})

    // if (this.state.btnWidth !== this.refs.button.getDOMNode().clientWidth) {
    //   window.setTimeout(function(){
    //     this.setState({btnWidth: this.refs.button.getDOMNode().clientWidth})
    //   }.bind(this), 200)
    // }
  },
  shouldComponentUpdate: function(nextProps, nextState){

    console.log("new state:"+nextState.btnWidth)
    console.log("old state: "+this.state.btnWidth)
    return nextState.btnWidth != this.state.btnWidth;

    // if (nextState.btnWidth === this.state.btnWidth) {
    //   return true;
    // } else {
    //   return false;
    // }
  },
  iframeUrl: function(){
    var src = "http://scbtn.com.s3-website-us-east-1.amazonaws.com/src/button.html";
        src += "?username=" + escape(this.props.username);
        src += "?invert=" + this.props.isInverted;
        src += "?large=" + this.props.btnLarge,
        height = (this.props.btnLarge) ? 30 : 20;

    // if (!!this.refs.button) {
    //   this.refs.button.getDOMNode().clientWidth;
    // }

    return '\n<iframe src="' + src + ' frameborder="0" scrolling="no" height="' + height + 'px" width="' + this.state.btnWidth + '"></iframe>'
  },
  render: function(){
    // defaultProps doesn't seem to be working :'(
    var username = this.props.username || "ghost";
    var classes = cx({
      "sc-wrapper": true,
      "sc-btn--large": this.props.btnLarge,
      "sc-btn--invert": this.props.isInverted
    });

    console.log(this.props.username)

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
