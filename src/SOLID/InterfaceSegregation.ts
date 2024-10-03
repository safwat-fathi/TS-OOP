interface IStorageService {
	upload: (file: File) => Promise<void>;
	delete: (filename: string) => Promise<void>;
	getFileURL: (filename: string) => Promise<string>;
	listFiles: () => Promise<string[]>;
}

interface IS3Service extends IStorageService {
	setBucketPolicy: (policy: string) => Promise<void>;
}

interface IAzureBlobStorageService extends IStorageService {
	setContainerACL: (acl: string) => Promise<void>;
}

interface IGoogleCloudStorageService extends IStorageService {
	setMetadata: (filename: string, metadata: object) => Promise<void>;
}

interface ILocalStorageService extends IStorageService {
	connectToLocalServer: (url: string) => Promise<void>;
}

class S3Service implements IS3Service {
	async upload(file: File): Promise<void> {
		console.log("uploading file to S3");
	}

	async delete(filename: string): Promise<void> {
		console.log(`deleting file: ${filename} from S3`);
	}

	async getFileURL(filename: string): Promise<string> {
		return `https://s3.amazonaws.com/${filename}`;
	}

	async listFiles(): Promise<string[]> {
		return ["file1", "file2", "file3"];
	}

	async setBucketPolicy(policy: string): Promise<void> {
		console.log("setting bucket policy: ", policy);
	}
}

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
// interface CommonPorts {
//   useUSB: () => void;
//   useLAN: () => void;
// }

// interface ExtraPorts {
//   usePS2: () => void;
//   useVGA: () => void;
// }

// interface DeluxePorts {
//   useUSB3: () => void;
//   useNFC: () => void;
// }

// export class PC implements CommonPorts, DeluxePorts, ExtraPorts {
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

//   useUSB3() {
//     console.log("USB3 port is ready for your PC!");
//   }

//   useNFC() {
//     console.log("NFC port is ready for your PC!");
//   }
// }

// export class Laptop implements CommonPorts {
//   useUSB() {
//     console.log("USB port is ready for your Laptop!");
//   }

//   useLAN() {
//     console.log("LAN port is ready for your Laptop!");
//   }
// }
