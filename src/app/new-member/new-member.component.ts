import { Component, ViewEncapsulation, Inject } from "@angular/core";
import { NgForm } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: "app-new-member",
  templateUrl: "./new-member.component.html",
  styleUrls: ["./new-member.component.sass"],
  encapsulation: ViewEncapsulation.None
})
export class NewMemberComponent {
  States = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming"
  ];

  first_name = "";
  last_name = "";
  address_line_1 = "";
  address_list_2 = "";
  city = "";
  phone = "";
  state = this.States[0];
  zipcode = "";
  constructor(public dialogRef: MatDialogRef<NewMemberComponent>) {}

  onSubmit() {

  }

  onClose() {
    this.dialogRef.close();
  }
}
