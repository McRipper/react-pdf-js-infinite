# react-pdf-js-infinite
---

`react-pdf-js-infinite` provides a component for rendering PDF documents using [PDF.js](http://mozilla.github.io/pdf.js/). Written for React 15 and ES2015 using the Airbnb style guide.

---

Usage
-----

Install with `npm install react-pdf-js-infinite`

Use in your app

```js
import React from 'react';
import PDF from 'react-pdf-js-infinite';

export default class MyPdfViewer extends React.Component {

  render() {
    return (
      <div>
        <PDF file="somefile.pdf" scale={1.5} />
      </div>
    )
  }
}
```


## Credit

This project is a fork of [react-pdf-js](https://github.com/mikecousins/react-pdf-js) which is a fork of [react-pdfjs](https://github.com/erikras/react-pdfjs) which itself was a port of [react-pdf](https://github.com/nnarhinen/react-pdf), so thank you to
the original authours.
