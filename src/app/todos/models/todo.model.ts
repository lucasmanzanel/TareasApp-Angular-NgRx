export class Todo{
    public id:number;
    public text:string;
    public complete:boolean;

    constructor(texto:string){
        this.text = texto;
        this.id = Math.random();
        this.complete = false;
    }
}