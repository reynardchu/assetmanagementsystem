document.addEventListener('DOMContentLoaded', event => {
  let button = document.getElementById('connect')

  button.addEventListener('click', async() => {
    let device
    /* const VENDOR_ID = 0x1A61 */
    const VENDOR_ID = 0x2717
    
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
