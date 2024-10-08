import { AppModule } from './app.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

const APP_ROUTES: Routes = [
  {
    path: 'store',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        exposedModule: './Module',
      }).then((m) => m.AppModule),
  },
  {
    path: 'admin',
    loadChildren: () => {
      const baseUrl = 'http://localhost:4201';
      return loadAdminStyles().then(() =>
        loadRemoteModule({
          type: 'module',
          remoteEntry: 'http://localhost:4201/remoteEntry.js',
          exposedModule: './Module',
        }).then((m) => m.AppModule)
      );
    },
  },
];

async function loadAdminStyles(): Promise<void> {
  return await new Promise((resolve) => {
    const baseUrl = 'http://localhost:4201';
    const el = document.getElementById('store_styles');

    // Load one instance, do it like this to handle errors and retrying
    if (el) {
      el.remove();
    }
    const headEl = document.getElementsByTagName('head')[0];
    const styleLinkEl = document.createElement('link');
    styleLinkEl.rel = 'stylesheet';
    styleLinkEl.id = 'store_styles';
    styleLinkEl.href = `${baseUrl}/store_styles.css`;
    headEl.appendChild(styleLinkEl);
    resolve();
  });
}

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
