/* import * as cookie from 'cookie'
import ky from 'ky'


await ky.get('http://localhost:8000/sanctum/csrf-cookie')


try {
    const cookies=cookie.parse(document.cookie);

    const formData = new FormData();
    formData.append('email', 'doe@doe.com');
    formData.append('password', 'doe2');

    const data=await ky.post('http://localhost:8000/login',
        {
            headers:{
                accept:"application/json",
                "X-XSRF-TOKEN":cookies['XSRF-TOKEN']
            },
            body:formData
           
        }
    ).json()
    
    console.log(data);


} catch (error) {
    console.log(error);
	if (error.name === 'HTTPError') {
		const errorJson = await error.response.json();
	}
}
 */


 /* .then(async (r)=> {
    
    const res=await ky.post('http://localhost:8000/login',
        {
            headers:{
                accept:"application/json"
            }
           
        }
    ).json()

}) */
//console.log(data);

/*  hooks: {
		beforeRequest: [
			request => {
				console.log(request);
			}
		]
	} */