# webossignage

## Errata
- `CurrentTime.ntpServerAddress` may not return if not set through API.
- `DeviceInfo.getSensorValues` may return `"Unsupported or Error"` per sensor: illuminance, checkscreen, rotation, fan, and humidity noted.
- `SensorValuesStatus.backlight` may present as a `string`.
- `SoundMode.balance` may present as a `string`.
- `cec_device_control` may cause `Configuration.getProperty` to fail.
- `PictureProperty.superResolution` may present as `Unsupported`.
- `UsageData` may present as `string` values instead of `number`.
- `PowerOnDelay.delayTime` may present as a `string` value instead of a `number`.
