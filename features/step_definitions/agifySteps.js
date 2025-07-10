import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "chai";
import axios from "axios";

let name;
let response;
let country = null;
let batchnames = [];
let batchresponse = [];


//fetching and saving name
Given("I input name as {string}",input => {name = input;
  country = null;}
);

//fetching and saving name,country
Given("I input name as {string} and country as {string}",function(inputname,inputcountry){
name = inputname;
country = inputcountry;
});

//call api
When("I initialize AgifyAPI", async () => {let url;
  if(country==null)
  {
   url= `https://api.agify.io?name=${encodeURIComponent(String(name))}`;
  }
  else{
    url= `https://api.agify.io?name=${encodeURIComponent(String(name))}&country_id=${encodeURIComponent(String(country))}`;
  }
  response = await axios.get(url);
  console.log("Data:", response.data);
});

//check response status code
Then("The response status code should be {int}", code =>{expect(response.status).to.equal(code);
});

//check response count
Then("The response should show count", ()=>{
    expect(response.data).to.have.property("count");
    expect(response.data.count).to.be.a("number");
});

//check response age
Then("The response should show age", ()=>{
    expect(response.data).to.have.property("age");
});

//check response name
Then("The response name should be {string}",name =>{
  expect(response.data).to.have.property("name");
    expect(response.data.name).to.equal(name);
});

//check response country
Then("The response country should be {string}",country =>{
   expect(response.data).to.have.property("country_id");
    expect(response.data.country_id).to.equal(country);
});

//fetch batch names
Given("I input multiple names", function(datatable) {
batchnames = datatable.raw().flat();
});

//call api with batch
When("I initialize AgifyAPI with batch", async() =>{
  const namelist = batchnames.map(n => `name[]=${encodeURIComponent(n)}`).join("&");
  const api = `https://api.agify.io?${namelist}`;
  const response = await axios.get(api);
  console.log("Data:", response.data);
  batchresponse = response.data;
});

//check response has same count of records
Then("I should get same count of records", () => {
  expect(batchresponse.length).to.equal(batchnames.length);
});

//check count name and age of each record
Then("I should get count,name and age for batch", function () {
  batchresponse.forEach(item => {
    expect(item).to.have.property("count");
    expect(item).to.have.property("name");
    expect(item).to.have.property("age");
  });
});

//call api with more than 10 records and validate status code
When("I initialize AgifyAPI with batch more than 10 and validate status code 422", async() =>{
  const namelist = batchnames.map(n => `name[]=${encodeURIComponent(n)}`).join("&");
  const api = `https://api.agify.io?${namelist}`;
  const res = await axios.get(api,
    {
      validateStatus: () => true
    });
    console.log("status code",res.status);
    expect(res.status).to.be.equal(422);
});