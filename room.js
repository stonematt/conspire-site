/**
 * Room Generator for Conspire
 * Based on code shared by Jaromil (Dyne.org)
 */

/**
 * Encodes a buffer into a Base58 string.
 * @param {Uint8Array} buffer - The buffer to encode.
 * @returns {string} The Base58 encoded string.
 */
function encodeBase58(buffer) {
    const ALPHABET = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
    if (buffer.length === 0) return '';

    let digits = [0];
    for (let i = 0; i < buffer.length; i++) {
        for (let j = 0; j < digits.length; j++) {
            digits[j] <<= 8;
        }
        digits[0] += buffer[i];
        let carry = 0;
        for (let j = 0; j < digits.length; j++) {
            digits[j] += carry;
            carry = (digits[j] / 58) | 0;
            digits[j] %= 58;
        }
        while (carry) {
            digits.push(carry % 58);
            carry = (carry / 58) | 0;
        }
    }

    // Convert digits to Base58 characters
    let str = '';
    for (let i = digits.length - 1; i >= 0; i--) {
        str += ALPHABET[digits[i]];
    }

    // Add leading '1's for each leading zero byte
    for (let i = 0; i < buffer.length && buffer[i] === 0; i++) {
        str = '1' + str;
    }

    return str;
}

/**
 * Generates a random room ID
 * @param {number} length - Number of random bytes (default: 16)
 * @returns {string} Base58 encoded room ID
 */
function generateRoomId(length = 16) {
    const buffer = new Uint8Array(length);
    crypto.getRandomValues(buffer);
    return encodeBase58(buffer);
}

/**
 * Opens a new Conspire room in the current window
 */
function openNewRoom() {
    const roomId = generateRoomId();
    // Navigate directly to Conspire on port 8443
    window.location.href = 'https://' + window.location.hostname + ':8443/room/' + roomId;
}

// Attach event listener when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    const newRoomBtn = document.getElementById('new-room');
    if (newRoomBtn) {
        newRoomBtn.addEventListener('click', openNewRoom);
    }
});
