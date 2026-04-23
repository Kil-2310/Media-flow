import { useState, useEffect } from 'react';
import useSettingsLocalStorage from './useSettingsLocalStorage';

const useSettings = () => {
    const { saveSettings, savedSettings } = useSettingsLocalStorage();

    const [useUserTheme, setUserTheme] = useState(savedSettings?.theme ?? 'light');
    const [useFontSize, setFontSize] = useState(savedSettings?.fontSize ?? 16);

    useEffect(() => {
        document.documentElement.style.fontSize = useFontSize + 'px';

        saveSettings({
            fontSize: useFontSize,
            theme: useUserTheme,
        });
    }, [useUserTheme, useFontSize]);

    return {
        useUserTheme,
        useFontSize,
        setUserTheme,
        setFontSize,
    };
};

export default useSettings;
