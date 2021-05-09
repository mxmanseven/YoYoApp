import { Injectable } from '@angular/core';
import { BluetoothCore } from '@manekinekko/angular-web-bluetooth';

@Injectable({
  providedIn: 'root'
})
export class KnhBleService {

  // knh todo - sett service and characteristic guids
  static GATT_PRIMARY_SERVICE = 'battery_service';
  static GATT_CHARACTERISTIC_BATTERY_LEVEL = 'battery_level';

  constructor(public ble: BluetoothCore) { }

  getDevice() {
    // call this method to get the connected device
    return this.ble.getDevice$();
  }

  disconnectDevice() {
    this.ble.disconnectDevice();
  }

  value() {
    console.log('Getting Battery level...');

    return this.ble
      .value$({
        service: 'battery_service',
        characteristic: 'battery_level'
      });
  }
}
