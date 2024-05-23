// // JavaScript file: form.js

// Function to create the form and append it to the HTML document
function createForm() {
  // Create the form element
  const form = document.createElement('form');
  form.id = 'studentDetailsForm';

  // Append the form to the body of the HTML document
  document.body.appendChild(form);

  // Call the function to create form fields and append them to the form
  createFormFields(form);
}

// Function to create form fields and append them to the form
function createFormFields(form) {
  // Student's Name
  const nameLabel = document.createElement('label');
  nameLabel.textContent = "Student's Name:";
  form.appendChild(nameLabel);

  const nameInput = document.createElement('input');
  nameInput.type = 'text';
  nameInput.id = 'studentName';
  nameInput.name = 'studentName';
  nameInput.required = true;
  form.appendChild(nameInput);

  // Contact No.
  const contactLabel = document.createElement('label');
  contactLabel.textContent = 'Contact No.:';
  form.appendChild(contactLabel);

  const contactInput = document.createElement('input');
  contactInput.type = 'tel';
  contactInput.id = 'contactNo';
  contactInput.name = 'contactNo';
  contactInput.required = true;
  form.appendChild(contactInput);

  // E-mail
  const emailLabel = document.createElement('label');
  emailLabel.textContent = 'E-mail:';
  form.appendChild(emailLabel);

  const emailInput = document.createElement('input');
  emailInput.type = 'email';
  emailInput.id = 'email';
  emailInput.name = 'email';
  emailInput.required = true;
  form.appendChild(emailInput);

  // Whatsapp No.
  const whatsappLabel = document.createElement('label');
  whatsappLabel.textContent = 'Whatsapp No.:';
  form.appendChild(whatsappLabel);

  const whatsappInput = document.createElement('input');
  whatsappInput.type = 'tel';
  whatsappInput.id = 'whatsappNo';
  whatsappInput.name = 'whatsappNo';
  whatsappInput.required = true;
  form.appendChild(whatsappInput);

  // Father's Name
  const fatherNameLabel = document.createElement('label');
  fatherNameLabel.textContent = "Father's Name:";
  form.appendChild(fatherNameLabel);

  const fatherNameInput = document.createElement('input');
  fatherNameInput.type = 'text';
  fatherNameInput.id = 'fatherName';
  fatherNameInput.name = 'fatherName';
  fatherNameInput.required = true;
  form.appendChild(fatherNameInput);

  // Address
  const addressLabel = document.createElement('label');
  addressLabel.textContent = 'Address:';
  form.appendChild(addressLabel);

  const addressInput = document.createElement('textarea');
  addressInput.id = 'address';
  addressInput.name = 'address';
  addressInput.required = true;
  form.appendChild(addressInput);

  // Course Selection
  const courseLabel = document.createElement('label');
  courseLabel.textContent = 'Course Selection:';
  form.appendChild(courseLabel);

  const courseSelect = document.createElement('select');
  courseSelect.id = 'courseSelection';
  courseSelect.name = 'courseSelection';
  courseSelect.required = true;

  const courseOptions = ['Select Course', 'Engineering', 'Medical', 'Business'];
  for (const option of courseOptions) {
      const optionElement = document.createElement('option');
      optionElement.value = option === 'Select Course' ? '' : option;
      optionElement.textContent = option;
      courseSelect.appendChild(optionElement);
  }

  form.appendChild(courseSelect);

  // NEET Score
  const neetLabel = document.createElement('label');
  neetLabel.textContent = 'NEET Score:';
  form.appendChild(neetLabel);

  const neetInput = document.createElement('input');
  neetInput.type = 'number';
  neetInput.id = 'neetScore';
  neetInput.name = 'neetScore';
  neetInput.required = true;
  form.appendChild(neetInput);

  // Submit Button
  const submitButton = document.createElement('button');
  submitButton.type = 'submit';
  submitButton.textContent = 'Submit';
  form.appendChild(submitButton);
}

// Call the createForm function to generate the form elements
createForm();

// Function to handle form submission
function submitForm(event) {
  event.preventDefault(); // Prevent the default form submission
  
  // Retrieve form data
  const formData = {
      studentName: document.getElementById('studentName').value,
      contactNo: document.getElementById('contactNo').value,
      email: document.getElementById('email').value,
      whatsappNo: document.getElementById('whatsappNo').value,
      fatherName: document.getElementById('fatherName').value,
      address: document.getElementById('address').value,
      courseSelection: document.getElementById('courseSelection').value,
      neetScore: document.getElementById('neetScore').value
  };
  
  // You can now do whatever you want with the formData object, like send it to a server
  
  // For demonstration, let's log the data to the console
  console.log(formData);
}

// Add event listener to the form
document.getElementById('studentDetailsForm').addEventListener('submit', submitForm);
