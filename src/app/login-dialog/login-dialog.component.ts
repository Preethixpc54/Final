import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { NgModel } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { LogonserviceTsService } from '../service/logonservice.ts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent {
 username:string="";
 password:string="";
 email:string="";
 image:string ="assets/login.jpeg";
 lbl:string="Sign in";
 error?:string;
 status:boolean=false;

 // Register Variables

 rusername:string="";
 rpassword:string="";
 vpassword:string="";
 remail:string="";
 rerror?:string;
 rstatus:boolean=false;

  constructor(private log:LogonserviceTsService,private dialogRef: MatDialogRef<LoginDialogComponent>) {
    sessionStorage.setItem("image","assets/login.jpeg");
    sessionStorage.setItem("mode","Sign in");
   }

  Login():void{
    
    if(this.username=="" || this.password=="")
    {
      alert("Please fill all fields");
    }
     else{
      this.log.check(this.username).subscribe(
        { 
         next:(response:any)=>{
         
           sessionStorage.setItem("username",response[0].UserName);
           sessionStorage.setItem("role",response[0].Role);
           sessionStorage.setItem("password",response[0].password);
           sessionStorage.setItem("name",response[0].name);
           sessionStorage.setItem("image",response[0].image);
           if(this.username!=response[0].UserName || this.password!=response[0].password)
           {
             alert("Invalid credentials")
           }
           else{
            this.dialogRef.close();
            sessionStorage.setItem("mode","Sign out");
            
           }
          },

          error:()=>{
            this.error="Invalid Credentials";
            this.status=false;
          }}
     )
     }
    
          
  }
}



