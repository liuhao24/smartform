import { AppRootResolver } from './app-root-resolver';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';

export const appServices = [
    AppRootResolver,
    AuthService,
    AuthGuard
];
