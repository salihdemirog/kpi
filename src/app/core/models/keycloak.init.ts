import { KeycloakService } from 'keycloak-angular';
import { environment } from '../../../environments/environment';

export function keyloackInitializer(keycloak: KeycloakService) {
    const { keycloakConfig } = environment;

    return () => keycloak.init({
        config: keycloakConfig,
        initOptions: {
            onLoad: 'login-required',
            checkLoginIframe: false
        },
        //       initOptions: {
        //         onLoad: 'check-sso',
        //         silentCheckSsoRedirectUri:
        //           window.location.origin + '/assets/silent-check-sso.html',
        //       },
        enableBearerInterceptor: true,
        loadUserProfileAtStartUp: true,
        bearerExcludedUrls: ['/assets']
    });
}