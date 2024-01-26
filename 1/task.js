import Node from './Node';

const reverse = (list) => {
  let reversedList = null;
  let current = list;

  while (current) {
    reversedList = new Node(current.getValue(), reversedList);
    current = current.getNext();
  }

  return reversedList;
};

const numbers = new Node(1, new Node(2, new Node(3))); // (1, 2, 3)
const reversedNumbers = reverse(numbers); // (3, 2, 1)
