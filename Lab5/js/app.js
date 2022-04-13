var app = new Vue({
    el: '#encoder',
    data: {
        bits: [],
        encodedBits1: [],
        encodedBits2: [],
        encodedBits3: [],
        encodedBits4: [],
        encodedBits5: [],
        encodedBits6: [],
        encodedBits7: [],
        encodedBits8: [],
        encodedBits9: [],
        status: '',
        numberOfBits: 8,
        validateBit: validateBit
    },
    created: function () {
        this.bits = getBitstream(this.numberOfBits);
    },
    methods: {
        encode: function(){
            this.encodedBits1 = getNRZL(this.bits);
            this.encodedBits2 = getNRZM(this.bits);
            this.encodedBits3 = getNRZS(this.bits);
            this.encodedBits4 = getRZ(this.bits);
            this.encodedBits5 = getBL(this.bits);
            this.encodedBits6 = getBM(this.bits);
            this.encodedBits7 = getBS(this.bits);
            this.encodedBits8 = getBLdiff(this.bits);
            this.encodedBits9 = getDelay(this.bits);
        }
    }
})


