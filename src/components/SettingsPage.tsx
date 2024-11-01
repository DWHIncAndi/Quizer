// src/components/SettingsPage.tsx
import React from "react";

type SettingsPageProps = {
  colors: {
    primary: string;
    secondary: string;
    tertiary: string;
    quaternary: string;
  };
  setColors: React.Dispatch<
    React.SetStateAction<{
      primary: string;
      secondary: string;
      tertiary: string;
      quaternary: string;
    }>
  >;
};

const SettingsPage: React.FC<SettingsPageProps> = ({ colors, setColors }) => {
  const onColorChange = (colorType: string, value: string) => {
    setColors((prevColors) => ({
      ...prevColors,
      [colorType]: value,
    }));
  };

  return (
    <div>
      {Object.keys(colors).map((colorType) => (
        <div key={colorType} className="mb-4">
          <label>
            {colorType.charAt(0).toUpperCase() + colorType.slice(1)}
          </label>
          <input
            type="color"
            value={colors[colorType as keyof typeof colors]} // Setzt den aktuellen Farbwert
            onChange={(e) =>
              onColorChange(colorType.toLowerCase(), e.target.value)
            }
            className="border rounded-md"
          />
        </div>
      ))}
    </div>
  );
};

export default SettingsPage;
