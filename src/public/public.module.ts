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
import { WhyAurraComponent } from './components/why-aurra/why-aurra.component';
import { HowitworksComponent } from './components/howitworks/howitworks.component';
import { AboutUsComponent } from './components/about-us/about-us.component';



@NgModule({
  declarations: [HomeComponent, AboutComponent, SliderComponent, GetConsultationComponent, WhyAurraComponent, HowitworksComponent, AboutUsComponent],
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
