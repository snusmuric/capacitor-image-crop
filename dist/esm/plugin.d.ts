import { IImageCrop } from './index';
export declare class ImageCrop implements IImageCrop {
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
