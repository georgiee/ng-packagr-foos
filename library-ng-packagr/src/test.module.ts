import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
})
export class TestModule {

  public static forRoot(): ModuleWithProviders {

    return {
      ngModule: TestModule
    };
  }
}
