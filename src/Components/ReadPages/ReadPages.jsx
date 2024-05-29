import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

const ReadPages = () => {
    return (
        <div>
            <BarChart width={600} height={300} data={yourData}>
                <XAxis dataKey="category" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" shape={customShape} />
            </BarChart>
        </div>
    );
};

export default ReadPages;