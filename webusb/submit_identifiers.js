let identifiers  = ["manufacturer", "model", "description", "version", "uri", "serialnumber"];

for (var i = 0; i < identifiers.length; i++) {
         usbDevice.controlTransferOut(({
         requestType: 'vendor',
         recipient: 'device',
         request: 52, //ACCESSORY_SEND_STRING
         value: 0,
         index: i}), str2ab(identifiers[i]))
		 .then(response => {  
		   console.log(“ready”); 
		}).catch(e => {
   	          console.log(e);
      	  	});
  }


function str2ab(str) {
  var buf = new ArrayBuffer(str.length * 2); 
  var bufView = new Uint16Array(buf);
  for (var i = 0, strLen = str.length; i < strLen; i++) {
	bufView[i] = str.charCodeAt(i);
  }
  return buf;
}
