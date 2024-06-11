//Personal Crypto Libraries

function EncodeB64(bytes) {
    const binString = Array.from(new TextEncoder().encode(bytes), (byte) =>
      String.fromCodePoint(byte),
    ).join("");
    return btoa(binString);
}

function DecodeB64(base64) {
    const binString = atob(base64);
    const returnString = new TextDecoder().decode(Uint8Array.from(binString, (m) => m.codePointAt(0)));
    return returnString;
}