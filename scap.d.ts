// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab

export type ScapFailure = {
	errorCode: string;
	errorText: string;
};

export type ScapSuccessCallback = () => void;
export type ScapFailureCallback = (error: ScapFailure) => void;

// #region Configuration
export type CurrentTime = {
	year: number;
	month: number;
	day: number;
	hour: number;
	minute: number;
	sec: number;
	ntp?: boolean;
	ntpServerAddress?: string;
};

export type LocaleCountry = {
	name: string;
	specifier: string;
};

export type Locale = {
	language: string;
	langaugeCode: string;
	countries: LocaleCountry[];
};

export type LocaleList = {
	localeList: Locale[];
};

export type MasterPinStatus = {
	activated: boolean;
};

export type OSDLanguage = {
	specifier: string;
};

export type OSDLock = {
	enabled: boolean;
};

export type PictureMode = {
	mode: Configuration.PictureMode;
};

export type PictureProperty = {
	backlight?: number;
	contrast?: number;
	brightness?: number;
	sharpness?: number;
	hSharpness?: number;
	vSharpness?: number;
	color?: number;
	tint?: number;
	colorTemperature?: number;
	dynamicContrast?: 'off' | 'low' | 'medium' | 'high';
	superResolution?: 'off' | 'low' | 'medium' | 'high';
	noiseReduction?: 'auto' | 'off' | 'low' | 'medium' | 'high';
	mpegNoiseReduction?: 'auto' | 'off' | 'low' | 'medium' | 'high';
	blackLevel?: 'low' | 'high';
	gamma?: 'low' | 'medium' | 'high' | 'high3';
};

export type Property = {
	alias?: string;
	operation_mode_after_screen_share?: string;
	key_delivery_to_simplink?: string;
	cec_device_control?: string;
};

export type ProxyBypassList = {
	urlList: string[];
};

export type ServerProperty = {
	serverIp: string;
	serverPort: number;
	secureConnection: boolean;
	appLaunchMode: Configuration.AppMode;
	appType?: Configuration.AppType;
	fqdnMode: boolean;
	fqdnAddr: string;
	appLaunchDeviceId?: string;
};

export type TimeZone = {
	continent: string;
	country: string;
	city: string;
};

export type TimeZoneList = {
	timeZone: TimeZone[];
};

export type USBLock = {
	enabled: boolean;
};

export type CurrentTimeSuccessCallback = (cbObject: CurrentTime) => void;
export type LocaleListSuccessCallback = (cbObject: LocaleList) => void;
export type MasterPinStatusSuccessCallback = (cbObject: MasterPinStatus) => void;
export type OSDLanguageSuccessCallback = (cbObject: OSDLanguage) => void;
export type OSDLockSuccessCallback = (cbObject: OSDLock) => void;
export type PictureModeSuccessCallback = (cbObject: PictureMode) => void;
export type PicturePropertySuccessCallback = (cbObject: PictureProperty) => void;
export type PropertySuccessCallback = (cbObject: Property) => void;
export type ProxyBypassListSuccessCallback = (cbObject: ProxyBypassList) => void;
export type TimeZoneSuccessCallback = (cbObject: TimeZone) => void;
export type TimeZoneListSuccessCallback = (cbObject: TimeZoneList) => void;
export type USBLockSuccessCallback = (cbObject: USBLock) => void;
export type ServerPropertySuccessCallback = (cbObject: ServerProperty) => void;

export namespace Configuration {
	const AppMode = {
		LOCAL: "local",
		USB: "usb",
		REMOTE: "remote",
	} as const;
	const AppType = {
		IPK: "IPK",
		ZIP: "ZIP",
	} as const;
	const PictureMode = {
		APS: "eco",
		CINEMA: "cinema",
		EXPERT1: "expert1",
		EXPERT2: "expert2",
		GAME: "game",
		SPORTS: "sports",
		STANDARD: "normal",
		VIVID: "vivid",
	} as const;
}
export class Configuration {
	clearCache(
		successCb: ScapSuccessCallback,
		failureCb: ScapFailureCallback,
	): void;
	getCurrentTime(
		successCb: CurrentTimeSuccessCallback,
		failureCb: ScapFailureCallback,
	): void;
	getLocaleList(
		successCb: LocaleListSuccessCallback,
		failureCb: ScapFailureCallback,
	): void;
	getMasterPinStatus(
		successCb: MasterPinStatusSuccessCallback,
		failureCb: ScapFailureCallback,
	): void;
	getOSDLanguage(
		successCb: OSDLanguageSuccessCallback,
		failureCb: ScapFailureCallback,
	): void;
	getOSDLock(
		successCb: OSDLockSuccessCallback,
		failureCb: ScapFailureCallback,
	): void;
	getPictureMode(
		successCb: PictureModeSuccessCallback,
		failureCb: ScapFailureCallback,
	): void;
	getPictureProperty(
		successCb: PicturePropertySuccessCallback,
		failureCb: ScapFailureCallback,
	): void;
	getProperty(
		successCb: PropertySuccessCallback,
		failureCb: ScapFailureCallback,
	): void;
	getProxyBypassList(
		successCb: ProxyBypassListSuccessCallback,
		failureCb: ScapFailureCallback,
	): void;
	getServerProperty(
		successCb: ServerPropertySuccessCallback,
		failureCb: ScapFailureCallback,
	): void;
	getTimeZone(
		successCb: TimeZoneSuccessCallback,
		failureCb: ScapFailureCallback,
	): void;
	getTimeZoneList(
		successCb: TimeZoneListSuccessCallback,
		failureCb: ScapFailureCallback,
	): void;
	getUSBLock(
		successCb: USBLockSuccessCallback,
		failureCb: ScapFailureCallback,
	): void;
	setCurrentTime(
		successCb: ScapSuccessCallback,
		failureCb: ScapFailureCallback,
		options: CurrentTime,
	): void;
	setMasterPinStatus(
		successCb: ScapSuccessCallback,
		failureCb: ScapFailureCallback,
		options: MasterPinStatus,
	): void;
	setOSDLanguage(
		successCb: ScapSuccessCallback,
		failureCb: ScapFailureCallback,
		options: OSDLanguage,
	): void;
	setOSDLock(
		successCb: ScapSuccessCallback,
		failureCb: ScapFailureCallback,
		options: OSDLock,
	): void;
	setPictureMode(
		successCb: ScapSuccessCallback,
		failureCb: ScapFailureCallback,
		options: PictureMode,
	): void;
	setPictureProperty(
		successCb: ScapSuccessCallback,
		failureCb: ScapFailureCallback,
		options: PictureProperty,
	): void;
	setProperty(
		successCb: ScapSuccessCallback,
		failureCb: ScapFailureCallback,
		options: Property,
	): void;
	setProxyBypassList(
		successCb: ScapSuccessCallback,
		failureCb: ScapFailureCallback,
		options: ProxyBypassList,
	): void;
	restartApplication(
		successCb: ScapSuccessCallback,
		failureCb: ScapFailureCallback,
	): void;
	setServerProperty(
		successCb: ScapSuccessCallback,
		failureCb: ScapFailureCallback,
		options: ServerProperty,
	): void;
	setTimeZone(
		successCb: ScapSuccessCallback,
		failureCb: ScapFailureCallback,
		options: TimeZone,
	): void;
	setUSBLock(
		successCb: ScapSuccessCallback,
		failureCb: ScapFailureCallback,
		options: USBLock,
	): void;
}
// #endregion

