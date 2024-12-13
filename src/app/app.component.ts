import {Component} from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [MatSidenavModule, MatFormFieldModule, MatSelectModule, MatButtonModule, NgOptimizedImage],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
