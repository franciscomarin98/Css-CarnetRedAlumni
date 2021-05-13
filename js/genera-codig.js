(() => {
    let qr = new QRious({
        element: document.querySelector('canvas'),
        background: 'transparent',
        foreground: '#094973',
        level: 'L',
        size: 120,
        value: 'Maria Belén Villao - 1315311009'
      });
      
    //   qr.canvas.parentNode.appendChild(qr.image);
})();