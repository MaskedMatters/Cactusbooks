const activatePledgeCheckbox = document.getElementById('activatePledge');
const testPledgeTextarea = document.getElementById('testPledge');

activatePledgeCheckbox.addEventListener('change', () => {
    if (activatePledgeCheckbox.checked) {
        testPledgeTextarea.disabled = false; 
    } else {
        testPledgeTextarea.disabled = true;
        testPledgeTextarea.value = ''; // Clear the value when disabled
    }
});