import {
    IsEmail,
    IsOptional,
    IsString,
    Length,
  } from 'class-validator';
  
  export class CreateUserDto {
    @IsString()
    companyId: string;
  
    @IsString()
    branchId: string;
  
    @IsString()
    @Length(2, 100)
    firstName: string;
  
    @IsString()
    @Length(2, 100)
    lastName: string;
  
    @IsEmail()
    email: string;
  
    @Length(6, 100)
    password: string;
  
    @IsOptional()
    @IsString()
    phone?: string;
  }