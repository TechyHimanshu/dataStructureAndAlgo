// find if path exist in the graph traversal given the edges between nodes output should be true or false.

const edges = [[0,1],[1,2],[2,0]];
const source = 0, destination = 2

let adjList = {}

for(let i of edges){
    if(adjList[i[0]] === undefined){
        adjList[i[0]]=[]
        adjList[i[0]].push(i[1])
    }
    else adjList[i[0]].push(i[1])
    if(adjList[i[1]] === undefined){
        adjList[i[1]]=[]
        adjList[i[1]].push(i[0])
    }
    else  adjList[i[1]].push(i[0])
}

const pathExists = source => {
let visited = new Set()

const queue = [source];

while(queue.length>0){
    let node = queue.shift()
    let destinations = adjList[node];
    for(let i of destinations){
        if(!visited.has(i)){
            visited.add(i);
            queue.push(i);
        }
    }
}
if(visited.has(destination)) 
    console.log(true);
else  console.log(false);
}

console.log(adjList);
pathExists(source);