// #region DeviceInfo
export type BlockedPort = {
	blockedPort: number;
	direction: "in" | "out" | "all";
	protocol: "tcp" | "udp";
};

export type BlockedPortList = {
	blockedPortList: BlockedPort[];
};

export type NetworkCheckupInfo = {
	mode: "default" | "manual";
	url?: string;
};

export type NetworkInfo = {
	isInternetConnectionAvailable?: boolean;
	wired: {
		enabled?: boolean;
		state?: 'connected' | 'disconnected';
		interfaceName?: string;
		ipAddress?: string;
		netmask?: string;
		gateway?: string;
		onInternet?: 'yes' | 'no';
		method?: 'dhcp' | 'manual';
		dns1?: string;
		dns2?: string;
		dns3?: string;
		dns4?: string;
		dns5?: string;
		ipv6?: {
			gateway?: string;
			ipAddress?: string;
			prefixLength?: number;
			method?: 'dhcp' | 'manual';
		};
	};
	wifi: {
		enabled?: boolean;
		state?: 'connected' | 'disconnected';
		interfaceName?: string;
		ipAddress?: string;
		netmask?: string;
		gateway?: string;
		onInternet?: 'yes' | 'no';
		method?: 'dhcp' | 'manual';
		dns1?: string;
		dns2?: string;
	};
};

export type NetworkMacInfo = {
	wiredInfo?: {
		macAddress?: string;
	};
	wifiInfo?: {
		macAddress?: string;
	};
};

export type PlatformInfo = {
	modelName: string;
	serialNumber: string;
	firmwareVersion: string;
	hardwareVersion: string;
	sdkVersion: string;
	manufacturer: string;
};

export type ProxyInfo = {
	enabled: boolean;
	ipAddress?: string;
	port?: number;
	userName?: string;
	password?: string;
};

export type SensorValues = {
	backlight: number;
	checkScreen?: {
		colorValid: boolean;
		drawRGB: number;
		hexValue: string;
		readRGB: number;
	};
	fan?: {
		closedLoop?: boolean;
		openLoop?: boolean;
	};
	humidity?: number;
	illuminance?: number;
	rotation?: string;
	temperature?: number;
};

export type SystemUsageInfoOptions = {
	cpus: boolean;
	memory: boolean;
};

export type SystemUsageInfoCpuTimes = {
	user: number;
	nice: number;
	sys: number;
	idle: number;
	irq: number;
};

export type SystemUsageInfoMemory = {
	total: number;
	free: number;
	used: number;
	buffer: number;
	cached: number;
};

export type SystemUsageInfoCpu = {
	model: string;
	times: SystemUsageInfoCpuTimes;
};

export type SystemUsageInfo = {
	cpus?: SystemUsageInfoCpu[];
	memory?: SystemUsageInfoMemory;
};

export type BlockedPortListSuccessCallback = (cbObject: BlockedPortList) => void;
export type NetworkCheckupInfoSuccessCallback = (cbObject: NetworkCheckupInfo) => void;
export type NetworkInfoSuccessCallback = (cbObject: NetworkInfo) => void;
export type NetworkMacInfoSuccessCallback = (cbObject: NetworkMacInfo) => void;
export type PlatformInfoSuccessCallback = (cbObject: PlatformInfo) => void;
export type ProxyInfoSuccessCallback = (cbObject: ProxyInfo) => void;
export type SensorValuesSuccessCallback = (cbObject: SensorValues) => void;
export type SystemUsageInfoSuccessCallback = (cbObject: SystemUsageInfo) => void;

