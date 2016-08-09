import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { init } from '../../actions/terminal';
import { Link } from 'react-router';

// import { AsciiTable } from 'ascii-table';
// var AsciiTable = require('ascii-table');

class PortfolioIndex extends Component {
  componentDidMount() {
    init();
  }

  render() {
    return (
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
    );
  }
}

export default connect(null, null)(PortfolioIndex);
