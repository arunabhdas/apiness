import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ApinessSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [ApinessSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [ApinessSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ApinessSharedModule {
  static forRoot() {
    return {
      ngModule: ApinessSharedModule
    };
  }
}
