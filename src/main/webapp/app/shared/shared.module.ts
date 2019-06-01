import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  MittalRamsharanInterstellarSharedLibsModule,
  MittalRamsharanInterstellarSharedCommonModule,
  JhiLoginModalComponent,
  HasAnyAuthorityDirective
} from './';

@NgModule({
  imports: [MittalRamsharanInterstellarSharedLibsModule, MittalRamsharanInterstellarSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [MittalRamsharanInterstellarSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MittalRamsharanInterstellarSharedModule {
  static forRoot() {
    return {
      ngModule: MittalRamsharanInterstellarSharedModule
    };
  }
}
