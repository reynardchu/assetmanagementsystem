usbDevice.controlTransferOut(({
		 requestType: 'vendor',
   		 recipient: 'device',
   		 request: 53, //ACCESSORY_START
   		 value: 0,
   		 index: 0
		 }), new ArrayBuffer(0)).then(response => {  
			 if (response.status == "ok") {
			   usbDevice.close();
			 }
		 }).catch(e => {
   	 console.log("Can't send " + e);
   });
