webpackJsonp([0],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__geofence_module_providers_geofence_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__map_map__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, geofenceService) {
        this.navCtrl = navCtrl;
        this.geofenceService = geofenceService;
        console.log('HomePage Hello World');
    }
    HomePage.prototype.ngOnInit = function () {
        console.log('PageHome ngOnInit()');
        this.fences = this.geofenceService.getAll();
    };
    HomePage.prototype.go = function (fenceId) {
        console.log('GOING TO MAP...');
        var ids = [];
        ids.push(fenceId);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__map_map__["a" /* MapPage */], { 'fenceIds': ids });
    };
    HomePage.prototype.showAll = function () {
        var ids = [];
        this.fences.data.forEach(function (fence) {
            ids.push(fence.geofence.id);
        });
        console.log(ids);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__map_map__["a" /* MapPage */], { 'fenceIds': ids });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/justinnash/sites/ionic-geofence-justin-nash/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h2>Geofences</h2>\n\n  <ion-list>\n    <button ion-item *ngFor="let fence of fences.data" (click)="go(this.fence.id)">\n      <h3>{{fence.title}}</h3>\n      <p>{{fence.geofence.latitude}}, {{fence.geofence.longitude}}</p>\n    </button>\n  </ion-list>\n\n  <div>\n    <button ion-button block (click)="showAll()">Show All Points Map</button>\n  </div>\n\n  <!--<geofence-list></geofence-list>-->\n\n</ion-content>'/*ion-inline-end:"/Users/justinnash/sites/ionic-geofence-justin-nash/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__geofence_module_providers_geofence_service__["a" /* GeofenceService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 112:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 153:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 153;

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__geofence_module_providers_geofence_service__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MapPage = /** @class */ (function () {
    function MapPage(navCtrl, navParams, geofenceService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.geofenceService = geofenceService;
        this.mapPoints = [];
        this.apiKey = "AIzaSyAr8gPCs8QZg0n5eFnVL4Gp8yKTjOWeoUA";
        console.log(navParams.get('fenceId'));
        var ids = this.navParams.get('fenceIds');
        ids.forEach(function (id) {
            _this.mapPoints.push(_this.geofenceService.get(id));
        });
    }
    MapPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MapPage');
    };
    MapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-map',template:/*ion-inline-start:"/Users/justinnash/sites/ionic-geofence-justin-nash/src/pages/map/map.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Map</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content no-padding>\n  <geofence-map [mapPoints]="mapPoints" [apiKey]="apiKey"></geofence-map>\n</ion-content>'/*ion-inline-end:"/Users/justinnash/sites/ionic-geofence-justin-nash/src/pages/map/map.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__geofence_module_providers_geofence_service__["a" /* GeofenceService */]])
    ], MapPage);
    return MapPage;
}());

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/Users/justinnash/sites/ionic-geofence-justin-nash/src/pages/about/about.html"*/'<ion-content no-padding>\n </ion-content>\n'/*ion-inline-end:"/Users/justinnash/sites/ionic-geofence-justin-nash/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/Users/justinnash/sites/ionic-geofence-justin-nash/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/justinnash/sites/ionic-geofence-justin-nash/src/pages/contact/contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeolocationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GeolocationService = /** @class */ (function () {
    function GeolocationService(geolocation) {
        this.geolocation = geolocation;
        //private defaultOptions:<GeolocationOptions> = {maximumAge : 0, }
        this.defaultOptions = {
            maximumAge: 0,
            timeout: 2000,
            enableHighAccuracy: true
        };
        this.watchedPosition = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.setSubscription();
    }
    /**
     *   get the current position
     *   @Returns {Promise<Geoposition>}
     */
    GeolocationService.prototype.getCurrentPosition = function (options) {
        options = options ? options : this.defaultOptions;
        return this.geolocation.getCurrentPosition();
    };
    GeolocationService.prototype.watchPosition = function () {
        console.log('Someone subscribed to position...');
        return this.watchedPosition.asObservable();
    };
    GeolocationService.prototype.setSubscription = function () {
        var _this = this;
        this.geolocation.watchPosition(this.defaultOptions).subscribe(function (position) {
            console.log(position);
            if (position && position.coords) {
                console.log(position.coords.longitude + ' ' + position.coords.latitude);
                _this.watchedPosition.next(position);
            }
            else {
                //response was not a Position Object
                _this.watchedPosition.next(null);
            }
        }, function (err) {
            //Handle the error
            console.log('watchPosition ERROR');
        }, function () {
            //Subscription has completed
        });
    };
    GeolocationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
        /**
         * Service to get the current users geolocation
         */
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */]])
    ], GeolocationService);
    return GeolocationService;
}());

