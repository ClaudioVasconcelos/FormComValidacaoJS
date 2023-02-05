const form = document.querySelector("#form");
const nameInput = document.querySelector("#nameInput");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const jobSelector = document.querySelector("#job");
const message = document.querySelector("#message");

const emptyValidation = () => {
	if (
		nameInput.value === "" ||
		emailInput.value === "" ||
		passwordInput.value === "" ||
        message.value === ""
	) {
		return alert(`Preencha todos os campos das informações corretamente.`);
	}
};

form.addEventListener("submit", (e) => {
	e.preventDefault();

	if (!isPasswordValid(passwordInput.value, 8)) {
		return alert(`Informe mais de 8 digitos na senha.`);
	}
	if (!validEmail(emailInput.value)) {
		console.log("erroCampo mail");
	}
	
        emptyValidation();
        form.submit();
})	


const isPasswordValid = (password, mindigits) => {
	if (password.length >= mindigits) {
		return true;
	}
	return;
};

const validEmail = (email) => {
	const emailRegex = new RegExp(
		/^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
	);
	if (emailRegex.test(email)) {
		return true;
	}
	return false;
};
