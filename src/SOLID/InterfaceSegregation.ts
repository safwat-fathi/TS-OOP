// * Before following ISP
// interface Ports {
//   useUSB: () => void;
//   useLAN: () => void;
//   usePS2: () => void;
//   useVGA: () => void;
// }

// class PC implements Ports {
//   useUSB() {
//     console.log("USB port is ready for your PC!");
//   }

//   useLAN() {
//     console.log("LAN port is ready for your PC!");
//   }

//   usePS2() {
//     console.log("PS2 port is ready for your PC!");
//   }

//   useVGA() {
//     console.log("VGA port is ready for your PC!");
//   }
// }

// class Laptop implements Ports {
//   useUSB() {
//     console.log("USB port is ready for your Laptop!");
//   }

//   useLAN() {
//     console.log("LAN port is ready for your Laptop!");
//   }

//   usePS2() {
//     throw new Error("Laptop has not any PS2 port!");
//   }

//   useVGA() {
//     throw new Error("Laptop has not any VGA port!");
//   }
// }

// * After following ISP
interface CommonPorts {
  useUSB: () => void;
  useLAN: () => void;
}

interface ExtraPorts {
  usePS2: () => void;
  useVGA: () => void;
}

interface DeluxePorts {
  useUSB3: () => void;
  useNFC: () => void;
}

export class PC implements CommonPorts, DeluxePorts, ExtraPorts {
  useUSB() {
    console.log("USB port is ready for your PC!");
  }

  useLAN() {
    console.log("LAN port is ready for your PC!");
  }

  usePS2() {
    console.log("PS2 port is ready for your PC!");
  }

  useVGA() {
    console.log("VGA port is ready for your PC!");
  }

  useUSB3() {
    console.log("USB3 port is ready for your PC!");
  }

  useNFC() {
    console.log("NFC port is ready for your PC!");
  }
}

export class Laptop implements CommonPorts {
  useUSB() {
    console.log("USB port is ready for your Laptop!");
  }

  useLAN() {
    console.log("LAN port is ready for your Laptop!");
  }
}
