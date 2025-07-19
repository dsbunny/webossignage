# webossignage

## Errata
- `DeviceInfo.getSensorValues` may return `"Unsupported or Error"` per sensor: illuminance, checkscreen, rotation, fan, and humidity noted.
- `SensorValuesStatus.backlight` presented as a `string`.
- `SoundMode.balance` presented as a `string`.
- `cec_device_control` may cause `Configuration.getProperty` to fail.
