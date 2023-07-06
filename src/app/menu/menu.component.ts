import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  constructor(private dialog: MatDialog,private router: Router) { }

  image =sessionStorage.getItem("image") ?? "assets/login.jpeg";;
  lbl = sessionStorage.getItem("mode") ?? "Sign in";
 
  openDialog(): void {
  
   const dialogRef = this.dialog.open(LoginDialogComponent, {
    width: '400px',
    height:"250px",
    disableClose: true,
  });
  dialogRef.afterClosed().subscribe(() => {
    alert("reload");
    this.router.navigate(['/home'], { replaceUrl: true });
    this.refreshComponent();
  });
  }
  refreshComponent() {
    window.location.reload();
  }
}
