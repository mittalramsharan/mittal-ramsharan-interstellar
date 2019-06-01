import { NgModule } from '@angular/core';

import { MittalRamsharanInterstellarSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [MittalRamsharanInterstellarSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [MittalRamsharanInterstellarSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class MittalRamsharanInterstellarSharedCommonModule {}
