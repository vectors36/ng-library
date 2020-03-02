import { treeNodeModel } from './treeNode.model';


export class treeNodeService {
    private treeNodes: treeNodeModel[] = [
        { id: 1, name: "Book - Engineering" },
        {
            id: 2,
            name: "Book - SP3D",
            children: [
                {
                    id: 1, name: "Chpt. Components",
                    routeLink: "/docs"
                },
                { id: 2, name: "Chpt. Cable Ladder" },
                { id: 3, name: "Chpt. Conduits" }
            ]
        },
        {
            id: 3,
            name: "Book - Microstation",
            children: [
                { id: 1, name: "Chpt. Routed", routeLink: "/docs" },
                { id: 2, name: "Chpt. child 2" },
                { id: 3, name: "Chpt. child 3" }
            ]
        },
        {
            id: 4,
            name: "Book - Microstation",
            children: [
                { id: 1, name: "Chpt. Routed", routeLink: "/docs" },
                { id: 2, name: "Chpt. child 2" },
                { id: 3, name: "Chpt. child 3" }
            ]
        },
        {
            id: 5,
            name: "Book - AutoCAD",
            children: [
                { id: 1, name: "Routed", routeLink: "/docs" },
                { id: 2, name: "child 2" },
                { id: 3, name: "child 3" }
            ]
        },
        {
            id: 6,
            name: "Book - Angular",
            children: [
                {
                    id: 1, name: "Chpt. Components",
                    routeLink: "/docs"
                }
            ]
        }
    ];

    getTrees() {
        return this.treeNodes.slice();
    }
}