export class DeviceInfo {
	getBlockedPortList(
		successCb: BlockedPortListSuccessCallback,
		failureCb: ScapFailureCallback,
	): void;
	getNetworkCheckupInfo(
		successCb: NetworkCheckupInfoSuccessCallback,
		failureCb: ScapFailureCallback,
	): void;
	getNetworkInfo(
		successCb: NetworkInfoSuccessCallback,
		failureCb: ScapFailureCallback,
	): void;
	getNetworkMacInfo(
		successCb: NetworkMacInfoSuccessCallback,
		failureCb: ScapFailureCallback,
	): void;
	getPlatformInfo(
		successCb: PlatformInfoSuccessCallback,
		failureCb: ScapFailureCallback,
	): void;
	getProxyInfo(
		successCb: ProxyInfoSuccessCallback,
		failureCb: ScapFailureCallback,
	): void;
	getSensorValues(
		successCb: SensorValuesSuccessCallback,
		failureCb: ScapFailureCallback,
	): void;
	getSystemUsageInfo(
		successCb: SystemUsageInfoSuccessCallback,
		failureCb: ScapFailureCallback,
		options: SystemUsageInfoOptions,
	): void;
	setBlockedPortList(
		successCb: ScapSuccessCallback,
		failureCb: ScapFailureCallback,
		options: BlockedPortList,
	): void;
	setNetworkCheckupInfo(
		successCb: ScapSuccessCallback,
		failureCb: ScapFailureCallback,
		options: NetworkCheckupInfo,
	): void;
	setNetworkInfo(
		successCb: ScapSuccessCallback,
		failureCb: ScapFailureCallback,
		options: NetworkInfo,
	): void;
	setProxyInfo(
		successCb: ScapSuccessCallback,
		failureCb: ScapFailureCallback,
		options: ProxyInfo,
	): void;
	setSensorValues(
		successCb: ScapSuccessCallback,
		failureCb: ScapFailureCallback,
		options: SensorValues,
	): void;
}
// #endregion

// #region InputSource
export type ExternalInputList = {
	externalInputList: {
		inputPort: string;
		signalDetection: boolean;
		vendorID: string;
		name: string;
	}[],
	subscribed: boolean;
	count: number;
	currentInputPort: string;
}

export type InputSourceListSuccessCallback = (info: ExternalInputList) => void;

export class InputSource {
	getExternalInputList(
		successCb: InputSourceListSuccessCallback,
		failureCb: ScapFailureCallback,
	): void;
}
// #endregion

// #region Power
export type DPMWakeup = {
	dpmSignalType: Power.DPMSignalType;
}

export type PowerCommand = {
	powerCommand: Power.PowerCommand;
}

export type PowerOnDelay = {
	delayTime: number; // in seconds
}

export type PMMode = {
	mode: Power.PMMode;
}

export type PowerStatus = {
	wakeOnLan: boolean;
	displayMode: Power.DisplayMode;
	allOffTimer: boolean;
	allOnTimer: boolean;
}

export type DisplayMode = {
	displayMode: Power.DisplayMode;
}

export type WakeOnLan = {
	wakeOnLan: boolean;
}

export type DPMWakeupSuccessCallback = (cbObject: DPMWakeup) => void;
export type PMModeSuccessCallback = (cbObject: PMMode) => void;
export type PowerOnDelaySuccessCallback = (cbObject: PowerOnDelay) => void;
export type PowerStatusSuccessCallback = (cbObject: PowerStatus) => void;
export type DisplayModeSuccessCallback = (cbObject: DisplayMode) => void;

export namespace Power {
	const DisplayMode = {
		DISPLAY_OFF: "Screen Off",
		DISPLAY_ON: "Active",
	} as const;
	const DPMSignalType = {
		CLOCK: "clock",
		CLOCK_AND_DATA: "clockAndData",
	} as const;
	const PMMode = {
		PowerOff: "powerOff",
		ScreenOff: "screenOff",
		ScreenOffAlways: "screenOffAlways",
		ScreenOffBacklight: "screenOffBacklight",
		SustainAspectRatio: "sustainAspectRatio",
		NetworkReady: "networkReady",
	} as const;
	const PowerCommand = {
		REBOOT: "reboot",
		SHUTDOWN: "powerOff",
	} as const;
}
export class Power {
	getDPMWakeup(
		successCb: DPMWakeupSuccessCallback,
		failureCb: ScapFailureCallback,
	): void;
	executePowerCommand(
		successCb: ScapSuccessCallback,
		failureCb: ScapFailureCallback,
		options: PowerCommand,
	): void;
	getPMMode(
		successCb: PMModeSuccessCallback,
		failureCb: ScapFailureCallback,
	): void;
	getPowerOnDelay(
		successCb: PowerOnDelaySuccessCallback,
		failureCb: ScapFailureCallback,
	): void;
	getPowerStatus(
		successCb: PowerStatusSuccessCallback,
		failureCb: ScapFailureCallback,
	): void;
	setDPMWakeup(
		successCb: ScapSuccessCallback,
		failureCb: ScapFailureCallback,
		options: DPMWakeup,
	): void;
	setDisplayMode(
		successCb: ScapSuccessCallback,
		failureCb: ScapFailureCallback,
		options: DisplayMode
	): void;
	setPMMode(
		successCb: ScapSuccessCallback,
		failureCb: ScapFailureCallback,
		options: PMMode
	): void;
	setPowerOnDelay(
		successCb: ScapSuccessCallback,
		failureCb: ScapFailureCallback,
		options: PowerOnDelay,
	): void;
	enableWakeOnLan(
		successCb: ScapSuccessCallback,
		failureCb: ScapFailureCallback,
		options: WakeOnLan,
	): void;
}
// #endregion

// #region Security
export type DomainNameList = {
	domainNameList: string[];
};

export type RemovedDomainNameList = {
	removedDomainList: string[];
};

export type ServerCertificateList = {
	serverCertificateList: string[] | {
		domainName?: string;
		issuerName?: string;
		validFrom?: string;
		validTo?: string;
	}[];
};

export type ServerCertificateListSuccessCallback = (
	cbObject: ServerCertificateList,
) => void;
export type UnregisterServerCertificateListSuccessCallback = (
	cbObject: RemovedDomainNameList,
) => void;

