const fname = document.querySelector('#fname');
const lname = document.querySelector('#lname');
const bankname = document.querySelector('#bankname');
const accountname = document.querySelector('#account');

const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');
const red = document.querySelector('.red');



green.addEventListener('click',(e)=>{
    const rname = `${fname.value} ${lname.value}`
    console.log(bankname.value)
    axios.post('https://alvativetest-production.up.railway.app/v1/campaigns/receiver', {
        type: 'nuban',
        name: `${rname}`,
        account_number:`${accountname.value}`,
        bankname :`${bankname.value}`,
        currency:'NGN'
      })
      .then((response) => {
        console.log(response);
        alert(`you have succesfully added ${rname} as a beneficiary with a receipiant ID of ${JSON.stringify(response.data.rec)}`)
      }, (error) => {
        console.log(error);
        alert('please check the values you added')
      });

})

axios.get('https://alvativetest-production.up.railway.app/v1/campaigns/banks').then(resp => {

    console.log(resp.data.length);
    for(let i =0;i<resp.data.length;i++){
        const opt = document.createElement('option')
        opt.value = resp.data[i];
        opt.text = resp.data[i]
        bankname.add(opt,null)
    }

});