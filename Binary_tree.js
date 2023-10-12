class Node {
  constructor(data = null, right = null, left = null) {
    this.data = data;
    this.right = right;
    this.left = left;
  }
}

class Tree {
  constructor(root) {
    this.root = root;
    this.size = 0;
  }

  // metodo para agregar nuevo nodo
  addNode(value) {
    // se crea el nodo
    const newNode = new Node(value);
    // si la raiz no es nula el nuevo nodo será la raiz
    if (!this.root) {
      this.root = newNode;
    } else {
      // si no llama al metodo addNewNode pasandole la raiz y el nuevo nodo
      this.addNewNode(this.root, newNode);
    }
    this.size++;
  }

  addNewNode(node, newNode) {
    // primero verifica si es menor el nuevo nodo que la raiz
    if (newNode.data < node.data) {
      // si pasa verifica que no sea null el nodo que tiene a la oizquierda
      // si es null le asigna el nodo de la izquierda al nuevo nodo
      if (!node.left) {
        node.left = newNode;
        // si el nodo de la izquierda no es null hace recursividad llamandose a si misma pasandole como raiz el nodo de la izquierda
        // como en algun momento el arbol termina, ese node.left será en algun momento null
      } else {
        this.addNewNode(node.left, newNode);
      }
    }

    if (newNode.data > node.data) {
      if (!node.right) {
        node.right = newNode;
      } else {
        this.addNewNode(node.right, newNode);
      }
    }
  }
}

const tree = new Tree();

tree.addNode(80);
tree.addNode(70);
tree.addNode(100);
tree.addNode(60);
tree.addNode(75);
tree.addNode(90);
tree.addNode(50);
tree.addNode(49);
tree.addNode(65);

console.log(tree);
