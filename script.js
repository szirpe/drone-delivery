const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwxyz1234567890abcdefg/exec';

document.getElementById('orderForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const form = e.target;

    const data = {
        name: form.name.value,
        email: form.email.value,
        location: form.location.value,
        item: form.item.value,
        notes: form.notes.value
    };

    if (APPS_SCRIPT_URL === 'YOUR_APPS_SCRIPT_URL') {
        alert('Please set your Apps Script URL in script.js');
        return;
    }

    try {
        const res = await fetch(APPS_SCRIPT_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!res.ok) {
            throw new Error('HTTP ' + res.status);
        }

        await res.json();
        alert('Order submitted! Check your email for confirmation.');
        form.reset();
    } catch (err) {
        console.error('Submission error:', err);
        alert('There was an issue submitting your order.');
    }
});
