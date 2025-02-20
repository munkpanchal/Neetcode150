class Codec {
    encode(strs: string[]): string {
        return JSON.stringify(strs);
    }

    decode(str: string): string[] {
        return JSON.parse(str);
    }
}

const codec = new Codec();
const encoded = codec.encode(["hello", "world"]);
console.log(encoded);
console.log(codec.decode(encoded));
