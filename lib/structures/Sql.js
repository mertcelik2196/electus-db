const db = require('quick.db');

module.exports = class Sql {

constructor() {
   this.db = db;
};

set(key,value){
 let data = this.db.set(key,value);
 return data;
};

push(key,value){
  let data = this.db.push(key,value);
  return data;
 };

 add(key,count){
  let data = this.db.add(key,count);
  return data;
 };

 sub(key,count){
  let data = this.db.subtract(key,count);
  return data;
 };

 subtract(key,count){
  let data = this.db.subtract(key,count);
  return data;
 };

get(key){
  let data = this.db.get(key);
  return data;
 };

 fetch(key){
  let data = this.db.fetch(key);
  return data;
 };

 has(key){
  let data = this.db.has(key);
  return data;
 };


 delete(key){
  let data = this.db.delete(key);
  return data;
 };

 deleteAll(){
  let data = this.db.deleteAll();
  return data;
 };

  clear(){
  let data = this.db.deleteAll();
  return data;
 };

 all(){
  let data = this.db.all();
  return data;
 };

 fetchAll(){
  let data = this.db.all();
  return data;
 };

 getAll(){
  let data = this.db.all();
  return data;
 };


};