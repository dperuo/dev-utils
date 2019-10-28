var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { TextEncoder } from "text-encoding";
function getDigest(text, algorithm = 'SHA-256') {
    return __awaiter(this, void 0, void 0, function* () {
        const encoder = new TextEncoder();
        const encodedText = encoder.encode(text);
        const hashedText = yield crypto.subtle.digest(algorithm, encodedText);
        const intArray = new Uint8Array(hashedText);
        const hashArray = Array.from(intArray);
        const digestArray = hashArray.map(value => {
            const NUM_BASE = 16;
            const HEX_PADDING = '00';
            const HEX_WITHOUT_PADDING = -2;
            const PADDED_HEX_VAL = `${HEX_PADDING}${value.toString(NUM_BASE)}`;
            const output = PADDED_HEX_VAL.slice(HEX_WITHOUT_PADDING);
            return output;
        });
        const digest = digestArray.join('');
        return digest;
    });
}
export { getDigest };
