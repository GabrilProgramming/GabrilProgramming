// DATA STUFF

export const nodes = [];

const addMainNode = (node) => {
  nodes.push(node);
};

const addChildNode = () => {};

addMainNode({ id: "Alice", size: 50 });
nodes.push({ id: "Bob", size: 10 });
nodes.push({ id: "Carol", size: 10 });

export const links = [
  { source: 0, target: 1 },
  { source: 0, target: 2 },
];
