import { useState, useEffect } from 'react';
import useSettingsLocalStorage from './useSettingsLocalStorage';

const useSettings = () => {
    const { saveSettings, savedSettings } = useSettingsLocalStorage();

    const settings = savedSettings;

    const [useUserTheme, setUserTheme] = useState(settings?.theme ?? 'light');
    const [useFontSize, setFontSize] = useState(settings?.fontSize ?? 16);

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
