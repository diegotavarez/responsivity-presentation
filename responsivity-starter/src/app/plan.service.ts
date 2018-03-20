import { Injectable } from '@angular/core';

@Injectable()
export class PlanService {

  constructor() { }

  getFreePlan(): any[] {
    return [
      {id: 1, feature: 'Standard Sound Quality', event: 'YES'},
      {id: 6, feature: 'Curated Content', event: 'YES'}
    ];
  }

  getPremiumPlan(): any[] {
    return [
      {id: 1, feature: 'Standard Sound Quality', event: 'YES'},
      {id: 2, feature: 'High Sound Quality', event: 'YES'},
      {id: 3, feature: 'Extreme Sound Quality', event: 'YES'},
      {id: 4, feature: 'High Definition Videos', event: 'YES'},
      {id: 5, feature: '4K Support', event: 'YES'},
      {id: 6, feature: 'Curated Content', event: 'YES'},
      {id: 7, feature: 'Offline Listening', event: 'YES'},
      {id: 7, feature: 'Access Across Devices', event: 'YES'},
    ];
  }

  getStudentPlan(): any[] {
    return [
      {id: 1, feature: 'Standard Sound Quality', event: 'YES'},
      {id: 2, feature: 'High Sound Quality', event: 'NO'},
      {id: 4, feature: 'High Definition Videos', event: 'NO'},
      {id: 6, feature: 'Curated Content', event: 'YES'},
      {id: 7, feature: 'Offline Listening', event: 'NO'},
      {id: 7, feature: 'Access Across Devices', event: 'NO'},
    ];
  }

  getFamilyPlan(): any[] {
    return [
      {id: 1, feature: 'Standard Sound Quality', event: 'YES'},
      {id: 2, feature: 'High Sound Quality', event: 'NO'},
      {id: 4, feature: 'High Definition Videos', event: 'NO'},
      {id: 6, feature: 'Curated Content', event: 'YES'},
      {id: 7, feature: 'Offline Listening', event: 'NO'},
      {id: 7, feature: 'Access Across Devices', event: 'NO'},
      {id: 7, feature: 'Multiple Accounts', event: 'NO'},
      {id: 7, feature: 'Parental Control', event: 'NO'}
    ];
  }
}
