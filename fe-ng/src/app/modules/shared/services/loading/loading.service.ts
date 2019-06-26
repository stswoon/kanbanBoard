import {Injectable} from '@angular/core';

@Injectable()
export class LoadingService {
  private loading: boolean = false;

  constructor() {
  }

  isLoading(): boolean {
    return this.loading;
  }

  setLoading(flag: boolean): void {
    this.loading = flag;
  }
}
