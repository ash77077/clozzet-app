import {HttpHandlerFn, HttpRequest} from '@angular/common/http';
import {inject} from '@angular/core';
import {finalize} from 'rxjs';
import {LoadingService} from "@core/services/loading.service";

export function loadingInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn) {
  if (req.headers.has('X-Loading-Skip')) {
    return next(req);
  }
  const loadingService = inject(LoadingService);

  loadingService.increment();

  return next(req).pipe(
    finalize(() => {
      loadingService.decrement();
    })
  );
}