export class Security {
	getServerCertificateList(
		successCb: ServerCertificateListSuccessCallback,
		failureCb: ScapFailureCallback,
	): void;
	registerServerCertificateList(
		successCb: ScapSuccessCallback,
		failureCb: ScapFailureCallback,
		options: ServerCertificateList,
	): void;
	unregisterAllServerCertificateList(
		successCb: ScapSuccessCallback,
		failureCb: ScapFailureCallback,
	): void;
	unregisterServerCertificateList(
		successCb: ScapSuccessCallback,
		failureCb: ScapFailureCallback,
		options: DomainNameList,
	): void;
}
// #endregion

// #region Signage
export type CheckScreen = {
	checkScreen: boolean;
};

export type CaptureScreenOptions = {
	save?: boolean;
	thumbnail?: boolean;
	imgResolution?: Signage.ImgResolution;
};

export type CaptureScreen = {
	data: string;
	size: number;
	encoding: "Base64";
};

export type DigitalAudioInputMode = {
	digitalAudioInput: Signage.DigitalAudioInput;
};

export type FailoverMode = {
	mode: Signage.FailoverMode;
	priority?: string[];
};

export type IntelligentAuto = {
	enabled: boolean;
};

export type IsmMethod = {
	ismMethod: Signage.IsmMethod;
};

export type LanDaisyChain = {
	enabled: boolean;
};

export type MirrorMode = {
	mode: "on" | "off";
};

export type NoSignalImageMode = {
	noSignalImage: "on" | "off";
};

export type PortraitMode = {
	portraitMode: Signage.OsdPortraitMode;
};

export type PowerSaveMode = {
	ses?: boolean;
	dpmMode?: Signage.DpmMode;
	automaticStandby?: Signage.AutomaticStandbyMode;
	do15MinOff?: boolean;
};

export type QuietMode = {
	mode: "on" | "off";
};

export type RS232CConfiguration = {
	mode: number;
	port: number;
	baudRate: number;
	dataBit: number;
	parity: number;
	stopBit: number;
	flowControl: number;
	rxTimeoutInMs: number;
};

export type SignageInfo = {
	portraitMode: Signage.OsdPortraitMode;
	digitalAudioInputMode: Signage.DigitalAudioInput;
	ismMethod: Signage.IsmMethod;
	checkScreen: boolean;
};

export type SimplinkStatus = {
	simplinkEnable: "on" | "off";
};

export type TileInfo = {
	enabled: boolean;
	rows: number;
	column: number;
	tileId: number;
	naturalMode: boolean;
};

export type UsageData = {
	// Uptime since the last power-on. The integer part represents
	// hours and the fractional part represents minutes. e.g., 1.5 ≡
	// An hour and 30 minutes.
	uptime: number;
	// Total used time (Total used hours). The fractional part gets
	// dropped without rounding.  e.g., 1 hour 50 minutes ≡ 1 hour.
	totalUsed: number;
};

export type UsagePermission = {
	remoteKeyOperationMode: Signage.KeyOperationMode;
	localKeyOperationMode: Signage.KeyOperationMode;
};

export type CaptureScreenSuccessCallback = (cbObject: CaptureScreen) => void;
export type FailoverModeSuccessCallback = (cbObject: FailoverMode) => void;
export type IntelligentAutoSuccessCallback = (cbObject: IntelligentAuto) => void;
export type LanDaisyChainSuccessCallback = (cbObject: LanDaisyChain) => void;
export type MirrorModeSuccessCallback = (cbObject: MirrorMode) => void;
export type NoSignalImageModeSuccessCallback = (cbObject: NoSignalImageMode) => void;
export type PowerSaveModeSuccessCallback = (cbObject: PowerSaveMode) => void;
export type QuietModeSuccessCallback = (cbObject: QuietMode) => void;
export type RS232CConfigurationSuccessCallback = (cbObject: RS232CConfiguration) => void;
export type SignageInfoSuccessCallback = (cbObject: SignageInfo) => void;
export type SimplinkStatusSuccessCallback = (cbObject: SimplinkStatus) => void;
export type TileInfoSuccessCallback = (cbObject: TileInfo) => void;
export type UsageDataSuccessCallback = (cbObject: UsageData) => void;
export type UsagePermissionSuccessCallback = (cbObject: UsagePermission) => void;

