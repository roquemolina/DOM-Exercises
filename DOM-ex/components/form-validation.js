export default function formValidations() {
    let $form = document.querySelector('.form-validation'),
    $inputs = document.querySelectorAll(".form-validation *[required]");
    $inputs.forEach(e => {
        const $span = document.createElement('span');
        $span.id = e.name;
        $span.textContent = e.title;
        $span.classList.add('contact-form-error', 'none');
        e.insertAdjacentElement('afterend', $span);
    });

    document.addEventListener('keyup', e => {
        if(e.target.matches(".form-validation [required]")) {
            let $input = e.target,
            pattern = $input.pattern || $input.dataset.pattern;

            if(pattern && $input.value !== "") {
                let regex = new RegExp(pattern);
                return !regex.exec($input.value)
                ? document.getElementById($input.name).classList.add('is-active')
                : document.getElementById($input.name).classList.remove('is-active')
            }
            if(!pattern) {
                return $input.value === ""
                ? document.getElementById($input.name).classList.remove('is-active')
                : document.getElementById($input.name).classList.remove('is-active')

            }
        }
    });
    document.addEventListener('submit', e => {

        if(e.target.matches('.form-validation'))
        //e.preventDefault();
        window.alert('form enviado');
        let $loader = document.querySelector('.contact-form-loader'),
        $response = document.querySelector('.contact-form-response');

        $loader.classList.remove('none');

        //petition simulation
        setTimeout(() => {
            $loader.classList.add('none');
            $response.classList.remove('none');
            setTimeout(() => {
                $response.classList.add('none');
                $form.reset();
            }, 3000);
        }, 3000);


    })
}