//# sourceMappingURL=geolocation-service.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(223);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_map_map__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__geofence_module_geofence_module__ = __webpack_require__(278);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_map_map__["a" /* MapPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_11__geofence_module_geofence_module__["a" /* GeofenceModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_map_map__["a" /* MapPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_home_home__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__geofence_module_providers_geofence_service__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyApp = /** @class */ (function () {
    function MyApp(toastCtrl, platform, geofenceService) {
        var _this = this;
        this.toastCtrl = toastCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_2__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            console.log('PLATFORM IS READY');
            geofenceService.init().then(function () {
                console.log('GEOFENCE SERVICE INITIALIZED');
                geofenceService.addAll().then(function () { return console.log("added all fences..."); }, function (err) { return "An error was encountered when adding fences..."; });
                geofenceService.getTransitions().subscribe(function (transition) {
                    console.log('TRANSITION DETECTED: ', JSON.stringify(transition));
                    if (transition != null) {
                        // HANDLE THE TRANSITION  -- here we're just going to display a toast... //
                        _this.presentToast(transition[0].transitionType, transition[0]);
                    }
                });
            }, function (err) { return console.log('GEOFENCE SERVICE ERROR: ', err); });
        });
    }
    MyApp.prototype.presentToast = function (transitionType, transition) {
        var strings = [
            null, 'ENTERED', 'EXITED', ''
        ];
        console.log("PRESENTING TOAST...", strings[transitionType]);
        var cssClassStr = transitionType == 1 ? "transition-enter" : "transition-exit";
        var toast = this.toastCtrl.create({
            message: strings[transitionType] + ' - ID: ' + transition.id,
            duration: 5000,
            showCloseButton: true,
            closeButtonText: 'X',
            cssClass: cssClassStr
        });
        toast.present();
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/justinnash/sites/ionic-geofence-justin-nash/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/justinnash/sites/ionic-geofence-justin-nash/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__geofence_module_providers_geofence_service__["a" /* GeofenceService */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/justinnash/sites/ionic-geofence-justin-nash/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="contacts"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/justinnash/sites/ionic-geofence-justin-nash/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeofenceModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geofence__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_geofence_components_module__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_geofence_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_geolocation_service__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var GeofenceModule = /** @class */ (function () {
    function GeofenceModule() {
    }
    GeofenceModule_1 = GeofenceModule;
    GeofenceModule.forRoot = function () {
        return {
            ngModule: GeofenceModule_1,
            providers: [__WEBPACK_IMPORTED_MODULE_5__providers_geofence_service__["a" /* GeofenceService */], __WEBPACK_IMPORTED_MODULE_6__providers_geolocation_service__["a" /* GeolocationService */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geofence__["a" /* Geofence */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */]]
        };
    };
    GeofenceModule = GeofenceModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [],
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_4__components_geofence_components_module__["a" /* GeofenceComponentsModule */]]
        })
    ], GeofenceModule);
    return GeofenceModule;
    var GeofenceModule_1;
}());

//# sourceMappingURL=geofence.module.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeofenceComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__geofence_list_geofence_list__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__geofence_map_geofence_map__ = __webpack_require__(281);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var GeofenceComponentsModule = /** @class */ (function () {
    function GeofenceComponentsModule() {
    }
    GeofenceComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__geofence_list_geofence_list__["a" /* GeofenceListComponent */], __WEBPACK_IMPORTED_MODULE_3__geofence_map_geofence_map__["a" /* GeofenceMapComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__geofence_list_geofence_list__["a" /* GeofenceListComponent */], __WEBPACK_IMPORTED_MODULE_3__geofence_map_geofence_map__["a" /* GeofenceMapComponent */]]
        })
    ], GeofenceComponentsModule);
    return GeofenceComponentsModule;
}());

