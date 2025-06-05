document.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const form = e.target;

    const data = {
        name: form.name.value,
        email: form.email.value,
        product: form.product.value,
        notes: form.notes.value
    };

    fetch('https://script.google.com/macros/s/AKfycbwxyz1234567890abcdefg/exec', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(response => {
        alert('Order submitted! Check your email for confirmation.');
        form.reset();
    })
    .catch(err => {
        console.error('Error:', err);
        alert('There was an issue submitting your order.');
    });
});
