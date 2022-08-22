const x = {
	a: "foo",
	b: {
		x: {
			m: "bar",
			n: {
				r: "ding",
			}
		},
		y: "100",
	},
	c: "wow",
}


const work = (input,temp,x,s)=>{
    if(typeof(x[input])=="object"){
        for(let i in x[input]){
            s = `${s}.${i}`
            work(i,temp,x[input],s);
        }
    }
    else temp[s] = x[input];
}

const testa = (x) => {
const temp = {};
let s = "";
for(let i in x){
    s = "";
    s= s+i;
   work(i,temp,x,s);
}
console.log(temp);
}


testa(x);

const z = {
	"a": "foo",
	"b.x.m": "bar",
	"b.x.n.r": "ding",
	"b.y": "100",
	"c": "wow"
}