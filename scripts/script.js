const storageType = localStorage;
const consentPropertyName = "Lysannescorner_consent";

const shouldShowPopup = () => storageType.getItem(consentPropertyName);
const saveToStorage = () => storageType.setItem(consentPropertyName, true);

window.onload = () => {
  if (shouldShowPopup()) {
    const consent = confirm("Agree to the terms and conditions of this site?");
    if (consent) {
      saveToStorage();
    }
  }
};
