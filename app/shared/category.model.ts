export interface InterfaceCategory {
  id: number;
  name: string;
}

export class Category implements InterfaceCategory {
  id: number;
  name: string;
  alias: string;

  constructor(name: string) {
    this.name = name;
    this.alias = name;
  }
}