export namespace Signage {
	const UNDEFINED = "___undefined___";
	const AutomaticStandbyMode = {
		OFF: "off",
		STANDBY_4HOURS: "4 hours",
	} as const;
	const DigitalAudioInput = {
		AUDIO_IN: "audioIn",
		HDMI_DP: "hdmi",
	} as const;
	const DpmMode = {
		OFF: "off",
		POWER_OFF_5SECOND: "5sec",
		POWER_OFF_10SECOND: "10sec",
		POWER_OFF_15SECOND: "15sec",
		POWER_OFF_1MINUTE: "1min",
		POWER_OFF_3MINUTE: "3min",
		POWER_OFF_5MINUTE: "5min",
		POWER_OFF_10MINUTE: "10min",
	} as const;
	const EventType = {
		CURRENT_TEMPERATURE: "CURRENT_TEMPERATURE",
		FAN_STATUS: "FAN_STATUS",
		LAMP_STATUS: "LAMP_STATUS",
		SCREEN_STATUS: "SCREEN_STATUS",
		SIGNAL_STATUS: "SIGNAL_STATUS",
	} as const;
	const FailoverMode = {
		AUTO: "auto",
		MANUAL: "manual",
		OFF: "off",
		UNDEFINED: "___undefined___",
	} as const;
	const ImgResolution = {
		FHD: "FHD",
		HD: "HD",
	} as const;
	const IsmMethod = {
		COLORWASH: "COLORWASH",
		INVERSION: "INVERSION",
		NORMAL: "NORMAL",
		ORBITER: "ORBITER",
		USERIMAGE: "USERIMAGE",
		USERVIDEO: "USERVIDEO",
		WASHINGBAR: "WASHINGBAR",
		WHITEWASH: "WHITEWASH",
	} as const;
	const KeyCode = {
		AUTO: 1102,
		BACK: 461,
		BLUE: 406,
		BRIGHTNESS_DOWN: 1101,
		BRIGHTNESS_UP: 1100,
		CLEAR: 8,
		DISC_POWER_OFF: 706,
		DISC_POWER_ON: 705,
		DOWN: 40,
		ENERGY_SAVING: 709,
		ENTER: 10,
		EXIT: 601,
		FAST_FORWARD: 417,
		GREEN: 404,
		INFO: 1109,
		INPUT: 712,
		LEFT: 37,
		LG_3D: 737,
		MENU: 627,
		MUTE: 449,
		NUM_0: 48,
		NUM_1: 49,
		NUM_2: 50,
		NUM_3: 51,
		NUM_4: 52,
		NUM_5: 53,
		NUM_6: 54,
		NUM_7: 55,
		NUM_8: 56,
		NUM_9: 57,
		OPT_1aA: 1103,
		PAUSE: 19,
		PLAY: 415,
		POWER: 409,
		PSM: 1108,
		RATIO: 772,
		RED: 403,
		REWIND: 412,
		RIGHT: 39,
		SIMPLINK: 724,
		SMART_HOME: 734,
		SMENU: 1106,
		STOP: 413,
		TILE: 1107,
		UP: 38,
		VOL_DOWN: 448,
		VOL_UP: 447,
		WBALANCE: 1105,
		YELLOW: 405,
	} as const;
	const KeyOperationMode = {
		ALLOW_ALL: "normal",
		BLOCK_ALL: "blockAll",
		POWER_ONLY: "usePwrOnly",
	} as const;
	const MonitoringSource = {
		FAN: "FAN",
		LAMP: "LAMP",
		SCREEN: "SCREEN",
		SIGNAL: "SIGNAL",
		THERMOMETER: "THERMOMETER",
	} as const;
	const OsdPortraitMode = {
		OFF: "off",
		ON: "90",
		UNDEFINED: "___undefined___",
	} as const;
	namespace RS232C {
		const BaudRate = {
			BR_1024000: 1_024_000,
			BR_110: 110,
			BR_115200: 115_200,
			BR_1200: 1_200,
			BR_128000: 128_000,
			BR_14400: 14_400,
			BR_19200: 19_200,
			BR_230400: 230_400,
			BR_2400: 2_400,
			BR_256000: 256_000,
			BR_300: 300,
			BR_38400: 38_400,
			BR_4800: 4_800,
			BR_512000: 512_000,
			BR_57600: 57_600,
			BR_600: 600,
			BR_768000: 768_000,
			BR_921600: 921_600,
			BR_9600: 9_600,
			BR_UNKNOWN: 0,
		} as const;
		const DataBit = {
			DB_7: 7,
			DB_8: 8,
			DB_UNKNOWN: 0,
		} as const;
		const FlowControl = {
			HARDWARE: 3,
			NONE: 1,
			UNKNOWN: 0,
			XON_XOFF: 2,
		} as const;
		const Mode = {
			MODE_0: 0,
			MODE_1: 1,
		} as const;
		const Parity = {
			EVEN: 2,
			NONE: 1,
			ODD: 3,
			UNKNOWN: 0,
		} as const;
		const StopBit = {
			SB_1: 1,
			SB_2: 2,
			SB_UNKNOWN: 0,
		}
	}
}
export class Signage {
	captureScreen(
		successCb: CaptureScreenSuccessCallback,
		failureCb: ScapFailureCallback,
		options?: CaptureScreenOptions,
	): void;
	getFailoverMode(
		successCb: FailoverModeSuccessCallback,
		failureCb: ScapFailureCallback,
	): void;
	getIntelligentAuto(
		successCb: IntelligentAutoSuccessCallback,
		failureCb: ScapFailureCallback,
	): void;
	getLanDaisyChain(
		successCb: LanDaisyChainSuccessCallback,
		failureCb: ScapFailureCallback,
	): void;
	getMirrorMode(
		successCb: MirrorModeSuccessCallback,
		failureCb: ScapFailureCallback,
	): void;
	getNoSignalImageMode(
		successCb: NoSignalImageModeSuccessCallback,
		failureCb: ScapFailureCallback,
	): void;
	getPowerSaveMode(
		successCb: PowerSaveModeSuccessCallback,
		failureCb: ScapFailureCallback,
	): void;
	getQuietMode(
		successCb: QuietModeSuccessCallback,
		failureCb: ScapFailureCallback,
	): void;
	getRS232CConfiguration(
		successCb: RS232CConfigurationSuccessCallback,
		failureCb: ScapFailureCallback,
	): void;
	getSignageInfo(
		successCb: SignageInfoSuccessCallback,
		failureCb: ScapFailureCallback,
	): void;
	getSimplinkStatus(
		successCb: SimplinkStatusSuccessCallback,
		failureCb: ScapFailureCallback,
	): void;
	getTileInfo(
		successCb: TileInfoSuccessCallback,
		failureCb: ScapFailureCallback,
	): void;
	getUsageData(
		successCb: UsageDataSuccessCallback,
		failureCb: ScapFailureCallback,
	): void;
	getUsagePermission(
		successCb: UsagePermissionSuccessCallback,
		failureCb: ScapFailureCallback,
	): void;
	enableCheckScreen(
		successCb: ScapSuccessCallback,
		failureCb: ScapFailureCallback,
		options: CheckScreen,
	): void;
	setDigitalAudioInputMode(
		successCb: ScapSuccessCallback,
		failureCb: ScapFailureCallback,
		options: DigitalAudioInputMode,
	): void;
	setFailoverMode(
		successCb: ScapSuccessCallback,
		failureCb: ScapFailureCallback,
		options: FailoverMode,
	): void;
	setIntelligentAuto(
		successCb: ScapSuccessCallback,
		failureCb: ScapFailureCallback,
		options: IntelligentAuto,
	): void;
	setIsmMethod(
		successCb: ScapSuccessCallback,
		failureCb: ScapFailureCallback,
		options: IsmMethod,
	): void;
	setLanDaisyChain(
		successCb: ScapSuccessCallback,
		failureCb: ScapFailureCallback,
		options: LanDaisyChain,
	): void;
	setMirrorMode(
		successCb: ScapSuccessCallback,
		failureCb: ScapFailureCallback,
		options: MirrorMode,
	): void;
	setNoSignalImageMode(
		successCb: ScapSuccessCallback,
		failureCb: ScapFailureCallback,
		options: NoSignalImageMode,
	): void;
	setPortraitMode(
		successCb: ScapSuccessCallback,
		failureCb: ScapFailureCallback,
		options: PortraitMode,
	): void;
	setPowerSaveMode(
		successCb: ScapSuccessCallback,
		failureCb: ScapFailureCallback,
		options: { powerSaveMode?: PowerSaveMode },
	): void;
	setQuietMode(
		successCb: ScapSuccessCallback,
		failureCb: ScapFailureCallback,
		options: QuietMode,
	): void;
	setRS232CConfiguration(
		successCb: ScapSuccessCallback,
		failureCb: ScapFailureCallback,
		options: RS232CConfiguration,
	): void;
	setSimplinkStatus(
		successCb: ScapSuccessCallback,
		failureCb: ScapFailureCallback,
		options: SimplinkStatus,
	): void;
	setTileInfo(
		successCb: ScapSuccessCallback,
		failureCb: ScapFailureCallback,
		options: TileInfo,
	): void;
	setUsagePermission(
		successCb: ScapSuccessCallback,
		failureCb: ScapFailureCallback,
		options: UsagePermission,
	): void;
}
// #endregion

