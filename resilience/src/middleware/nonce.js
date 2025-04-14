const { sha256 } = require("js-sha256");

export default function generateNonce(infos: string, difficulty = 3) {
  let nonce = 0;
  const targetPrefix = "0".repeat(difficulty);

  while (true) {
    const dataToHash = `${infos}${nonce}`;
    const hash = sha256(dataToHash);

    if (hash.startsWith(targetPrefix)) {
      return { nonce, proofOfWork: hash };
    }
    nonce++;
  }
}
