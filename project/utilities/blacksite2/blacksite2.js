//Personal Crypto Libraries

function b64_en(bytes) {
  const binString = Array.from(new TextEncoder().encode(bytes), (byte) =>
    String.fromCodePoint(byte),
  ).join("");
  return btoa(binString);
}

function b64_de(base64) {
  const binString = atob(base64);
  const returnString = new TextDecoder().decode(Uint8Array.from(binString, (m) => m.codePointAt(0)));
  return returnString;
}

