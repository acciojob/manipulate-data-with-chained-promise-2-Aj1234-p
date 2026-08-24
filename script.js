//your JS code here. If required.
const output = document.querySelector('#output');
let arr = [1,2,3,4];

function foundArray(){
  let arr = [1,2,3,4];
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve(arr);
    },3000);
  })
}

function filterEvenNumber(arr){
  const evenArray =[];
  for(let i=0;i<arr.length;i++){
    if(arr[i]%2==0) evenArray.push(arr[i]);
  }
  return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve(evenArray);
      },4200)
  })
}


function multiplyEvenNumbers(arr){
  const multiplyArray = [];
  for(let i=0;i<arr.length;i++){
    let num = arr[i]*2;
    multiplyArray.push(num);
  }
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{      
       resolve(multiplyArray);
    },2000);
  })
}
let evenData;

foundArray()
.then((data)=>{return filterEvenNumber(data)})
.then((data)=>{
  let data1 = data;
  let span = document.createElement('span');
  span.textContent = data1.join(',');
  output.appendChild(span);
  return multiplyEvenNumbers(data);
}).then((data)=>{
  output.innerHTML = "";
  let data1 = data;
  let span = document.createElement('span');
  span.textContent = data1.join(',');
  output.appendChild(span);
})