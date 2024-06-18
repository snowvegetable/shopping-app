export async function hashString(message: string) {
  const encoder = new TextEncoder();
  const data = encoder.encode(message);
  const hash = await crypto.subtle.digest('SHA-256', data);
  return bufferToHex(hash);
}

function bufferToHex(buffer: ArrayBuffer) {
  const byteArray = new Uint8Array(buffer);
  const hexString = byteArray.reduce((acc, byte) => {
    return acc + byte.toString(16).padStart(2, '0');
  }, '');
  return hexString;
}
