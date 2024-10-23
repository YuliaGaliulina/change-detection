import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './roots/app.config';
import { AppComponent } from './roots/app/app.component';
import { AppOnPushSignalComponent } from './roots/app-on-push-signal/app-on-push-signal.component';
import { AppDefaultOnPushComponent } from './roots/app-default-on-push/app-default-on-push.component';

// bootstrap multiple root components for demo purposes

bootstrapApplication(AppComponent, appConfig)
    .catch((err) => console.error(err));

bootstrapApplication(AppOnPushSignalComponent, appConfig)
    .catch((err) => console.error(err));

bootstrapApplication(AppDefaultOnPushComponent, appConfig)
    .catch((err) => console.error(err));

