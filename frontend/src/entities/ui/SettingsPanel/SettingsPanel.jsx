import styles from './SettingsPanel.module.scss'

const SettingsPanel = () => {
    return (
        <aside className={`${styles.settings_panel}`}>
            <div className={`${styles.settings_panel__changing_font}`}>
                <button>+</button>
                <p></p>
                <button>-</button>
            </div>

            <div className={`${styles.settings_panel__themes}`}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </aside>
    )
}

export default SettingsPanel