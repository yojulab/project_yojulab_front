import{c as r,b as l,F as i,o as t,w as d,a as n,r as c}from"./index.3ec91c38.js";import{a as m}from"./index.becf6c0c.js";const p=l("h4",{class:"mb-3"},"\uD68C\uC6D0 \uAC00\uC785",-1),u=["onSubmit"],v=n('<div class="row g-3"><div class="col-12"><label for="username" class="form-label">Username</label><input type="username" class="form-control" id="username" placeholder="Username" required="" name="username"><div class="invalid-feedback">Your username is required.</div></div><div class="col-sm-6"><label for="password" class="form-label">Password</label><input type="text" class="form-control" id="password" placeholder="" value="" required="" name="password"><div class="invalid-feedback">Valid first name is required.</div></div><div class="col-sm-6"><label for="password2" class="form-label">Password2</label><input type="text" class="form-control" id="password2" placeholder="" value="" required="" name="password2"><div class="invalid-feedback">Valid last name is required.</div></div><div class="col-12"><label for="email" class="form-label">Email</label><div class="input-group has-validation"><span class="input-group-text">@</span><input type="email" class="form-control" id="email" placeholder="you@example.com" required="" name="email"><div class="invalid-feedback"> Please enter a valid email address for shipping updates. </div></div></div></div><hr class="my-4"><button class="btn btn-primary">\uAC00\uC785\uD558\uAE30</button>',3),f=[v],w={__name:"UserRegister",setup(b){function o(s){const e=new FormData(s.target);console.log({...e}),m.post("http://127.0.0.1:8000/users/register/",e).then(a=>{a.status=="201"&&c.replace({name:"UserLogin"})}).catch(a=>{console.log(a)}).finally(()=>{console.log("Perform action in always!")})}return(s,e)=>(t(),r(i,null,[p,l("form",{class:"needs-validation",novalidate:"",onSubmit:d(o,["prevent"])},f,40,u)],64))}};export{w as default};
