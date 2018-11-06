export class User {
    position: number;
    name: string;
    topScore: string;

    constructor(json: JSON){
        this.position = json["position"];
        this.name = json["name"];
        this.topScore = json["topScore"];
    }
}
