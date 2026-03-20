import dataTable from './dataTable'
import styles from './Table.module.scss'


const Table = ({ TitleTable }) => {
    const data = dataTable[TitleTable]

    return (
        <section className={`${styles.container}`}>
            <table className={`${styles.container__table}`}>
                <thead>
                    <tr>
                        {data['headers'].map((head, index) => (
                            <th key={index}>{head}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data['rows'].map((row, index) => (
                        <tr key={index}>
                            {row.map((description, index) => (
                                <td key={index}>{description}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    )

}

export default Table