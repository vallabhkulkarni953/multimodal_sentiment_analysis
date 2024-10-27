function toggleInputFields() {
    const dataType = document.getElementById('dataType').value;
    const textInput = document.getElementById('textInput');
    const audioInput = document.getElementById('audioInput');
    
    textInput.style.display = 'none'; // Hide both by default
    audioInput.style.display = 'none';
    
    if (dataType === 'text') {
        textInput.style.display = 'block'; // Show text input
    } else if (dataType === 'audio') {
        audioInput.style.display = 'block'; // Show audio input
    }
}
