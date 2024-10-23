import { Component, ElementRef, Input } from '@angular/core';
import { AsyncPipe, NgIf } from '@angular/common';
import { HighlightAnimationService } from '../../highlight-animation.service';

@Component({
    selector: 'app-block-default',
    standalone: true,
    imports: [
        NgIf,
        AsyncPipe
    ],
    templateUrl: './block-default.component.html',
})
export class BlockDefaultComponent {
    @Input() depth = 1;
    count: null | number = null;

    constructor(
        private el: ElementRef,
        private highlightService: HighlightAnimationService
    ) {
    }

    highlightBlock() {
        const block = this.el.nativeElement.querySelector('.block');
        this.highlightService.highlightBlock(block);
    }

    triggerInterval() {
        setInterval(() => {
            if (this.count === null) {
                this.count = 0;
                return;
            }

            this.count = this.count + 1;
        }, 1500);
    }
}
