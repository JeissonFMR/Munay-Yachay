import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { UsuarioService } from 'app/servicios/servicios.index';
import { Router } from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent {
    currentLang = 'en';
    toggleClass = 'ft-maximize';
    placement = 'bottom-right'
    public isCollapsed = true;

    constructor(
        public translate: TranslateService,
        private router: Router,
        private _usuarioService: UsuarioService
    ) {
        const browserLang: string = translate.getBrowserLang();
        translate.use(browserLang.match(/en|es|pt|de/) ? browserLang : 'en');
    }

    ChangeLanguage(language: string) {
        this.translate.use(language);
    }

    ToggleClass() {
        if (this.toggleClass === 'ft-maximize') {
            this.toggleClass = 'ft-minimize';
        } else {
            this.toggleClass = 'ft-maximize';
        }
    }

    logout() {
        this._usuarioService.logout();
        this.router.navigate(['pages', 'login']);
    }
}
