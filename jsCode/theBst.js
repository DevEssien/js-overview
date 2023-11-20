class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function isValidBST(root) {
    // Initialize the previous node with a value that is smaller than the minimum possible value
    let prev = { value: -Infinity };
  
    // Function to perform in-order traversal and check for BST property
    function inOrderTraversal(node) {
      if (!node) return true; // Reached the end of a branch
  
      // Recursively check the left subtree
      if (!inOrderTraversal(node.left)) return false;
  
      // Check if the current node's value is greater than the previous node's value
      if (node.value <= prev.value) return false;
  
      // Update the previous node's value
      prev.value = node.value;
  
      // Recursively check the right subtree
      return inOrderTraversal(node.right);
    }
  
    // Start the in-order traversal from the root
    return inOrderTraversal(root);
  }
  
  // Example usage:
  const root = new TreeNode(4);
  root.left = new TreeNode(1);
  root.right = new TreeNode(3);
  
  if (isValidBST(root)) {
    console.log("The binary tree is a valid BST.");
  } else {
    console.log("The binary tree is not a valid BST.");
  }
  