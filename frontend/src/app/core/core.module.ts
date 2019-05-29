import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { ToastrModule } from 'ng6-toastr-notifications';
import { CustomHttpInterceptor } from './http-interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ]
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        {
          // For interceptor to do token manipulation for authentication
          provide: HTTP_INTERCEPTORS,
          useClass: CustomHttpInterceptor,
          multi: true
        },
      ]
    };
  }
}
