import React, { useState, useEffect } from 'react';
import * as d3 from 'd3';

function Dashboard() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/predict')
            .then(response => response.json())
            .then(data => setData(data));
    }, []);

    useEffect(() => {
        if (data.length) {
            const svg = d3.select('#chart')
                .attr('width', 800)
                .attr('height', 400);

            svg.selectAll('rect')
                .data(data)
                .enter()
                .append('rect')
                .attr('x', (d, i) => i * 30)
                .attr('y', d => 400 - d / 1000)
                .attr('width', 25)
                .attr('height', d => d / 1000)
                .attr('fill', 'teal');
        }
    }, [data]);

    return <svg id="chart"></svg>;
}

export default Dashboard;
