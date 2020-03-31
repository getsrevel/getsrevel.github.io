const SerialPort = require("serialport");
const Readline = require("@serialport/parser-readline");

// Change the serial port to fit your serup
// on linux the device could look like this: "/dev/tty-usbserial1"
const serialPortName = "COM6";

const portOptions = {
  baudRate: 115200
};
const port = new SerialPort(serialPortName, portOptions);

// Open errors will be emitted as an error event
port.on('error', function(err) {
  console.log('Error: ', err.message)
});

const parser = port.pipe(new Readline({ delimiter: "\r\n" }));

parser.on("data", doSomethingWithData);

// Callback function for processing the received data
function doSomethingWithData(data) {
  console.log("--- Line received on serial port ------------");
  console.log('Raw data: ', data);

  // parse json data
  const obj = JSON.parse(data);

  // print object
  console.log("Parsed object:");
  console.log(obj);

  console.log("Contents of object property:");
  console.log(obj.tagId);
  console.log("--- data processing done -------------------");
}
