import { Component, OnInit } from '@angular/core';
import { ROUTES } from './sidebar-routes.config';
import { TranslateService } from '@ngx-translate/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RouteInfo } from './sidebar.metadata';
import { UsuarioService } from 'app/servicios/servicios.index';

declare var $: any;

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
})

export class SidebarComponent implements OnInit {

    cambioIcono = false;

    public menuItems: any[];

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private _usuarioService: UsuarioService,
        public translate: TranslateService,

    ) {

    }

    ngOnInit() {
        this.getMenu();
    }

    getMenu() {
        const menu = this._usuarioService.getMenu();

        $.getScript('./assets/js/app-sidebar.js');
        this.menuItems = menu.filter(menuItem => menuItem);
    }

    // NGX Wizard - skip url change
    ngxWizardFunction(path: string) {
        if (path.indexOf('forms/ngx') !== -1) {
            this.router.navigate(['forms/ngx/wizard'], { skipLocationChange: false });
        }
    }

    cambiar() {
        this.cambioIcono = !this.cambioIcono;
        console.log(this.cambioIcono);
    }
}
