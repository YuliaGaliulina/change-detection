import { Component, ElementRef } from '@angular/core';
import { BlockOnPushComponent } from '../../blocks/block-onpush/block-on-push.component';
import { BlockDefaultComponent } from '../../blocks/block-default/block-default.component';
import { NgIf } from '@angular/common';
import { HighlightAnimationService } from '../../highlight-animation.service';

@Component({
    selector: 'app-default-on-push',
    standalone: true,
    imports: [
        BlockOnPushComponent,
        BlockDefaultComponent,
        NgIf
    ],
    templateUrl: './app-default-on-push.component.html',
    styleUrl: './app-default-on-push.component.scss',
})
export class AppDefaultOnPushComponent {
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
