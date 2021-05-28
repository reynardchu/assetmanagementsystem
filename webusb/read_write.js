/ read 
usbDevice.transferIn(ep1, 64).then(response => { ...

// write …    
usbDevice.transferOut(ep1, str2ab(text)).then(response => { ...

//* ep1 - in/out endpoit
//* 64 - data buffer size