// #region Sound
export type ExternalSpeaker = {
	externalSpeaker: boolean;
};

export type Muted = {
	muted: boolean;
};

export type SoundMode = {
	mode: Sound.SoundMode;
	balance?: number;  // -50 to 50
};

export type SoundOut = {
	speakerType: Sound.SpeakerType;
};

export type SoundStatus = {
	level: number;  // 0 to 100
	muted: boolean;
	externalSpeaker: boolean;
};

export type VolumeLevel = {
	level: number;  // 0 to 100
	volOsdEnabled?: boolean;
}

export type SoundModeSuccessCallback = (cbObject: SoundMode) => void;
export type SoundOutSuccessCallback = (cbObject: SoundOut) => void;
export type SoundStatusSuccessCallback = (cbObject: SoundStatus) => void;

export namespace Sound {
	const SoundMode = {
		STANDARD: "standard",
		MOVIE: "movie",
		NEWS: "news",
		SPORTS: "sports",
		MUSIC: "music",
		GAME: "game",
	} as const;
	const SpeakerType = {
		SignageSpeaker: "tv_speaker",
		LGSoundSync: "bt_soundbar",
	} as const;
}
export class Sound {
	getSoundMode(
		successCb: SoundModeSuccessCallback,
		failureCb: ScapFailureCallback,
	): void;
	getSoundOut(
		successCb: SoundOutSuccessCallback,
		failureCb: ScapFailureCallback,
	): void;
	getSoundStatus(
		successCb: SoundStatusSuccessCallback,
		failureCb: ScapFailureCallback,
	): void;
	setExternalSpeaker(
		successCb: ScapSuccessCallback,
		failureCb: ScapFailureCallback,
		options: ExternalSpeaker,
	): void;
	setMuted(
		successCb: ScapSuccessCallback,
		failureCb: ScapFailureCallback,
		options: Muted,
	): void;
	setSoundMode(
		successCb: ScapSuccessCallback,
		failureCb: ScapFailureCallback,
		options: SoundMode,
	): void;
	setSoundOut(
		successCb: ScapSuccessCallback,
		failureCb: ScapFailureCallback,
		options: SoundOut,
	): void;
	setVolumeLevel(
		successCb: ScapSuccessCallback,
		failureCb: ScapFailureCallback,
		options: VolumeLevel,
	): void;
}
// #endregion

// #region Storage
export type ChangeLogoImageOptions = {
	uri: string;
};

export type CopyFileOptions = {
	source: string;
	destination: string;
	ftpOption?: {
		secure?: string;
		secureOptions?: {
			privateKey?: string;
			passphrase?: string;
		};
		connTimeout?: number; // in milliseconds
		pasvTimeout?: number; // in milliseconds
		keepalive?: number; // in milliseconds
	};
	httpOption?: {
		maxRedirection?: number; // default is 0
		headers?: Record<string, string>;
		timeout?: number; // in milliseconds
	};
};

export type DecryptFileOptions = {
	cipher_mode: "aes-128-cbc" | "aes-128-ecb" | "aes-192-cbc" | "aes-192-ecb" | "aes-256-cbc" | "aes-256-ecb";
	password: string;
	inputPath: string;
	outputFileName: string;
};

