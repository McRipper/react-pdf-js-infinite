import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class PdfPage extends Component {

  static propTypes = {
    page: PropTypes.number,
    scale: PropTypes.number,
    rotate: PropTypes.number,
    className: PropTypes.string,
    pdf: PropTypes.object,
  };

  componentDidMount() {
    this.props.pdf.getPage(this.props.page).then(this.renderPage);
  }

  renderPage = (pdfPage) => {
    if (pdfPage) {
      const canvasContext = this.canvas.getContext('2d');
      const { scale, rotate } = this.props;
      const viewport = pdfPage.getViewport(scale, rotate);
      this.canvas.height = viewport.height;
      this.canvas.width = viewport.width;
      pdfPage.render({ canvasContext, viewport });
    }
  }

  render() {
    return (
      <canvas ref={(canvas) => { this.canvas = canvas; }} className={this.props.className} />
    );
  }

}
