export class Servers {
  public name: string;
  public id: number;
  public description: string;
  public imagePath: string;

  constructor(
    name: string,
    id: number,
    description: string,
    imagePath: string
  ) {
    this.name = name;
    this.id = id;
    this.description = description;
    this.imagePath = imagePath;
  }
}