export type DownloadFileOptions = {
	action: "start" | "pause" | "resume" | "cancel";
	source?: string;
	destination?: string;
	ticket?: number;
	ftpOption?: {
		connTimeout?: number; // in milliseconds
		keepalive?: number; // in milliseconds
	};
	httpOption?: {
		maxRedirection?: number; // default is 0
		headers?: Record<string, string>;
		timeout?: number; // in milliseconds
		cacertDomain?: string; // domain name for the CA certificate
		insecure?: boolean; // if true, skips certificate validation
	};
};

export type DownloadFileStatus = {
	ticket: number;
	status: "downloading" | "completed" | "paused" | "cancelled" | "failed";
	source?: string;
	destination?: string;
	amountReceived?: number; // in bytes
	amountTotal?: number; // in bytes
	reason?: string; // reason for failure or cancellation
};

export type DownloadFirmwareOptions = {
	uri: string;
};

export type FileData = {
	data: string | ArrayBuffer; // Base64 encoded string or ArrayBuffer
};

export type FileList = {
	files: {
		name?: string;
		type?: string;
		size?: number; // in bytes
	}[];
	totalCount: number;
};

export type FilePath = {
	path: string;
};

export type FilePathExists = {
	exists: boolean;
};

export type FileStat = {
	type: "file" | "directory" | "unknown";
	size: number; // in bytes
	atime: string; // last access time in ISO format
	mtime: string; // last modification time in ISO format
	ctime: string; // creation time in ISO format
};

export type FirmwareUpgradeStatus = {
	status: "idle" | "downloading" | "ready" | "in progress" | "completed" | "fail";
	downloadProgress: number;
	upgradeProgress: number;
};

export type FormatUSBOptions = {
	usbName: string;
	fsType?: "fat32";
}

export type MD5FilePath = {
	filePath: string;
};

export type MD5Hash = {
	md5hash: string;
};

export type MoveFileOptions = {
	oldPath: string;
	newPath: string;
};

export type ReadFileOptions = {
	path: string;
	position?: number; // position in bytes
	length?: number; // length in bytes, maximum is 10,240 bytes
	encoding?: "utf8" | "base64" | "binary";
};

export type RemoveAllOptions = {
	device: string;
};

export type RemoveApplication = {
	to: Storage.AppMode;
	deviceId?: string;
};

export type RemoveFileOptions = {
	file: string;
	recursive?: boolean; // if true, removes directories and their contents
};

export type StorageInfo = {
	free: number;  // in KB
	total: number; // in KB
	used: number;  // in KB
	externalMemory: Record<string, {
		free: number;  // in KB
		total: number; // in KB
		used: number;  // in KB
	}>;
};

export type Ticket = {
	ticket: number;
};

export type UnzipFileOptions = {
	zipPath: string;
	targetPath: string;
};

export type UpgradeApplicationOptions = {
	to: Storage.AppMode;
	recovery?: boolean;
	type?: Storage.AppType;
};

export type UpgradeFirmwareOptions = {
	path: string;
}

export type USBInfo = {
	usbList: {
		usbName: string;
		vendor: string;
		product: string;
		deviceId: string;
	}[];
};

export type WriteFileOptions = {
	path: string;
	data: string | ArrayBuffer; // Base64 encoded string or ArrayBuffer
	mode?: "truncate" | "append" | "position";
	position?: number; // position in bytes, required if mode is "position"
	length?: number; // length in bytes, maximum is 10,240 bytes
	encoding?: "utf8" | "base64" | "binary";
	offset?: number; // offset in bytes, required if mode is "position"
};

export type DownloadFileSuccessCallback = (cbObject: Ticket) => void;
export type DownloadFileStatusSuccessCallback = (cbObject: DownloadFileStatus) => void;
export type ExistsSuccessCallback = (cbObject: FilePathExists) => void;
export type FirmwareUpgradeStatusSuccessCallback = (cbObject: FirmwareUpgradeStatus) => void;
export type ListFilesSuccessCallback = (cbObject: FileList) => void;
export type MD5HashSuccessCallback = (cbObject: MD5Hash) => void;
export type ReadFileSuccessCallback = (cbObject: FileData) => void;
export type StatFileSuccessCallback = (cbObject: FileStat) => void;
export type StorageInfoSuccessCallback = (cbObject: StorageInfo) => void;
export type USBInfoSuccessCallback = (cbObject: USBInfo) => void;

