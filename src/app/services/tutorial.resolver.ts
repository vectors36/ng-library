import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable, of} from 'rxjs';
import { TutorialModel } from '../model/tutorial.model';
import { TutorialsService } from './tutorials.service';

@Injectable()
export class TutorialResolver implements Resolve<TutorialModel> {
    constructor(private tutorialsService:TutorialsService) {

    }   
    
    resolve(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<TutorialModel> {
            const courseUrl = route.paramMap.get('');

            return this.tutorialsService.findTutorialByUrl(courseUrl);
        }
}