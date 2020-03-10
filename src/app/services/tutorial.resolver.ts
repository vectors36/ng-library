import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable, of, NEVER } from 'rxjs';
import { TutorialModel } from '../model/tutorial.model';
import { TutorialsService } from './tutorials.service';

@Injectable()
export class TutorialResolver implements Resolve<TutorialModel>
 {
    

    constructor(private tutorialsService: TutorialsService) {
    }

    tutorialUrl; 

    resolve(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<TutorialModel> {


        const tutorialUrl = route.paramMap.get('tutorialUrl');

        return this.tutorialsService.findTutorialByUrl(tutorialUrl);
    }

}