'use client'
import { useEffect, useRef, useState } from 'react'

const useSettings = () => {
    const getSavedSettings = () => {
        const saved = localStorage.getItem('settings');
        return saved ? JSON.parse(saved) : null;
    };

    const saveSettings = (settings) => {
        localStorage.setItem('settings', JSON.stringify(settings));
    };

    return {
        savedSettings: getSavedSettings(),
        saveSettings
    };
};

const useSiteData = () => {
    const lightThemeRef = useRef(null);
    const darkThemeRef = useRef(null);
    const simpleThemeRef = useRef(null);
    const fontRef = useRef(null);

    const { saveSettings, savedSettings } = useSettings();
    const [fontSize, setFontSize] = useState(16);


    useEffect(() => {
        if (savedSettings) {
            if (savedSettings.fontSize) {
                setFontSize(savedSettings.fontSize);
                if (fontRef.current) {
                    fontRef.current.textContent = savedSettings.fontSize;
                    document.documentElement.style.fontSize = savedSettings.fontSize + 'px';
                }
            }

            if (savedSettings.theme) {
                switch(savedSettings.theme) {
                    case 'light':
                        lightThemeRef.current.checked = true;
                        break;
                    case 'dark':
                        darkThemeRef.current.checked = true;
                        break;
                    case 'simple':
                        simpleThemeRef.current.checked = true;
                        break;
                }
            }
        }
    }, [savedSettings]);

    const changingFont = (action) => {
        let newSize = fontSize;
        
        if (action === 'add') {
            newSize = fontSize + 2;
        } else {
            newSize = fontSize - 2;
        }
        
        if (newSize >= 12 && newSize <= 20) {
            document.documentElement.style.fontSize = newSize + 'px';
            
            setFontSize(newSize);
            if (fontRef.current) {
                fontRef.current.textContent = newSize;
            }
            
            saveSettings({
                fontSize: newSize,
                theme: getCurrentTheme()
            });
        }
    };

    const getCurrentTheme = () => {
        if (lightThemeRef.current.checked) return 'light';
        if (darkThemeRef.current.checked) return 'dark';
        if (simpleThemeRef.current.checked) return 'simple';
        return null;
    };

    const handleThemeChange = (theme) => {
        [lightThemeRef, darkThemeRef, simpleThemeRef].forEach(ref => {
            if (ref.current) ref.current.checked = false;
        });

        switch(theme) {
            case 'light':
                if (lightThemeRef.current) lightThemeRef.current.checked = true;
                break;
            case 'dark':
                if (darkThemeRef.current) darkThemeRef.current.checked = true;
                break;
            case 'simple':
                if (simpleThemeRef.current) simpleThemeRef.current.checked = true;
                break;
        }

        saveSettings({
            fontSize: fontSize,
            theme: theme
        });
    };

    return {
        changingFont,
        handleThemeChange,
        simpleThemeRef,
        darkThemeRef,
        lightThemeRef
    }
}

export default useSiteData