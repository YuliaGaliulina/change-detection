import { ElementRef, inject, Injectable, NgZone, RendererFactory2 } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class HighlightAnimationService {
    zone = inject(NgZone);
    rendererFactory = inject(RendererFactory2);
    renderer = this.rendererFactory.createRenderer(null, null);

    highlightBlock(block: ElementRef) {
        this.zone.runOutsideAngular(() => {
            this.renderer.addClass(block, 'highlight');

            setTimeout(() => {
                this.renderer.removeClass(block, 'highlight');
            }, 400);
        });
    }
}
