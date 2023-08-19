class Node {
    constructor(val, neighbors) {
        this.val = val === undefined ? 0 : val;
        this.neighbors = neighbors === undefined ? [] : neighbors;
    }
};
/**
 * Clones a given graph node and its neighbors recursively while preserving the graph structure.
 *
 * @param {Node} node - the input node to clone
 * @param {Map<Node, Node>} clonedNodes - a map to keep track of cloned nodes to avoid creating duplicates
 * @return {Node} - a cloned node that is a copy of the input node and its neighbors
 */
 var cloneGraph = function (node, clonedNodes = new Map()) {
    // If the input node is null, return null
    if (!node) return null;
  
    // If the input node has already been cloned, return the corresponding cloned node
    if (clonedNodes.has(node)) return clonedNodes.get(node);
  
    // Create a new node object that is a copy of the input node
    const clonedNode = new Node(node.val);
  
    // Add the input node and its corresponding cloned node to the clonedNodes map
    clonedNodes.set(node, clonedNode);
  
    // Loop over each neighbor of the input node
    for (const neighbor of node.neighbors) {
      // Recursively call cloneGraph on the neighbor to create a deep copy of the neighbor node
      const clonedNeighbor = cloneGraph(neighbor, clonedNodes);
  
      // Add the cloned neighbor to the clonedNode.neighbors array to preserve the graph structure
      clonedNode.neighbors.push(clonedNeighbor);
    }
  
    // Return the cloned node object
    return clonedNode;
  };
let adjList = [[2,4],[1,3],[2,4],[1,3]]
cloneGraph(adjList)