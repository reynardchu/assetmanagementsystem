await usbDevice.open();
if (usbDevice.configuration === null)
await usbDevice.selectConfiguration(1);
await usbDevice.claimInterface(0);
