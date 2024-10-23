import { ChangeDetectionStrategy, Component, ElementRef, Input } from '@angular/core';
import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
import { interval, Observable } from 'rxjs';
import { HighlightAnimationService } from '../../highlight-animation.service';

@Component({
    selector: 'app-block-onpush',
    standalone: true,
    imports: [
        NgIf,
        NgForOf,
        AsyncPipe
    ],
    templateUrl: './block-on-push.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlockOnPushComponent {
    @Input() depth = 1;
    count$!: Observable<number>;

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
        this.count$ = interval(1500);
    }
}
