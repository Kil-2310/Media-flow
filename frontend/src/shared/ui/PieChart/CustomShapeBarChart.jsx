'use client';

import styles from './CustomShapeBarChart.jsx.module.scss';

import {
BarChart,
Bar,
XAxis,
YAxis,
CartesianGrid,
LabelList,
Label,
Tooltip,
} from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d', '#ff6b6b'];

// Данные по экономике Курской области 2024
const data = [
{
    name: 'ВРП (млрд руб.)',
    value: 832,
    description: 'Валовой региональный продукт',
},
{
    name: 'Промпроизводство (%)',
    value: 102.2,
    description: 'Индекс промышленного производства',
},
{
    name: 'Инвестиции (млрд руб.)',
    value: 261,
    description: 'Инвестиции в основной капитал',
},
{
    name: 'Оборот розницы (млрд руб.)',
    value: 349.3,
    description: 'Оборот розничной торговли',
},
{
    name: 'Зарплата (тыс. руб.)',
    value: 64.4,
    description: 'Среднемесячная зарплата',
},
{
    name: 'Обрабатывающие (%)',
    value: 107.7,
    description: 'Индекс обрабатывающих производств',
},
{
    name: 'Металлоизделия (%)',
    value: 187.4,
    description: 'Производство готовых металлических изделий',
},
];

// Данные для сравнительной диаграммы (отрасли промышленности)
const industryData = [
{
    name: 'Металлоизделия',
    index: 187.4,
},
{
    name: 'Мебель',
    index: 146.5,
},
{
    name: 'Компьютеры и оптика',
    index: 131.9,
},
{
    name: 'Автотранспорт',
    index: 128.5,
},
{
    name: 'Химическое',
    index: 122.7,
},
{
    name: 'Обрабатывающие',
    index: 107.7,
},
{
    name: 'Добыча',
    index: 101.6,
},
];

const getPath = (x, y, width, height) => {
return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
${x + width / 2}, ${y}
C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
Z`;
};

const TriangleBar = (props) => {
const { x, y, width, height, index } = props;
const color = colors[index % colors.length];

return (
    <path
        strokeWidth={props.isActive ? 5 : 0}
        d={getPath(Number(x), Number(y), Number(width), Number(height))}
        stroke={color}
        fill={color}
        style={{
            transition: 'stroke-width 0.3s ease-out',
        }}
    />
);
};

const CustomColorLabel = (props) => {
const fill = colors[(props.index ?? 0) % colors.length];
return <Label {...props} fill={fill} />;
};

export default function KurskEconomyChart() {
return (
    <section className={styles.container}>
        <BarChart
            style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
            responsive
            data={industryData}
            margin={{
                top: 20,
                right: 30,
                left: 50,
                bottom: 20,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip 
                cursor={{ fillOpacity: 0.5 }}
                formatter={(value, name) => [`${value}%`, 'Индекс производства']}
                labelFormatter={(label) => `Отрасль: ${label}`}
            />
            <XAxis 
                dataKey="name" 
                angle={-45} 
                textAnchor="end" 
                height={95}
                interval={0}
                tick={{ fontSize: 14 }}
            />
            <YAxis 
                width={30}
                tickFormatter={(value) => `${value}%`}
                domain={[0, 200]}
            />
            <Bar 
                dataKey="index" 
                fill="#0088FE" 
                shape={TriangleBar} 
                activeBar
                name="Индекс промышленного производства"
            >
                <LabelList content={CustomColorLabel} position="top" formatter={(value) => `${value}%`} />
            </Bar>
            <RechartsDevtools />
        </BarChart>
    </section>
);
}