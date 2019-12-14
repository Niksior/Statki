export class Ship
{
  private id: number;

  get getid(): number {
    return this.id;
  }
  set setId( id : number) {
    this.id = id;
  }

  type : string;
   get getType() : string
   {
     return this.type;
   }

   set settype( type : string )
   {
     this.type = type;
   }

  lifeNum : number;
  get getLifeNum() : number
  {
    return this.lifeNum;
  }

  set setLifeNum( num : number )
  {
    this.lifeNum = num;
  }

  shoots : number;

  get getShoots() : number
  {
    return this.shoots;
  }

  public shoot()
  {
    this.shoots = this.getShoots + 1;
  }

  constructor(type : string) {
      this.type = type;
      if (type == '4mast')
      {
        this.lifeNum  = 4;
      }
      else if ( type == '3mast')
      {
        this.lifeNum  = 3;
      }
      else if ( type == '2mast')
      {
        this.lifeNum  = 2;

      }
      else {
        this.lifeNum  = 1;
      }
      this.id = Math.random();
      this.shoots = 0;
  }


}
