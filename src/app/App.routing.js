"use strict";
var router_1 = require("@angular/router");
var home_component_1 = require("./home_component/home.component");
var app_routes = [
    {
        path: '',
        component: home_component_1.HomeComponent,
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: home_component_1.HomeComponent
    }
];
exports.routers = router_1.RouterModule.forRoot(app_routes);
//# sourceMappingURL=App.routing.js.map