import { Controller, Get, Query, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { CatsService } from './cat.service';
import { CreateCatDto, UpdateCatDto, ListAllEntities } from './dto';

@Controller('cats')
export class CatsController {
    constructor(private catservice: CatsService){}
  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    return 'This action adds a new cat';
  }

  @Get()
  findAll(@Query() query: ListAllEntities) {
    return `This action returns all cats (limit: ${query.limit} items)`;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} cat`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }
}



// import { Controller, Get, Post, Res, HttpStatus } from '@nestjs/common';
// import { Response } from 'express';

// @Controller('cats')
// export class CatsController {
//   @Post()
//   create(@Res() res: Response) {
//     res.status(HttpStatus.CREATED).send();
//   }

//   @Get()
//   findAll(@Res() res: Response) {
//      res.status(HttpStatus.OK).json([]);
//   }
// }