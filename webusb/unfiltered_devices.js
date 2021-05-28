document.querySelector("#request-any").addEventListener('click', function(event) {
   	 navigator.usb.requestDevice({filters: []})
	   .then(usbDevice => {
	      console.log("Product name: " + usbDevice.productName);
		   // usbDevice 
	 }) .catch(e => {
		  console.log(e);
	 });
 });
