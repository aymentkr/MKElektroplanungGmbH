import { Component } from '@angular/core';
import { FrCarouselConfig } from 'fr-carousel';

@Component({
  selector: 'app-carousel',
  styleUrls: ['./referenzen.component.css'],
  providers: [FrCarouselConfig],
  templateUrl: './referenzen.component.html',
})
export class ReferenzenComponent {
  images = [1036, 1040, 484, 557, 413].map(
    (n) => `https://picsum.photos/id/${n}/1200/400`
  );

  constructor(config: FrCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 8000;
    config.animationDuration = 2000;
    config.showNavigationArrows = false;
    config.pauseOnHover = false;
  }
}
