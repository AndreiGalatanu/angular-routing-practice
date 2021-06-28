import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { ServersService } from '../servers.service';
import { Injectable } from '@angular/core';

interface Server {
  id: number;
  name: string;
  status: string;
}
@Injectable()
export class ServerResolver implements Resolve<{ id: number, name: string, status: string }>{

  constructor(private serverService: ServersService) {

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : Observable<Server> | Promise<Server> | Server {
    return this.serverService.getServer(+route.params['id'])

  }
}
