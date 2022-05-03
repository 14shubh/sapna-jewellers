import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { DeleteComponent } from './UserComponent/delete/delete.component';
import { ProfileComponent } from './UserComponent/profile/profile.component';
import { EditComponent } from './UserComponent/edit/edit.component';
import { NeclacesComponent } from './categoryComponents/neclaces/neclaces.component';
import { EaringComponent } from './categoryComponents/earing/earing.component';
import { RingComponent } from './categoryComponents/ring/ring.component';
import { TikaComponent } from './categoryComponents/tika/tika.component';
import { CoronetComponent } from './categoryComponents/coronet/coronet.component';
import { ChainsComponent } from './categoryComponents/chains/chains.component';
import { BraceletsComponent } from './categoryComponents/bracelets/bracelets.component';
import { BanglesComponent } from './categoryComponents/bangles/bangles.component';
import { AnkletsComponent } from './categoryComponents/anklets/anklets.component';
import { NosePinComponent } from './categoryComponents/nose-pin/nose-pin.component';
import { RajputiBorlaComponent } from './categoryComponents/rajputi-borla/rajputi-borla.component';
import { BajubandComponent } from './categoryComponents/bajuband/bajuband.component';
import { ToeRingsComponent } from './categoryComponents/toe-rings/toe-rings.component';
import { ElegantBroochesComponent } from './categoryComponents/elegant-brooches/elegant-brooches.component';
import { HairsBroochesComponent } from './categoryComponents/hairs-brooches/hairs-brooches.component';
import { PandentsComponent } from './categoryComponents/pandents/pandents.component';
import { FlowerJewelleryComponent } from './categoryComponents/flower-jewellery/flower-jewellery.component';
import { BridalKalireComponent } from './categoryComponents/bridal-kalire/bridal-kalire.component';
import { BridalBanglesComponent } from './categoryComponents/bridal-bangles/bridal-bangles.component';
import { CategoryComponent } from './category/category.component';
import { CustomerComponent } from './customer.component';
import { RouterModule } from '@angular/router';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SingleProductComponent } from './single-product/single-product.component';
import {SocialLoginModule,GoogleLoginProvider} from 'angularx-social-login';
import { PlaceorderComponent } from './placeorder/placeorder.component';
import { UserProfileComponent } from './user-profile/user-profile.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';
 const socialProvider={
   provide:"SocialAuthServiceConfig",
   useValue:{
     providers:[{
       id:GoogleLoginProvider.PROVIDER_ID,
       provider:new GoogleLoginProvider('565614006599-9svodm815pv44rg2tnetm5qhmr4irvju.apps.googleusercontent.com')
     }]
   }
 };



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    SigninComponent,
    SignupComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    ProductsComponent,
    CartComponent,
    FavoriteComponent,
    SearchbarComponent,
    CustomerComponent,
    SingleProductComponent,
    PlaceorderComponent,
    UserProfileComponent,
    DeleteComponent,
    ProfileComponent,
    EditComponent,
    NeclacesComponent,
    EaringComponent,
    RingComponent,
    TikaComponent,
    CoronetComponent,
    ChainsComponent,
    BraceletsComponent,
    BanglesComponent,
    AnkletsComponent,
    NosePinComponent,
    RajputiBorlaComponent,
    BajubandComponent,
    ToeRingsComponent,
    ElegantBroochesComponent,
    HairsBroochesComponent,
    PandentsComponent,
    FlowerJewelleryComponent,
    BridalKalireComponent,
    BridalBanglesComponent,
    CategoryComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    SocialLoginModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    ToastrModule.forRoot(  { timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true}),
  ],
  providers: [socialProvider],
})
export class CustomerModule { }
