import { Component, ElementRef } from '@angular/core';
import { BlockDefaultComponent } from '../../blocks/block-default/block-default.component';
import { HighlightAnimationService } from '../../highlight-animation.service';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    imports: [
        BlockDefaultComponent,
    ],
    styleUrl: './app.component.scss'
})
export class AppComponent {
    constructor(
        private el: ElementRef,
        private highlightService: HighlightAnimationService
    ) {
    }

    highlightBlock() {
        const block = this.el.nativeElement.querySelector('.block');
        this.highlightService.highlightBlock(block);
    }
}
