//(1, "abcd"), (2, "efgh"), (4, "mnop"), (5, "qrst"),6,7,8,9,10 (3, "ijkl")
//abcd
//efgh
//
//ijklmnop
//[{4, "mnop"}, {5, "qrst"}]
let data = (stream) => {
    let store = []
    let lastSeq = 0;

    while (stream != null) {
        if (stream.seqNum - 1 == lastSeq) {
            console.log([stream.seqNum, stream.data])
            lastSeq += 1

            while (store.includes(lastSeq + 1)) {
                console.log(store[strea.seqNum + 1], [stream.SeqNum, stream.data])
                lastSeq += 1
            }
        } else {
            store.push([stream.seqNum, stream.data]) //push 4 //push 5
        }
    }
}

let wholeMinuteDilema = () => {

}
