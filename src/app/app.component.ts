import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'B5Digital-Ui-Task';
  categories:string[] | undefined

  constructor(){
    this.categories = ['Bakery', 'Fruit And Vegetables', 'Meat And Fish', 'Drinks', 'Kitchen', 'Special Nutrition', 'Baby', 'Pharmacy']
  }
  usersSearch(querySearch:any): void {
    if(!querySearch) return

    // const alreadySelected = (user:GetUsersForMessageDto) : boolean => {
    // const index = this.publishItemOptions.itemSharing.findIndex((item)=> String(item.sharedUserId) == user.users.value)
    //     return index > -1
    // }

    // this.messageServiceProxy.getAllUsers(querySearch).subscribe(users => {
    //     this.filteredUsers = users.filter((user)=>{
    //         return !alreadySelected(user)
    //     })
    // });
  }
  addEmail(querySearchElem:{value:string}){
    // const email = querySearchElem?.value?.trim()
    // if(!email ) return
    // if( !this.validateEmail(email) ) return this.notify.error(this.l("PleaseEnterAValidEmail"))
    // const itemSharingDto : ItemSharingDto = new ItemSharingDto()
    // itemSharingDto.sharedUserEMail = email
    // querySearchElem.value = ""
    // this.publishItemOptions.itemSharing.push(itemSharingDto)
    // this.showCloseText = false
  }
  addSharingItem(user:any,i:number){

    // const itemSharingDto : ItemSharingDto = new ItemSharingDto()
    // itemSharingDto.sharedUserId = Number(user.users.value)
    // itemSharingDto.sharedUserName = user?.users?.name
    // itemSharingDto.sharedUserSureName = user?.surname
    // itemSharingDto.sharedUserTenantName = user?.tenantName

    // this.publishItemOptions.itemSharing.push(itemSharingDto)

    // this.filteredUsers.splice(i,1)
    // this.showCloseText = false

  }
}
