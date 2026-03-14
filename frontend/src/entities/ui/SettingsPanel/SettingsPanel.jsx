'use client';
import styles from './SettingsPanel.module.scss';
import { useRef, useEffect, useState } from 'react';
import useSettings from '@/entities/model/useSettings';

const SettingsPanel = () => {


    return (
        <aside className={`${styles.settings_panel}`}>
            <div className={`${styles.settings_panel__changing_font}`}>
                <button onClick={() => changingFont('add')}>+</button>
                <p ref={fontRef}>{fontSize}</p>
                <button onClick={() => changingFont('remove')}>-</button>
            </div>

            <div className={`${styles.settings_panel__themes}`}>
                <div onClick={() => handleThemeChange('light')}>
                    <input ref={lightThemeRef} type="checkbox" readOnly />
                    <p>☀️</p>
                </div>

                <div onClick={() => handleThemeChange('dark')}>
                    <input ref={darkThemeRef} type="checkbox" readOnly />
                    <p>🌙</p>
                </div>

                <div onClick={() => handleThemeChange('simple')}>
                    <input ref={simpleThemeRef} type="checkbox" readOnly />
                    <p>👓</p>
                </div>
            </div>
        </aside>
    );
};

export default SettingsPanel;