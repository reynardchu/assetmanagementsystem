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
