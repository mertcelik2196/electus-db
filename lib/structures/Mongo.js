const { Database } = require("quickmongo");

module.exports = class Mongo {

constructor(url) {
    if(!url || typeof url != "string" || !url.startsWith("mongodb")) throw new TypeError("Lütfen Geçerli Bir MongoDB URL Giriniz.");
   this.db = new Database(url);
};

async set(key,value){
 let data = await this.db.set(key,value);
 return data;
};

async push(key,value){
  let data = await this.db.push(key,value);
  return data;
 };

 async add(key,count){
  let data = await this.db.add(key,count);
  return data;
 };

 async  sub(key,count){
  let data = await this.db.subtract(key,count);
  return data;
 };

 async subtract(key,count){
  let data = await this.db.subtract(key,count);
  return data;
 };

 async get(key){
  let data = await this.db.get(key);
  return data;
 };

 async fetch(key){
  let data = await this.db.fetch(key);
  return data;
 };

 async  has(key){
  let data = await this.db.has(key);
  return data;
 };


 async delete(key){
  let data = await this.db.delete(key);
  return data;
 };

 async deleteAll(){
  let data = await this.db.deleteAll();
  return data;
 };

 async clear(){
  let data = await this.db.deleteAll();
  return data;
 };

 async all(){
  let data = await this.db.all();
  return data;
 };

 async fetchAll(){
  let data = await this.db.all();
  return data;
 };

 async getAll(){
  let data = await this.db.all();
  return data;
 };


};