import { WebPlugin } from '@capacitor/core';
export class ImageCropPluginWeb extends WebPlugin {
    constructor() {
        super({
            name: 'ImageCropPlugin',
            platforms: ['web']
        });
    }
    show(options) {
        return new Promise(() => {
            console.log(options);
        });
    }
}
const ImageCropPlugin = new ImageCropPluginWeb();
export { ImageCropPlugin };
//# sourceMappingURL=web.js.map