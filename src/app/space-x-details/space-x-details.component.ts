import { Component, OnInit } from '@angular/core';
import { EndpointsService } from '../services/endpoints.service';

@Component({
  selector: 'app-space-x-details',
  templateUrl: './space-x-details.component.html',
  styleUrls: ['./space-x-details.component.scss']
})
export class SpaceXDetailsComponent implements OnInit {
  spacexYears = [];
  launchSuccess = [{ display: "True", val: true, checked: false }, { display: "False", val: false, checked: false }];
  landSuccess = [{ display: "True", val: true, checked: false }, { display: "False", val: false, checked: false }];
  missionLst: any;
  data: any;
  constructor(private endpoints: EndpointsService) { }

  ngOnInit() {
    this.spacexYears = this.launchYears();
    this.endpoints.getData().subscribe(data => {
      this.missionLst = data;
    })
  }
  changeFun(){
    alert('ok')
  }
  launchYears() {
    let launchYearsArr = [];
    for (var i = 2006; i <= 2020; i++) {
      launchYearsArr.push({ display: i, val: i, checked: false });
    }
    return launchYearsArr;
  }

  addFilter(value){
    let allFilters="";
    value.checked = !value.checked;
    for(let i=0;i<this.spacexYears.length;i++){
      if(this.spacexYears[i].checked){
        allFilters = allFilters+`&amp;launch_year=${this.spacexYears[i].val}`
        break;
      }
    }

    for(let i=0;i<this.launchSuccess.length;i++){
      if(this.launchSuccess[i].checked){
        allFilters = allFilters +`&amp;launch_success=${this.launchSuccess[i].val}`
        break;
      }
    }

    for(let i=0;i<this.landSuccess.length;i++){
      if(this.landSuccess[i].checked){
        allFilters = allFilters +`&amp;land_success=${this.landSuccess[i].val}`
        break;
      }
    }
    console.log(allFilters);
    /* this.endpoints.getData(allFilters).subscribe(data => {
      this.missionLst = data;
    }) */
  }
}
