import { treeNodeModel } from './treeNode.model';
import { RouterLink } from '@angular/router';


export class treeNodeService {
    private treeNodes: treeNodeModel[] = [
        { 
            id: 1, 
            name: "Admin",
            children: [
                {
                    id: 1,
                    name: "Login",
                    routeLink: "/login"
                },
                {
                    id: 2,
                    name: "New Entry",
                    routeLink: "/admin/new"
                }
            ]
        },
        { 
            id: 2, 
            name: "Tutorials",
            children: [
                {
                    id: 1,
                    name: "Tutorial List",
                    routeLink: "/tutorials"
                },
                {
                    id: 2,
                    name: "Sasha",
                    routeLink: "/tutorials/sasha"
                }
            ]
        }
    ];

    getTrees() {
        return this.treeNodes.slice();
    }
}
