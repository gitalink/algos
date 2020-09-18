/*
https://leetcode.com/problems/design-underground-system/solution/

Implement the class UndergroundSystem that supports three methods:

1. checkIn(int id, string stationName, int t)

A customer with id card equal to id, gets in the station stationName at time t.
A customer can only be checked into one place at a time.
2. checkOut(int id, string stationName, int t)

A customer with id card equal to id, gets out from the station stationName at time t.
3. getAverageTime(string startStation, string endStation)

Returns the average time to travel between the startStation and the endStation.
The average time is computed from all the previous traveling from startStation to endStation that happened directly.
Call to getAverageTime is always valid.
You can assume all calls to checkIn and checkOut methods are consistent. That is, if a customer gets in at time t1 at some station, then it gets out at time t2 with t2 > t1. All events happen in chronological order.

Example:
Input
["UndergroundSystem","checkIn","checkIn","checkIn","checkOut","checkOut","checkOut","getAverageTime","getAverageTime","checkIn","getAverageTime","checkOut","getAverageTime"]
[[],[45,"Leyton",3],[32,"Paradise",8],[27,"Leyton",10],[45,"Waterloo",15],[27,"Waterloo",20],[32,"Cambridge",22],["Paradise","Cambridge"],["Leyton","Waterloo"],[10,"Leyton",24],["Leyton","Waterloo"],[10,"Waterloo",38],["Leyton","Waterloo"]]

Output
[null,null,null,null,null,null,null,14.00000,11.00000,null,11.00000,null,12.00000]

Explanation
UndergroundSystem undergroundSystem = new UndergroundSystem();
undergroundSystem.checkIn(45, "Leyton", 3);



Customer {id, startStation, time}
id -> Customer;
'StartStation->EndStation'->[]

*/

class Customer {
  constructor(startStation, startTime) {
    this.startStation = startStation;
    this.startTime = startTime;
  }

  getTravelTime(endStation, endTime) {
    return {route: `${startStation}->${this.endStation}`, time:endTime - this.startTime};
  }
}

class UndergroundSystem {
  constructor() {
    this.customers = new Map();
    this.routes = new Map();
  }

  checkIn(id, stationName, t) {
    this.customers.set(id, new Customer(stationName, t));
  }

  checkOut(id, stationName, t) {
    const customer = this.customers.get(id);
    if (customer != null) {
      const route = customer.getTravelTime(stationName, t);
      let times = this.routes.get(route.route);
      if (times === null) {
        times = [];
        this.routes.set(route.route, times);
      }
      times.push(route.time);
    }
    this.customers.delete(id);
  }

  getAverageTime(startStation, endStation) {
    const route = `${startStation}->${endStation}`;
    let times = this.routes.get(route);
    if (times != null) {
      const sum = times.reduce((a,b) => a + b, 0);
      return sum / times.length;
    }
    return -1;
  }

}


