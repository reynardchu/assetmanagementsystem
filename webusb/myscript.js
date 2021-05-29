document.addEventListener('DOMContentLoaded', event => {
  let button = document.getElementById('connect')

  button.addEventListener('click', async() => {
    let device
    /* const VENDOR_ID = 0x1A61 */
const VENDOR_ID = 0x0BB4

usbDevice.controlTransferIn(({
		 requestType: 'vendor',
   		 recipient: 'device',
   		 request: 51, // ACCESSORY_GET_PROTOCOL
   		 value: 0,
   		 index: 0
}), 2).then(response => { 
      if (response.data.getInt8(0) == 1) {
        console.log("AoA V1 available");
      }
      if (response.data.getInt8(0) == 2) {
	console.log("AoA V2 available");
      }
  }).catch(e => {
   	console.log("Can't send " + e);
});
	  
	  
	  
    try {
      device = await navigator.usb.requestDevice({
        filters: [{
          vendorId: VENDOR_ID
        }]
      })

      console.log('open')
      await device.open()
      console.log('opened:', device)
    } catch (error) {
      console.log(error)
    }
	  await device.close()
  })
})


/*document.querySelector("#request-any").addEventListener('click', function(event) {
   	 navigator.usb.requestDevice({filters: []})
	   .then(usbDevice => {
	      console.log("Product name: " + usbDevice.productName);
		   // usbDevice 
	 }) .catch(e => {
		  console.log(e);
	 });
 });
*/
