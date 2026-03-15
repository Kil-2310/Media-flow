const useSettingsLocalStorage = () => {
    const getSavedSettings = () => {
        if (typeof window === 'undefined') {
            return null;
        }
        
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

export default useSettingsLocalStorage