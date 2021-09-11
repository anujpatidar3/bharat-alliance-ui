import { SharedModule } from './../shared/shared.module';
import { PublicRoutingModule } from './public-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { SliderComponent } from './components/slider/slider.component';
import { GetConsultationComponent } from './components/get-consultation/get-consultation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PublicService } from './service/public.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [HomeComponent, AboutComponent, SliderComponent, GetConsultationComponent],
  imports: [
    CommonModule,
    PublicRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    HttpClientModule
  ],
  providers:[PublicService]
})
export class PublicModule { }
