const email = document.querySelector('#mail');
const amount = document.querySelector('#amount')
const payNow = document.querySelector('.pay')

const toggle = document.querySelector('#mycheck');
const paySection = document.querySelector('.one');
const customerSection = document.querySelector('.two');

const body = document.querySelector('body');
// body.addEventListener('load',(e)=>{
//     alert("Thank you for the oppourtunity please fill all the fields and use a real email if you want to see a receipt for the payment. also please use the toggle button to test the recepiant endpoint. Thanks again")
// })

window.addEventListener("load", (event) => {
    alert("Thank you for the oppourtunity please fill all the fields and use a real email if you want to see a receipt for the payment. also please use the toggle button to test the recepiant endpoint.Please for the receipiants you have to use real life bank details. Thanks again")
  });

toggle.addEventListener('click',(e)=>{
    if (toggle.checked){
        paySection.style.display = 'none';
        customerSection.style.display = 'block'
    }else{
        paySection.style.display = 'block';
        customerSection.style.display = 'none'
    }
})
console.log(payNow)

payNow.addEventListener('click',(e)=>{
    console.log(email.value)
    console.log(amount.value)

    axios.post('https://alvativetest-production.up.railway.app/v1/donations', {
        email: `${email.value}`,
        amount: `${amount.value}`
      })
      .then((response) => {
        console.log(response.data.data.authorization_url );
        window.location.href = response.data.data.authorization_url
      }, (error) => {
        console.log(error);
      });

    
})

