
class Graph {

    constructor(size) {
        this.size = size;
        this.adjacencyList = [];

        for (let i = 0; i < size; i++) {
            this.adjacencyList.push([]);
        }
    }

    addEdge(u, v) {
        this.adjacencyList[u].push(v);
    }

    dfs(s) {
        let adj = this.adjacencyList;
        let visited = Array(adj.size).fill(false);
        let stack = [s];
        let v;

        visited[s] = true;

        return {
            [Symbol.iterator]() {
                return this;
            },
            next() {
                if (!stack.length) {
                    return { done: true };
                }

                v = stack.pop();

                adj[v].forEach(x => {
                    if (!visited[x]) {
                        stack.push(x);
                        visited[x] = true;
                    }
                });

                return { value: v }
            }
        };
    }

    bfs(s) {
        let adj = this.adjacencyList;
        let visited = Array(adj.size).fill(false);
        let queue = [s];
        let v;

        visited[s] = true;

        return {
            [Symbol.iterator]() {
                return this;
            },
            next() {
                if (!queue.length) {
                    return { done: true };
                }

                v = queue.shift();

                adj[v].forEach(x => {
                    if (!visited[x]) {
                        queue.push(x);
                        visited[x] = true;
                    }
                });

                return { value: v }
            }
        };
    }
}

let graph = new Graph(15);

graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(1, 4);
graph.addEdge(2, 5);
graph.addEdge(2, 6);
graph.addEdge(4, 7);
graph.addEdge(4, 8);
graph.addEdge(7, 11);
graph.addEdge(7, 12);
graph.addEdge(5, 9);
graph.addEdge(5, 10);

console.log('bfs', [...graph.bfs(1)]);
console.log('dfs', [...graph.dfs(1)]);
