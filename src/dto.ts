export class CreateCatDto{
    name: string;
    breed: string;
}

export class UpdateCatDto{
    name: string;
    breed: string;
}

export class ListAllEntities{
    limit: number;
}