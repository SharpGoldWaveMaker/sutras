import { UserConfig, DeviceList } from '@sgwm-sutras/shared';
import { PluginOption } from 'vite';
import MarkdownIt from 'markdown-it';

declare function pluginVite(pluginConfig?: UserConfig): PluginOption;

declare const defaultDeviceList: DeviceList;
declare enum defaultDeviceTypes {
    Default = "Default",
    Moto_4G = "Moto 4G",
    Galaxy_S5 = "Galaxy S5",
    Pixel_2 = "Pixel 2",
    Pixel_2_XL = "Pixel 2 XL",
    iPhone_5_SE = "iPhone 5/SE",
    iPhone_6_7_8 = "iPhone 6/7/8",
    iPhone_6_7_8_Plus = "iPhone 6/7/8 Plus",
    iPhone_X = "iPhone X",
    iPad = "iPad",
    iPad_Pro = "iPad Pro",
    Surface_Duo = "Surface Duo",
    Galaxy_Fold = "Galaxy Fold"
}

declare const pluginMkit: (md: MarkdownIt) => void;

export { defaultDeviceList, defaultDeviceTypes, pluginMkit, pluginVite };
