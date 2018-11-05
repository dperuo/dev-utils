/**
 * getDigest()
 *
 * Copywrite (c) 2018 Derek Peruo
 * Licensed under the MIT License
 * http://github.com/dperuo
 *
 * Returns a Promise of a digest for a given string.
 * Based on https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/digest
 *
 * @param {string} algorithm - The hash function to use. Default is sha256.
 *
 * @return {Promise} - The unique digest Promise.
 *
 * @example:
 *   getDigest('acb').then((hash) => {
 *     console.log(hash);
 *   });
 *   // => "ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad"
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { TextEncoder } from "text-encoding";
function getDigest(message) {
    return __awaiter(this, void 0, void 0, function* () {
        const encoder = new TextEncoder();
        const encodedMessage = encoder.encode(message);
        const hashedMessage = yield crypto.subtle.digest('SHA-256', encodedMessage);
        const hashArray = Array.from(new Uint8Array(hashedMessage));
        const digest = hashArray.map(b => ('00' + b.toString(16)).slice(-2)).join('');
        return digest;
    });
}
export { getDigest };
