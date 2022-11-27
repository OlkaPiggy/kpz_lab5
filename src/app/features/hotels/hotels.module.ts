import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TestInterceptorInterceptor } from 'src/app/core/interceptors/test-interceptor.interceptor';
import {HotelsComponent} from "./hotels.component";
import {HotelsService} from "./hotels.service";

const routes: Routes = [
  {
    path: '',
    component: HotelsComponent
  }
]

@NgModule({
  declarations: [
    HotelsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TestInterceptorInterceptor,
      multi: true,
    },
    HotelsService
  ],
})
export class HotelsModule { }
