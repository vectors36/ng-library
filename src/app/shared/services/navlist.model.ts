export interface navListModel {
    heading: string;
    subheadings?: navLinks[];
}

export interface navLinks {
    title: string;
    url?: string;
}