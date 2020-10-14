import { WebPlugin } from '@capacitor/core';
import { IImageCrop } from './definitions';
export declare class ImageCropPluginWeb extends WebPlugin implements IImageCrop {
    constructor();
    show(options: {
        source: string;
        width?: number;
        height?: number;
        ratio?: string;
        lock?: boolean;
    }): Promise<{
        value: string;
    }>;
}
declare const ImageCropPlugin: ImageCropPluginWeb;
export { ImageCropPlugin };
