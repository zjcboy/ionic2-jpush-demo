/**
 * @name CallNumber
 * @description
 * Call a number directly from your Cordova/Ionic application.
 *
 * @usage
 * ```
 * import {CallNumber} from 'ionic-native';
 *
 * CallNumber.callNumber(18001010101, true)
 *   .then(() => console.log('Launched dialer!'))
 *   .catch(() => console.log('Error launching dialer'));
 *
 * ```
 */
export declare class CallNumber {
    /**
     * Calls a phone number
     * @param numberToCall {number} The phone number to call
     * @param bypassAppChooser {boolean} Set to true to bypass the app chooser and go directly to dialer
     */
    static callNumber(numberToCall: number, bypassAppChooser: boolean): Promise<any>;
}
