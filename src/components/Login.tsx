import { useState } from "react";


export default function Login() {

    const [clickedButton, setClickedButton] = useState('');

    const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        const button: HTMLButtonElement = event.currentTarget;
        setClickedButton(button.name);
    };

    return (
        <>
            <div id="login-section" className="row login-section">
                <div className="wrapper">
                    <div className="icon-area">
                        <img src="./assets/images/icons8-laubbaum-96.png" alt="" />
                        <h1>TreeSearch</h1>
                    </div>
                    <div className="login-area">
                        <form id="loginform">
                            <input
                                id="username_id"
                                name="username"
                                type="text"
                                placeholder="Username"
                                maxLength={12}
                                required
                            />
                            <input
                                id="password_id"
                                name="password"
                                type="password"
                                placeholder="Password"
                                required
                            />
                            <button className="btn-login" type="button" onClick={ }>
                                Login
                            </button>
                        </form>
                    </div>
                </div>
            </div>

        </>
    );
}


const data = new FormData(loginform);
const value = Object.fromEntries(data.entries());
axios.post(API_URL + 'users', value, API_HEADER).then(response => {
    const data = response.data;
    console.log('data', data);

    if (data.isAdmin) {
        var button = document.getElementById("loc_button")
        button.style.display = "grid";
        var buttons = document.getElementsByClassName("update_button")
        for (var index = 0; index < buttons.length; index++) {
            buttons[index].style.display = "inline-block";
        }
    }

    loginSection.style.display = "none"
    mainSection.style.visibility = "visible"
    footer.style.position = "relative"
    footer.style.left = "0%"

    document.getElementById("welcomeMessage").innerHTML = value.username

}).catch(error => {
    alert("username or password aren't correct")
    console.error('On login error', error);
});