//# sourceMappingURL=geofence-components.module.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeofenceListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_geofence_service__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the GeofenceComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var GeofenceListComponent = /** @class */ (function () {
    function GeofenceListComponent(geofenceService) {
        this.geofenceService = geofenceService;
        console.log('Hello GeofenceComponent Component');
    }
    GeofenceListComponent.prototype.ngOnInit = function () {
        this.fences = this.geofenceService.getAll();
    };
    GeofenceListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'geofence-list',template:/*ion-inline-start:"/Users/justinnash/sites/ionic-geofence-justin-nash/src/geofence-module/components/geofence-list/geofence-list.html"*/'<!-- Generated template for the GeofenceComponent component -->\n<ion-list>\n  <ion-item *ngFor="let fence of fences.data">\n    <h3>{{fence.title}}</h3>\n    <p>{{fence.lat}}, {{fence.lon}}</p>\n  </ion-item>\n</ion-list>\n\n<!--<ion-list>\n  <button ion-item *ngFor="let fence of fences.data">\n    <h3>{{fence.title}}</h3>\n    <p>{{fence.lat}}, {{fence.lon}}</p>\n  </button>  \n</ion-list>-->\n'/*ion-inline-end:"/Users/justinnash/sites/ionic-geofence-justin-nash/src/geofence-module/components/geofence-list/geofence-list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_geofence_service__["a" /* GeofenceService */]])
    ], GeofenceListComponent);
    return GeofenceListComponent;
}());

//# sourceMappingURL=geofence-list.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeofenceMapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_geolocation_service__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


//import { Plugins } from '@capacitor/core';

