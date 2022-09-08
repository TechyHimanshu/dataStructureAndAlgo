function solution(words) {
    let obj = {};
    let obj2 = {};
    const ans = [];
    words.sort((a, b) => a.length < b.length);
    const temp = words[0];
    const temparr = temp.split("");
    for (let i of temparr) {
        if (obj[i] === undefined) obj[i] = 1;
        else obj[i] = obj[i] + 1;
    }
    for (let i = 1; i < words.length; i++) {
        if (temp.length <= words[i].length) {
            const arr = words[i].split("");
            for (let j of arr) {
                if (obj2[j] === undefined) {
                    obj2[j] = 1
                }
                else obj2[j] = obj2[j] + 1;
            }
        }
        for (let [key, value] of Object.entries(obj)) {
            if (obj2[key]) {
                obj[key] = value > obj2[key] ? obj2[key] : value;
            }
            if (!obj2[x]) delete obj[x];
        }
        obj2 = {};
    };
    for (let [key, value] of Object.entries(obj)) {
        for (let i = 0; i < value; i++) {
            ans.push(key);
        }
    }

    return ans;
}

solution(["bella", "label", "roller"]);