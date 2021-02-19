const pdfJS = require('pdfjs-dist/webpack')

console.log({pdfJS})
pdfJS.getDocument(
  'https://cdn.filestackcontent.com/wcrjf9qPTCKXV3hMXDwK'
  ).promise.then((pdf) => {
    pdf.getPage(1).then(function(page) {
      const scale = 1.5;
      const viewport = page.getViewport({ scale: scale, });

      const canvas = document.getElementById('the-canvas');
      const context = canvas.getContext('2d');
      canvas.height = viewport.height;
      canvas.width = viewport.width;

      const renderContext = {
          canvasContext: context,
          viewport: viewport
        };
        page.render(renderContext);
      });

      const div = document.createElement('div')

      div.textContent = 'Success!'
      document.body.appendChild(div)
  })