// WebOS namespace conflicts with the global Storage interface.
// @ts-ignore
export namespace Storage {
	const AppMode = {
		LOCAL: "local",
		USB: "usb",
	} as const;
	const AppType = {
		IPK: "IPK",
		ZIP: "ZIP",
	} as const;
}
export class Storage {
	changeLogoImage(
		successCb: ScapSuccessCallback,
		failureCb: ScapFailureCallback,
		options: ChangeLogoImageOptions,
	)
	copyFile(
		successCb: ScapSuccessCallback,
		failureCb: ScapFailureCallback,
		options: CopyFileOptions,
	): void;
	decryptFile(
		successCb: ScapSuccessCallback,
		failureCb: ScapFailureCallback,
		options: DecryptFileOptions,
	): void;
	downloadFile(
		successCb: DownloadFileSuccessCallback,
		failureCb: ScapFailureCallback,
		options: DownloadFileOptions,
	): void;
	downloadFirmware(
		successCb: ScapSuccessCallback,
		failureCb: ScapFailureCallback,
		options: DownloadFirmwareOptions,
	): void;
	exists(
		successCb: ExistsSuccessCallback,
		failureCb: ScapFailureCallback,
		options: FilePath,
	): void;
	exportSettingData(
		successCb: ScapSuccessCallback,
		failureCb: ScapFailureCallback,
		options: FilePath,
	): void;
	formatUSB(
		successCb: ScapSuccessCallback,
		failureCb: ScapFailureCallback,
		options: FormatUSBOptions,
	): void;
	fsync(
		successCb: ScapSuccessCallback,
		failureCb: ScapFailureCallback,
		options?: FilePath,
	): void;
	getDownloadFileStatus(
		successCb: DownloadFileStatusSuccessCallback,
		failureCb: ScapFailureCallback,
		options: Ticket & { subscribe?: boolean },
	): void;
	getFirmwareUpgradeStatus(
		successCb: FirmwareUpgradeStatusSuccessCallback,
		failureCb: ScapFailureCallback,
	): void;
	getMD5Hash(
		successCb: MD5HashSuccessCallback,
		failureCb: ScapFailureCallback,
		options: MD5FilePath,
	): void;
	getStorageInfo(
		successCb: StorageInfoSuccessCallback,
		failureCb: ScapFailureCallback,
	): void;
	getUSBInfo(
		successCb: USBInfoSuccessCallback,
		failureCb: ScapFailureCallback,
	): void;
	importSettingData(
		successCb: ScapSuccessCallback,
		failureCb: ScapFailureCallback,
		options: FilePath,
	): void;
	listFiles(
		successCb: ListFilesSuccessCallback,
		failureCb: ScapFailureCallback,
		options: FilePath,
	): void;
	mkdir(
		successCb: ScapSuccessCallback,
		failureCb: ScapFailureCallback,
		options: FilePath,
	): void;
	moveFile(
		successCb: ScapSuccessCallback,
		failureCb: ScapFailureCallback,
		options: MoveFileOptions,
	): void;
	readFile(
		successCb: ReadFileSuccessCallback,
		failureCb: ScapFailureCallback,
		options: ReadFileOptions,
	): void;
	removeAll(
		successCb: ScapSuccessCallback,
		failureCb: ScapFailureCallback,
		options: RemoveAllOptions,
	): void;
	// A running app cannot remove itself by calling this API.
	removeApplication(
		successCb: ScapSuccessCallback,
		failureCb: ScapFailureCallback,
		options: RemoveApplication,
	): void;
	removeFile(
		successCb: ScapSuccessCallback,
		failureCb: ScapFailureCallback,
		options: RemoveFileOptions,
	): void;
	statFile(
		successCb: StatFileSuccessCallback,
		failureCb: ScapFailureCallback,
		options: FilePath,
	): void;
	unzipFile(
		successCb: ScapSuccessCallback,
		failureCb: ScapFailureCallback,
		options: UnzipFileOptions,
	): void;
	upgradeApplication(
		successCb: ScapSuccessCallback,
		failureCb: ScapFailureCallback,
		options: UpgradeApplicationOptions,
	): void;
	upgradeFirmware(
		successCb: ScapSuccessCallback,
		failureCb: ScapFailureCallback,
		options?: UpgradeFirmwareOptions,
	): void;
	writeFile(
		successCb: ScapSuccessCallback,
		failureCb: ScapFailureCallback,
		options: WriteFileOptions,
	): void;
}
// #endregion

// #region Time
export type AllOnOffTimers = {
	timerList: OnOffTimer[];
}

export type HolidaySchedule = {
	holidaySchedule?: {
		name?: string;
		settings?: {
			month?: number;
			year?: number;
			date?: number;
			repeatBy?: "dayOfWeek" | "dayOfMonth" | "none";
			days?: number;
			repeat?: "monthly" | "yearly" | "none";
		};
	}[];
	holidayScheduleList?: {
		_id?: string;
		name?: string;
		settings?: {
			month?: number;
			year?: number;
			date?: number;
			repeatBy?: "dayOfWeek" | "dayOfMonth" | "none";
			days?: number;
			repeat?: "monthly" | "yearly" | "none";
		};
	}[];
};

export type OnOffTimer = {
	id?: number;
	type: Time.TimerType;
	hour: number;
	minute: number;
	week: number;
}

export type TimerId = {
	id: number;
};

export type AllOnOffTimersSuccessCallback = (cbObject: AllOnOffTimers) => void;
export type HolidayScheduleSuccessCallback = (cbObject: HolidaySchedule) => void;

export namespace Time {
	const TimerType = {
		OFFTIMER: "OFFTIMER",
		ONTIMER: "ONTIMER",
	} as const;
	const TimerWeek = {
		MONDAY: 1,
		TUESDAY: 2,
		WEDNESDAY: 4,
		THURSDAY: 8,
		FRIDAY: 16,
		SATURDAY: 32,
		SUNDAY: 64,
		EVERYDAY: 127,
	} as const;
}
export class Time {
	cancelOnOffTimer(
		successCb: ScapSuccessCallback,
		failureCb: ScapFailureCallback,
		options: TimerId,
	): void;
	clearAllOnOffTimers(
		successCb: ScapSuccessCallback,
		failureCb: ScapFailureCallback,
	): void;
	clearHolidaySchedule(
		successCb: ScapSuccessCallback,
		failureCb: ScapFailureCallback,
	): void;
	getAllOnOffTimers(
		successCb: AllOnOffTimersSuccessCallback,
		failureCb: ScapFailureCallback,
	): void;
	getHolidaySchedule(
		successCb: HolidayScheduleSuccessCallback,
		failureCb: ScapFailureCallback,
	): void;
	reserveOnOffTimer(
		successCb: ScapSuccessCallback,
		failureCb: ScapFailureCallback,
		options: OnOffTimer,
	): void;
	setHolidaySchedule(
		successCb: ScapSuccessCallback,
		failureCb: ScapFailureCallback,
		options: HolidaySchedule,
	): void;
}
// #endregion

// #region Utility
export type Toast = {
	msg: string;
};

export class Utility {
	createToast(
		successCb: ScapSuccessCallback,
		failureCb: ScapFailureCallback,
		options: Toast,
	): void;
}
// #endregion
