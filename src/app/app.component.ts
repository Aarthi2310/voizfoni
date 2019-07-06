import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'profile-app';
  
  constructor(private router:Router) { 
  
 
  //currenturl=this.router.url;
}


  
fun()
{
 const curl=this.router.url;
  const ul=curl.split('/');
  console.log(ul);
  
  if(ul[1] != ""){
    console.log('1');
    
  return false;
  }else{
    console.log('2');
    return true;
  }
}

}
