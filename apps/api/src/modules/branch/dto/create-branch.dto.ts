import {
    IsOptional,
    IsString,
    Length,
  } from 'class-validator';
  
  export class CreateBranchDto {
    @IsString()
    companyId: string;
  
    @IsString()
    @Length(2, 100)
    name: string;
  
    @IsString()
    @Length(2, 20)
    code: string;
  
    @IsOptional()
    @IsString()
    address?: string;
  
    @IsOptional()
    @IsString()
    phone?: string;
  }