var GeofenceMapComponent = /** @class */ (function () {
    //private networkHandler = null;
    function GeofenceMapComponent(geolocationService, renderer, element, _document) {
        this.geolocationService = geolocationService;
        this.renderer = renderer;
        this.element = element;
        this._document = _document;
        this.currentPosition = null;
        this.markers = [];
        this.mapsLoaded = false;
    }
    GeofenceMapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.init().then(function (res) {
            console.log("Google Maps ready.");
            //this.currentPosition = new google.maps.Marker();
            _this.geolocationService.watchPosition().subscribe(function (data) {
                if (data) {
                    //this.currentPostition = data;
                    //console.log(JSON.stringify(data));
                    _this.plotPositionOnMap(data);
                }
            });
        }, function (err) {
            console.log(err);
        });
    };
    GeofenceMapComponent.prototype.init = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.loadSDK().then(function (res) {
                _this.initMap().then(function (res) {
                    resolve(true);
                }, function (err) {
                    reject(err);
                });
            }, function (err) {
                reject(err);
            });
        });
    };
    GeofenceMapComponent.prototype.loadSDK = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (!_this.mapsLoaded) {
                _this.injectSDK().then(function (res) {
                    _this.mapsLoaded = true;
                    resolve(true);
                }, function (err) {
                    reject(err);
                });
            }
            else {
                console.log('Maps already loaded');
            }
        });
    };
    GeofenceMapComponent.prototype.injectSDK = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // if mapInit is definded, then google maps script is loaded //
            if (window['mapInit'] === undefined) {
                window['mapInit'] = function () {
                    //console.log('HEREHERE');
                    _this.mapsLoaded = true;
                    resolve(true);
                };
                var script = _this.renderer.createElement('script');
                script.id = 'googleMaps';
                if (_this.apiKey) {
                    script.src = 'https://maps.googleapis.com/maps/api/js?key=' + _this.apiKey + '&callback=mapInit';
                }
                else {
                    script.src = 'https://maps.googleapis.com/maps/api/js?callback=mapInit';
                }
                _this.renderer.appendChild(_this._document.body, script);
            }
            else {
                resolve(true);
            }
        });
    };
    GeofenceMapComponent.prototype.initMap = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // Geolocation.getCurrentPosition().then((position) => {
            //console.log(position);
            var center = { lat: 37.09024, lon: -95.712891 };
            var latLng = new google.maps.LatLng(center.lat, center.lon);
            var mapOptions = {
                center: latLng,
                zoom: 3
            };
            _this.map = new google.maps.Map(_this.element.nativeElement, mapOptions);
            _this.mapPoints.forEach(function (point) {
                _this.addMarker(point.geofence.latitude, point.geofence.longitude);
            });
            //this.addMarker(this.mapPoints.geofence.latitude, this.mapPoints.geofence.longitude);
            resolve(true);
            // }, (err) => {
            //    reject('Could not initialise map');
            //});
        });
    };
    GeofenceMapComponent.prototype.addMarker = function (lat, lng) {
        var latLng = new google.maps.LatLng(lat, lng);
        var marker = new google.maps.Marker({
            map: this.map,
            //animation: google.maps.Animation.DROP,
            position: latLng
        });
        this.markers.push(marker);
        var circle = new google.maps.Circle({
            map: this.map,
            //radius: this.fence.geofence.radius,
            fillColor: 'red',
            fillOpacity: 0.1,
            strokeColor: 'red',
            strokeOpacity: 0.2,
            strokeWeight: 0.5
        });
        circle.bindTo('center', marker, 'position');
    };
    GeofenceMapComponent.prototype.plotPositionOnMap = function (position) {
        console.log('this.currentPosition: ', this.currentPosition);
        if (this.currentPosition !== null) {
            console.log('Setting current position on map');
            //this.currentPosition.setMap(null);
            this.currentPosition.setPosition({ lat: position.coords.latitude, lng: position.coords.longitude });
        }
        else {
            console.log('initializing current position');
            this.currentPosition = new google.maps.Marker({
                position: { lat: position.coords.latitude, lng: position.coords.longitude },
                map: this.map,
                icon: 'assets/imgs/blue-dot-2.png'
            });
            this.map.setZoom(15);
        }
        //this.map.setCenter({lat: position.coords.latitude, lng: position.coords.longitude });
        //this.map.setZoom(15);
        this.map.panTo({ lat: position.coords.latitude, lng: position.coords.longitude });
        //this.currentPosition = new google.maps.Circle({
        //    strokeColor: '#0000FF',
        //    strokeOpacity: 0,
        //    strokeWeight: 0,
        //    fillColor: '#0000FF',
        //    fillOpacity: .75,
        //    map: this.map,
        //    center: {lat: position.coords.latitude, lng: position.coords.longitude },
        //    radius: 25
        //  });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('apiKey'),
        __metadata("design:type", String)
    ], GeofenceMapComponent.prototype, "apiKey", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('mapPoints'),
        __metadata("design:type", Array)
    ], GeofenceMapComponent.prototype, "mapPoints", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], GeofenceMapComponent.prototype, "mapElement", void 0);
    GeofenceMapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'geofence-map',template:/*ion-inline-start:"/Users/justinnash/sites/ionic-geofence-justin-nash/src/geofence-module/components/geofence-map/geofence-map.html"*/'<div #map id="map"></div>'/*ion-inline-end:"/Users/justinnash/sites/ionic-geofence-justin-nash/src/geofence-module/components/geofence-map/geofence-map.html"*/
        }),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DOCUMENT */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_geolocation_service__["a" /* GeolocationService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], Object])
    ], GeofenceMapComponent);
    return GeofenceMapComponent;
}());

//# sourceMappingURL=geofence-map.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeofenceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geofence__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GeofenceService = /** @class */ (function () {
    function GeofenceService(geofencePlugin) {
        this.geofencePlugin = geofencePlugin;
        this.geofences = {
            data: [
                {
                    id: 1,
                    title: "Stonebriar Centre Mall",
                    geofence: {
                        id: 1,
                        latitude: 33.099081,
                        longitude: -96.811477,
                        radius: 400,
                        transitionType: 3,
                        notification: {
                            id: 1,
                            title: "You Crossed a Fence",
                            text: "Stonebriar Center Mall",
                            openAppOnClick: true
                        }
                    }
                },
                {
                    id: 2,
                    title: "Garden Park Ward",
                    geofence: {
                        id: 2,
                        latitude: 40.745289,
                        longitude: -111.857776,
                        radius: 50,
                        transitionType: 3,
                        notification: {
                            id: 1,
                            title: "You Crossed a Fence",
                            text: "Garden Park Ward",
                            openAppOnClick: true
                        }
                    }
                },
                {
                    id: 3,
                    title: "Inglewood Park",
                    geofence: {
                        id: 3,
                        latitude: 40.743739,
                        longitude: -111.861024,
                        radius: 50,
                        transitionType: 3,
                        notification: {
                            id: 1,
                            title: "You Crossed a Fence",
                            text: "Inglewood Park",
                            openAppOnClick: true
                        }
                    }
                },
                // 40.750811, -111.855253
                {
                    id: 4,
                    title: "East High School",
                    geofence: {
                        id: 4,
                        latitude: 40.750811,
                        longitude: -111.855253,
                        radius: 50,
                        transitionType: 3,
                        notification: {
                            id: 1,
                            title: "You Crossed a Fence",
                            text: "East High School",
                            openAppOnClick: true
                        }
                    }
                }
            ]
        };
        this.isInitialized = false;
        this.transitionData = null;
        this.transitionDataSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](this.transitionData);
        console.log('Hello GeofenceServiceProvider Provider');
    }
    /**
     * Initializes this Service including the Geofence Native Plugin
     *
     * @returns {Promise<void>}
     */
    GeofenceService.prototype.init = function () {
        var _this = this;
        console.log('GeofenceService.init() called...');
        return new Promise(function (resolve, reject) {
            if (_this.isInitialized) {
                console.log('Geofence Plugin already initialized...');
                resolve();
            }
            else {
                _this.geofencePlugin.initialize().then(function () {
                    console.log('Geofence Plugin Ready');
                    _this.isInitialized = true;
                    // now subscribe to the native plugin transitions //
                    _this.subscribeToPluginTransitions();
                    resolve(true);
                    //this.addGeofence();
                }, function (err) {
                    console.log('GEOFENCE-ERROR ' + err);
                    reject(false);
                });
            }
        });
    };
    /**
     * Get an item from the hard coded object this.geofences
     *
     * @returns {Object<any>}
     */
    GeofenceService.prototype.get = function (fenceId) {
        console.log(fenceId);
        //let fence: any;
        var fence = this.geofences.data.filter(function (fence) { return fence.id == fenceId; });
        //console.log(fence);
        return fence[0];
    };
    /**
     * Return all items from the hard coded object this.geofences
     *
     * @returns {Object<Array<any>>}
     */
    GeofenceService.prototype.getAll = function () {
        return this.geofences;
    };
    /** DEPRECATED, replaced by this.addOrUpdate(geofences) */
    GeofenceService.prototype.add = function (fence) {
        var _this = this;
        console.log('ADDING GEOFENCE...');
        return new Promise(function (resolve, reject) {
            _this.geofencePlugin.addOrUpdate(fence).then(function () {
                console.log('Geofence added');
                resolve(true);
            }, function (err) {
                console.log('Geofence failed to add');
                reject(err);
            });
        });
    };
    /**
     * Adds a new geofence or array of geofences.
     *
     * @returns {Promise<void>}
     */
    GeofenceService.prototype.addOrUpdate = function (geofences) {
        console.log('Adding geofences...');
        return this.geofencePlugin.addOrUpdate(geofences);
    };
    /**
     * Subscribe to the native plugin transitions
     *
     * @returns {Promise<void>}
     */
    GeofenceService.prototype.subscribeToPluginTransitions = function () {
        var _this = this;
        this.geofencePlugin.onTransitionReceived().subscribe(function (next) {
            console.log('onNext: %s', JSON.stringify(next));
            _this.notifyTransitionSubscribers(next);
        }, function (err) { return console.log('onError: %s', err); }, function () { return console.log('onCompleted'); });
    };
    /** utilitly method for quickly adding all geofences from this.geofences */
    GeofenceService.prototype.addAll = function () {
        console.log("adding all geofences...", JSON.stringify(this.geofences));
        var gf = [];
        this.geofences.data.forEach(function (fence) {
            console.log("adding ", fence.title);
            gf.push(fence.geofence);
        });
        console.log(JSON.stringify(gf));
        return this.addOrUpdate(gf);
    };
    /**
     * remove a single geofence or an array of geofences by id
     *
     * @returns {Promise<void>}
     */
    GeofenceService.prototype.remove = function (geofenceId) {
        return this.geofencePlugin.remove(geofenceId);
    };
    /**
     * Remove all geofences from native plugin
     *
     * @returns {Promise<void>}
     */
    GeofenceService.prototype.removeAll = function () {
        return this.geofencePlugin.removeAll();
    };
    /**
     * Subscribe to transition events
     *
     * @returns {Observable<any>}
     */
    GeofenceService.prototype.getTransitions = function () {
        console.log('Someone subscribed to transitions...');
        return this.transitionDataSubject.asObservable();
    };
    /**
     * Notify subscribers with changed data
     *
     * @returns {Object<any>}
     */
    GeofenceService.prototype.notifyTransitionSubscribers = function (data) {
        console.log('Notifying transition subscribers...');
        return this.transitionDataSubject.next(data);
    };
    /**
     * Returns an array of geofences currently being monitored.
     *
     * @returns {Promise<Array<string>>}
     */
    GeofenceService.prototype.getWatched = function () {
        return this.geofencePlugin.getWatched();
    };
    GeofenceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_geofence__["a" /* Geofence */]])
    ], GeofenceService);
    return GeofenceService;
}());

//# sourceMappingURL=geofence-service.js.map

/***/ })

},[201]);
//# sourceMappingURL=main.js.map