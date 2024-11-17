const servers = [
    { id: 'server1', weight: 3, connections: 0 },
    { id: 'server2', weight: 2, connections: 0 },
    { id: 'server3', weight: 1, connections: 0 }
];

function chooseServer() {
    let minLoadServer = null;
    let minWeightedConnections = Infinity;

    servers.forEach(server => {
        const weightedConnections = server.connections / server.weight;
        if (weightedConnections < minWeightedConnections) {
            minWeightedConnections = weightedConnections;
            minLoadServer = server;
        }
    });

    return minLoadServer;
}

module.exports = { chooseServer };
