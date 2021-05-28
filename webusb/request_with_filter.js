navigator.usb.requestDevice({filters: [
   	      {vendorId: 0x18d1, productId: 0x2D00},
   	      {vendorId: 0x18d1, productId: 0x2D01},
   	      {vendorId: 0x18d1, productId: 0x2D02},
   	      {vendorId: 0x18d1, productId: 0x2D03},
   	      {vendorId: 0x18d1, productId: 0x2D04},
   	      {vendorId: 0x18d1, productId: 0x2D05}
         ]}) .then(usbDevice => {
   	   console.log("Product name: " +usbDevice.productName);
   	    
          }).catch(e => {
   		  console.log("There is no AoA device. " + e);
  });
