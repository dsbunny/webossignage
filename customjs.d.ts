// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab

export type CustomFailure = {
	errorCode: string;
	errorText: string;
};

export type CustomSuccessCallback = () => void;
export type CustomFailureCallback = (error: CustomFailure) => void;

export type AppInfo = {
	appinfo: {
		icon: string;
		id: "com.lg.app.signage";
		main: string;
		title: string;
		type: "web";
		version: string;
		allowAudioCapture?: boolean;
		allowVideoCapture?: boolean;
		appDescription?: string;
		crossDomainSecurity?: "high" | "low" | "disable";
		disableBackHistoryAPI?: boolean;
		inspectable?: boolean;
		largeIcon?: string;
		splashBackground?: string;
		supportedOrientations?: ("Landscape" | "InvertedPortrait" | "InvertedLandscape" | "Portrait")[];
		useVirtualKeyboard?: boolean;
		vendor?: string;
	}
};

export type ChangePasswordOptions = {
	currentPassword: string;
	newPassword: string;
};

export type ClearBrowsingDataOptions = {
	types: Custom.CLEARBROWSINGDATATYPES[];
};

export type DisableApplicationOptions = {
	reset?: boolean;
};

export type PowerOnOffHistory = {
	powerOnOffHistory: string[];
};

export type USBAttachEvent = {
	deviceList: {
		type: string;
		vendor: string;
		device: string;
	}[];
};

export type WebOSVersion = {
	webOSVersion: string;
};

export type AppInfoSuccessCallback = (cbObject: AppInfo) => void;
export type PowerOnOffHistorySuccessCallback = (cbObject: PowerOnOffHistory) => void;
export type USBAttachEventSuccessCallback = (cbObject: USBAttachEvent) => void;
export type WebOSVersionSuccessCallback = (cbObject: WebOSVersion) => void;

export type Master = {
	basetime: string;
};

export type MasterOptions = {
	ip: string;
	port: number;
	videoElement?: HTMLVideoElement;
};

export type SlaveOptions = {
	ip: string;
	port: number;
	basetime: string;
	videoElement?: HTMLVideoElement;
}

export type MasterSuccessCallback = (cbObject: Master) => void;

export namespace Custom {

	const enum CLEARBROWSINGDATATYPES {
		ALL = "all",
		APPCACHE = "appcache",
		CACHE = "cache",
		CHANNELIDS = "channelIDs",
		COOKIES = "cookies",
		FILESYSTEMS = "fileSystems",
		INDEXEDDB = "indexedDB",
		LOCALSTORAGE = "localStorage",
		SERVICEWORKERS = "serviceWorkers",
		WEBSQL = "webSQL",
	}

	// #region Configuration
	class Configuration {
		changePassword(
			successCb: CustomSuccessCallback,
			failureCb: CustomFailureCallback,
			options: ChangePasswordOptions,
		): void;
		clearBrowsingData(
			successCb: CustomSuccessCallback,
			failureCb: CustomFailureCallback,
			options: ClearBrowsingDataOptions,
		): void;
		getPowerOnOffHistory(
			successCb: PowerOnOffHistorySuccessCallback,
			failureCb: CustomFailureCallback,
		): void;
	}
	// #endregion

	// #region Signage
	class Signage {
		addUSBAttachEventListener(
			successCb: USBAttachEventSuccessCallback,
			failureCb: CustomFailureCallback,
		): void;
		disableApplication(
			successCb: CustomSuccessCallback,
			failureCb: CustomFailureCallback,
			options: DisableApplicationOptions,
		): void;
		getApplicationInfo(
			successCb: AppInfoSuccessCallback,
			failureCb: CustomFailureCallback,
		): void;
		getwebOSVersion(
			successCb: WebOSVersionSuccessCallback,
			failureCb: CustomFailureCallback,
		): void;
		removeUSBAttachEventListener(
			successCb: CustomSuccessCallback,
			failureCb: CustomFailureCallback,
		): void;
	}
	// #endregion

	// #region VideoSync
	class VideoSync {
		setMaster(
			successCb: MasterSuccessCallback,
			failureCb: CustomFailureCallback,
			options: MasterOptions,
		): void;
		setSlave(
			successCb: CustomSuccessCallback,
			failureCb: CustomFailureCallback,
			options: SlaveOptions,
		): void;
	}
	// #endregion
}
