import { Plugins } from '@capacitor/core';
const { ImageCropPlugin } = Plugins;
export class ImageCrop {
    show(options) {
        return ImageCropPlugin.show(options);
    }
}
//# sourceMappingURL=plugin.js.map