'use client';

import { Pie, PieChart, Sector } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';
import styles from './PieChart.module.scss';
import dataPieChart from './dataPieChart';

const RADIAN = Math.PI / 180;
const renderActiveShape = (props) => {
    const {
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        startAngle,
        endAngle,
        fill,
        payload,
        percent,
        value,
    } = props;

    const sin = Math.sin(-RADIAN * (midAngle || 1));
    const cos = Math.cos(-RADIAN * (midAngle || 1));
    const sx = (cx || 0) + ((outerRadius || 0) + 10) * cos;
    const sy = (cy || 0) + ((outerRadius || 0) + 10) * sin;
    const mx = (cx || 0) + ((outerRadius || 0) + 30) * cos;
    const my = (cy || 0) + ((outerRadius || 0) + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';

    return (
        <g>
            <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
                {payload.name}
            </text>
            <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                startAngle={startAngle}
                endAngle={endAngle}
                fill={fill}
            />
            <Sector
                cx={cx}
                cy={cy}
                startAngle={startAngle}
                endAngle={endAngle}
                innerRadius={(outerRadius || 0) + 6}
                outerRadius={(outerRadius || 0) + 10}
                fill={fill}
            />
            <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
            <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
            <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">
                {`${value}`}
            </text>
            <text
                x={ex + (cos >= 0 ? 1 : -1) * 12}
                y={ey}
                dy={18}
                textAnchor={textAnchor}
                fill="#999"
            >
                {`(${((percent || 1) * 100).toFixed(1)}%)`}
            </text>
        </g>
    );
};

export default function CustomActiveShapePieChart({
    isAnimationActive = true,
    TitlePieChart = 'vrp_region',
}) {
    const data = dataPieChart[TitlePieChart];

    return (
        <div>
            <p className="simple_text">
                Навидитесь на нужную вам область, чтобы узнать процентное соотношение ВРП Курской
                области на момент 2024 года:
            </p>
            <section className={styles.container_pie_chart}>
                <PieChart
                    style={{ width: '100%', height: '100%', aspectRatio: 1 }}
                    responsive
                    margin={{
                        bottom: 30,
                    }}
                >
                    <Pie
                        activeShape={renderActiveShape}
                        activeIndex={1} // Сектор активен по умолчанию
                        data={data}
                        cx="50%"
                        cy="50%"
                        innerRadius="60%"
                        outerRadius="90%"
                        fill="#8986bb"
                        dataKey="value"
                        isAnimationActive={isAnimationActive}
                    />
                    <RechartsDevtools />
                </PieChart>
            </section>
        </div>
    );
}
