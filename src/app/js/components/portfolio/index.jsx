import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { commands, config } from '../../terminal/index';
import { Link } from 'react-router';

class PortfolioIndex extends Component {
  componentDidMount() {
    $('#body').terminal(commands, config);
  }

  render() {
    return (
    <div>
      <div id="window">
        <div id="toolbar">
          <div className="top">
            <div id="lights">
              <div className="light red">
                <div className="glyph">×</div>
                <div className="shine"></div>
                <div className="glow"></div>
              </div>
              <div className="light yellow">
                <div className="glyph">-</div>
                <div className="shine"></div>
                <div className="glow"></div>
              </div>
              <div className="light green">
                <div className="glyph">+</div>
                <div className="shine"></div>
                <div className="glow"></div>
              </div>
            </div>
            <div id="bubble">
              <div className="shine"></div>
              <div className="glow"></div>
            </div>
          </div>
        </div>
        <div id="body">
        </div>
      </div>
      <div className="toolbar">
        <a alt="Github" title="Github" href="https://github.com/davidkelley" target="_blank"><i className="fa fa-github-square" aria-hidden="true"></i></a>
        <a alt="LinkedIn" title="LinkedIn" href="https://www.linkedin.com/in/david-kelley-40677093" target="_blank"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
        <a alt="Twitter" title="Twitter" href="https://twitter.com/davidkelley87" target="_blank"><i className="fa fa-twitter-square" aria-hidden="true"></i></a>
        <a alt="Medium" title="Medium" href="https://medium.com/@davidkelley87" target="_blank"><i className="fa fa-rss-square" aria-hidden="true"></i></a>
        <a alt="CodePen" title="CodePen" href="https://codepen.io/davidkelley" target="_blank"><i className="fa fa-codepen" aria-hidden="true"></i></a>
      </div>
    </div>
    );
  }
}

export default connect(null, null)(PortfolioIndex);
