// src/components/SettingsPage.tsx
import React from "react";
import { HexColorPicker } from "react-colorful";
import "../index.css";

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
  const onColorChange = (colorType: keyof typeof colors, value: string) => {
    const updatedColors = { ...colors, [colorType]: value };
    setColors(updatedColors);
    localStorage.setItem("colors", JSON.stringify(updatedColors));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 transition duration-500" style={{ backgroundColor: colors.quaternary }}>
      <h1 className="text-5xl font-extrabold text-center mb-8" style={{ color: colors.primary }}>
        Customize Your Theme
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-2xl">
        {Object.entries(colors).map(([colorType, colorValue]) => (
          <div key={colorType} className="flex flex-col mb-6">
            <label className="text-lg font-semibold mb-2" style={{ color: colors.primary }}>
              {`${colorType.charAt(0).toUpperCase()}${colorType.slice(1)} Color`}
            </label>
            <div className="color-picker">
              <HexColorPicker
                color={colorValue}
                onChange={(color) => onColorChange(colorType as keyof typeof colors, color)}
                className="w-full"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 w-full max-w-md p-2 rounded-xl shadow-lg text-center transition duration-200 ease-in-out" style={{ backgroundColor: colors.secondary }}>
        <h2 className="text-2xl font-bold py-2 rounded-md" style={{ color: colors.secondary, backgroundColor: colors.primary }}>
          Preview
        </h2>
        <p className="mt-2 rounded-md" style={{ color: colors.tertiary, backgroundColor: colors.quaternary }}>
          Adjust your theme colors here to see how they look in real-time!
        </p>
      </div>
    </div>
  );
};

export default SettingsPage;