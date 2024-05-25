import { Component, OnInit } from '@angular/core';
import { project } from './project';
import { skill } from './skill';
import { animate, style, transition, trigger } from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [
    trigger('slideAnimation', [ // Updated animation trigger name
      transition('* => *', [
        style({ opacity: 0 }),
        animate('0.5s', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class AppComponent   {
 
  title = 'Neven-Ahmed';
  projects:project[]=[
    {
      title:'Recipes Web site',
      description: 'Full stack web site using API .net core ,SQL server, and Anguler user can add edit or delete his own recipes and can view, search others recipes he also can but recipes in his favourite list, rate and comment others recipes',
       githubLink:'https://github.com/Neven1234/Recipes_Api',
       image:'/assets/recipes.PNG'
    },
    {
      title:'Dating App',
      description: 'User can login, register buy google, write his interests, upload his photos, view other users profiles, and connect with other people using rael time chat',
       githubLink:'https://github.com/Neven1234/Dating-App',
       image:'/assets/datingapp.PNG'
    },
    {
      title:'Group Chat',
      description:'A powerful Group chat application using Angular and .Net, with SignalR for seamless real-time communication, user can join multible group chats and chat with the gruop mibmbers in real time chat.',
      githubLink:'https://github.com/Neven1234/Group-Chat-App',
      image:'/assets/groupchat.PNG'
    },
    {
      title:'Zombie Town',
      description: 'An augmented reality (AR) shooting game using Unity , ARCore , C# the game consists of four different and difficult levels ',
       githubLink:'https://github.com/Neven1234/Zombie-Town',
       image:'/assets/zompie.PNG'
    },
    {
      title:'vending-machine',
      description: 'API for a vending machine, allowing users with a “seller” role to add, update or remove products, while users with a “buyer” role can deposit coins into the machine. vending machine only accept 5, 10, 20, 50 and 100 cent coins',
       githubLink:'https://github.com/Neven1234/vending-machine',
       image:'/assets/vanding.jpg'
    },
   
  
  ]
  skills:skill[]=[
   { name:'Object-Oriented Programming (OOP)',
    level:"Advanced",
  },
    { name:'Data Structures',
    level:"Advanced"},
    { name:'Database (SQL Server, Postgresql)',
    level:"Advanced"},
    { name:'Algorithms Analysis And Design',
    level:"Advanced"},
    { name:'Asp.net core web api',
    level:"Intermediate"},
    { name:'Docker',
    level:"Beginner"},
    { name:'SignalR',
    level:"Intermediate"},
    { name:'Angular',
    level:"Intermediate"},
    { name:'HTML, CSS',
    level:"Intermediate"},
    { name:'Bootstra',
    level:"Intermediate"},
    { name:'Git/GitHub',
    level:"Advanced"},
  ]

  currentIndex: number = 0;

  get currentProject(): project {
    return this.projects[this.currentIndex];
  }

  nextProject(): void {
    this.currentIndex = (this.currentIndex + 1) % this.projects.length;
  }

  previousProject(): void {
    this.currentIndex = (this.currentIndex - 1 + this.projects.length) % this.projects.length;
  }

  getAnimationDirection(index: number): string {
    if (index > this.currentIndex) {
      return 'slideAnimation';
    } else {
      return 'slideAnimationLeft';
    }
  }
  
}
