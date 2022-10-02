const inputs = document.querySelectorAll('.controls input');

console.log(inputs);

function handleUpdate() {
    // console.log(this.value);
    // this/binding can only be used in a function delcaration not an arrow function!
    const suffix = this.dataset.sizing || '';
    // console.log(suffix);
    // console.log(this.name);
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
