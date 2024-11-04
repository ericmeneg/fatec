class BinarySearchTree {
    constructor() {
        this.root = null
        this.string = ""
    }

    // método do argemiro
    insert(key) {
        if (this.root === null) {
            this.root = new Node(key)
        } else {
            this.insertNode(this.root, key)
        }
    }

    insertNode(node, key) {
        if (key < node.key) {
            if (node.left === null) {
                let nodeaux = new Node(key)
                node.left = nodeaux
            }
            else {
                this.insertNode(node.left, key)
            }
        } else {
            if (node.right === null) {
                let nodeaux = new Node(key)
                node.right = nodeaux
            } else {
                this.insertNode(node.right, key)
            }
        }
    }

    // método do livro
    // insert(node, key) {
    //     if (node.key > key) {
    //         if (node.left === null) {
    //             node.left = new Node(key)
    //         } else {
    //             this.insert(node.left, key)
    //         }
    //     } else {
    //         if (node.right === null) {
    //             node.right = new Node(key)
    //         } else {
    //             this.insert(node.right, key)
    //         }
    //     }
    // }

    // método meu
    // insert(value) {
    //     element = new Node(value)
    //     current = this.root
    //     if (this.root === null) {
    //         this.root = element
    //         return
    //     }

    //     while (true) {
    //         if (current.key > element.key && current.left === null) {
    //             current.left = element
    //             break
    //         } else if (current.key > element.key) {
    //             current = current.left
    //             continue
    //         }
    //         if (current.key < element.key && current.right === null) {
    //             current.right = element
    //             break
    //         } else if (current.key < element.key) {
    //             current = current.right
    //         }
    //     }
    // }

    search(element) {

    }

    inOrderTraverse() {
        this.string = ""
        this.inOrderTraverseNode(this.root)
    }

    inOrderTraverseNode(node) {
        if (node != null) {
            this.inOrderTraverseNode(node.left)
            this.appendToString(node.key)
            this.inOrderTraverseNode(node.right)
        }
    }

    preOrderTraverse() {
        this.preOrderTraverseNode(this.root)
    }

    preOrderTraverseNode(node){
        if (node != null) {
            console.log(node.key)
            this.preOrderTraverseNode(node.left)
            this.preOrderTraverseNode(node.right)
        }
    }

    postOrderTraverse(){
        this.postOrderTraverseNode(this.root)
    }

    postOrderTraverseNode(node) {
        if (node != null) {
            this.postOrderTraverseNode(node.left)
            this.postOrderTraverseNode(node.right)
            console.log(node.key)
        }
    }

    appendToString(value) {
        let flag = false
        if (this.string == "") {
            flag = true
        }
        this.string = this.string + `, ${value}`
        if (flag) {
            this.string = this.string.slice(2)
        }
    }

    min() {
        current = this.root
        while (true) {
            if (current.left !== null) {
                current = current.left
            } else {
                return current
            }
        }
    }

    max() {
        current = this.root
        while (true) {
            if (current.right !== null) {
                current = current.right
            } else {
                return current
            }
        }
    }

    remove(key) {

    }


}

class Node {
    constructor(value) {
        this.key = value
        this.left = null
        this.right = null
    }
}

let arvore = new BinarySearchTree()
arvore.insert(7)
arvore.insert(5)
arvore.insert(12)
arvore.insert(3)
arvore.insert(9)
arvore.insert(15)
arvore.insert(4)
arvore.insert(11)
arvore.insert(13)

arvore.inOrderTraverse()
console.log(arvore.string)
console.log("-----------------------------------")
arvore.preOrderTraverse()
console.log("-----------------------------------")
arvore.postOrderTraverse()