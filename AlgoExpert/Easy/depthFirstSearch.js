/*
given a Node class with name and array of optional children nodes

input: empty array, traverses the tree DFS left to right, stores names in input array
output: return input array

go to first child
iterater thru all children
until you get to a leaf 
                A
      B         C         D            
   E     F             G     H
        I  J             K

A  B  E  F  
traverse takes in node
create var for current node -> node.name
push to array
if children.length
iterate through the children array
    call traverse on each child 

call traverse with node
*/
class Node {
    constructor(name) {
      this.name = name;
      this.children = [];
    }
  
    addChild(name) {
      this.children.push(new Node(name));
      return this;
    }

    depthFirstSearch(array) {
        function traverse(node) {
            array.push(node.name)
            if(node.children.length > 0) {
                for(let child of node.children) {
                    traverse(child)
                }
            }
        }
        traverse(this)
        return array;
    }
}

var node = new Node('A')
node.addChild('B')
node.addChild('C')
node.addChild('D')

node.children[0].addChild('E')
node.children[0].addChild('F')
node.children[2].addChild('G')
node.children[2].addChild('H')

node.children[0].children[1].addChild('I')
node.children[0].children[1].addChild('J')
node.children[2].children[0].addChild('K')

console.log(node.depthFirstSearch([]))