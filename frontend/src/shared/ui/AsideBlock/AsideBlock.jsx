import styles from './AsideBlock.module.scss'
import Image from 'next/image'
import dataAsideBlock from './dataAsideBlock'

const AsideBlock = ({ asideName }) => {
    const AsideData = dataAsideBlock[asideName]

    return (
        <aside className={`${styles.aside_block}`}>
            <Image 
                src={AsideData[0]}
                width={1000}
                height={500}
            />

            <div>
                <p>{AsideData[1]}</p>
                <audio src={AsideData[2]} controls></audio>
            </div>
        </aside>
    )
}

export default AsideBlock