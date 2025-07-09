          window.addEventListener('resize', () => {
              console.log(window.innerWidth);
              const options = document.querySelectorAll('.dropdown-option');
              const untoggledHeight = options[0].offsetHeight;
              console.log('untoggled height is:'+ untoggledHeight)
              const toggledHeight = (options.length) * untoggledHeight;
              console.log('toggled height is:'+ toggledHeight)
              const dropDown = document.querySelector('.custom-dropdown');
              const dropDownToggled = document.querySelector('.custom-dropdown-toggled');

              if(dropDown){
                  dropDown.style.height = `${untoggledHeight}px`;
              }else if(dropDownToggled){
                  dropDownToggled.style.height = `${toggledHeight}px`;
              }
              
            });




        if (!document.querySelector('.picked-service')){
            const service1 = document.querySelector('.service-pick-option1')
            service1.classList.add('picked-service')
            const dropDown = service1.querySelector('.dropdown-icon');
            dropDown.classList.replace('dropdown-icon' , 'dropdown-icon-on')

            const service1Container = document.querySelector('.service1-based-container');
            service1Container.classList.replace('service-based-container-off' , 'service-based-container-on');
        };


        
    
        function serviceSelection(clickedService , itsContainer){

        const previousPicked = document.querySelector('.picked-service');
        const previousDropDown = previousPicked.querySelector('.dropdown-icon-on');
        previousDropDown.classList.replace('dropdown-icon-on' , 'dropdown-icon')
        previousPicked.classList.remove('picked-service');
        const previousContainer = document.querySelector('.service-based-container-on');
        previousContainer.classList.replace('service-based-container-on' , 'service-based-container-off')
        clickedService.classList.add('picked-service');
        const dropDown = clickedService.querySelector('.dropdown-icon');
        dropDown.classList.replace('dropdown-icon' , 'dropdown-icon-on')
        

        itsContainer.classList.replace('service-based-container-off' , 'service-based-container-on')
            
    
        if(document.querySelector('.service-pick-toggled')){
            const servicePick = document.querySelector('.service-pick-toggled');
            servicePick.classList.replace('service-pick-toggled' , 'service-pick');
            dropDown.style.transform = 'rotate(0deg)';
            // Select the element with class 'service-pick-title'
            const servicePickTitle = document.querySelector('.service-pick-title');

            if (servicePickTitle) {
              // Add the 'service-pick-title-valid' class
              servicePickTitle.classList.add('service-pick-title-valid');

              // Optionally, remove the old class if needed
               servicePickTitle.classList.remove('service-pick-title');
            }
        }else if (!document.querySelector('.service-pick-toggled')){
            const servicePick = document.querySelector('.service-pick');
            servicePick.classList.replace('service-pick' , 'service-pick-toggled');
            dropDown.style.transform = 'rotate(180deg)';

            const servicePickTitle = document.querySelector('.service-pick-title-valid');


            // Add the 'service-pick-title-valid' class
            servicePickTitle.classList.add('service-pick-title');

            // Optionally, remove the old class if needed
            servicePickTitle.classList.remove('service-pick-title-valid');
        }
    ;
    };



const inputElementName = document.querySelector('.fullname-input');
const label = document.querySelector('.fullname-input-label');

let isFocused = false;

if (inputElementName && label) {
  // When input gains focus
  inputElementName.addEventListener('focus', () => {
    isFocused = true;
    label.classList.remove('label-off');
    label.classList.add('fullname-input-label-on');
  });

  // When input loses focus
  inputElementName.addEventListener('blur', () => {
    isFocused = false;
    // Show label only if there's content
    if (inputElementName.value.length === 0) {
      label.classList.remove('fullname-input-label-on');
      label.classList.add('label-off');
    }
  });

  // When input content changes
  inputElementName.addEventListener('input', () => {
    if (inputElementName.value.length > 0 || isFocused) {
      label.classList.remove('label-off');
      label.classList.add('fullname-input-label-on');
    } else {
      // No content and not focused
      label.classList.remove('fullname-input-label-on');
      label.classList.add('label-off');
    }
  });
}


// Full Name input and label
const nameInput = document.querySelector('.fullname-input');
const nameLabel = document.querySelector('.fullname-input-label');

let nameIsFocused = false;

if (nameInput && nameLabel) {
  nameInput.addEventListener('focus', () => {
    nameIsFocused = true;
    nameLabel.classList.remove('label-off');
    nameLabel.classList.add('fullname-input-label-on');
  });

  nameInput.addEventListener('blur', () => {
    nameIsFocused = false;
    if (nameInput.value.length === 0) {
      nameLabel.classList.remove('fullname-input-label-on');
      nameLabel.classList.add('label-off');
    }
  });

  nameInput.addEventListener('input', () => {
    if (nameInput.value.length > 0 || nameIsFocused) {
      nameLabel.classList.remove('label-off');
      nameLabel.classList.add('fullname-input-label-on');
    } else {
      nameLabel.classList.remove('fullname-input-label-on');
      nameLabel.classList.add('label-off');
    }
  });
}

function setupFloatingLabel(inputSelector, labelSelector, activeClass, hiddenClass) {
  const inputEl = document.querySelector(inputSelector);
  const labelEl = document.querySelector(labelSelector);
  let isFocused = false;

  if (inputEl && labelEl) {
    inputEl.addEventListener('focus', () => {
      isFocused = true;
      labelEl.classList.remove(hiddenClass);
      labelEl.classList.add(activeClass);
    });

    inputEl.addEventListener('blur', () => {
      isFocused = false;
      if (inputEl.value.length === 0) {
        labelEl.classList.remove(activeClass);
        labelEl.classList.add(hiddenClass);
      }
    });

    inputEl.addEventListener('input', () => {
      if (inputEl.value.length > 0 || isFocused) {
        labelEl.classList.remove(hiddenClass);
        labelEl.classList.add(activeClass);
      } else {
        labelEl.classList.remove(activeClass);
        labelEl.classList.add(hiddenClass);
      }
    });
  }
}

setupFloatingLabel('.fullname-input' , '.fullname-input-label' ,     'fullname-input-label-on' ,'label-off');
setupFloatingLabel('.place-of-occasion-input' , '.place-of-occasion-input-label' ,     'place-of-occasion-input-label-on' ,'label-off');   
setupFloatingLabel('.brand-name-input' , '.brand-name-input-label' , '.brand-name-input-on' , '.brand-name-input-off' );




 function optionCreation(...options){
            const optionsContainer = document.querySelector('.custom-dropdown')
            let count = 1;
           

            options.forEach((option)=>{
                const optionStructure = `<div class='custom-dropdown-option${count} dropdown-option' onclick=" let option = document.querySelector('.custom-dropdown-option${count}'); optionSelection(option);"> <div class='option1-items-container'> ${option} </div> <img src='ImagesFolder/dropdown-icon.svg' class='dropdown-icon'> </div>`
                optionsContainer.innerHTML += optionStructure
                count ++

                console.log(optionsContainer);

            })
        };


        optionCreation('Under 50', '51-100' , '101-200' , '200-300 or more');

    

        if (!document.querySelector('.picked-option')){
            const option1 = document.querySelector('.custom-dropdown-option1')
            option1.classList.add('picked-option')
            const dropDown = option1.querySelector('.dropdown-icon');
            dropDown.classList.replace('dropdown-icon' , 'dropdown-icon-on')
        };



    
    
        function optionSelection(clickedoption){

        

        const previousPicked = document.querySelector('.picked-option');
        const previousDropDown = previousPicked.querySelector('.dropdown-icon-on');
        previousDropDown.classList.replace('dropdown-icon-on' , 'dropdown-icon')
        previousPicked.classList.remove('picked-option');
   
        clickedoption.classList.add('picked-option');
        const dropDown = clickedoption.querySelector('.dropdown-icon');
        dropDown.classList.replace('dropdown-icon' , 'dropdown-icon-on')
        

            
    
        if(document.querySelector('.custom-dropdown-toggled')){
            const optionPick = document.querySelector('.custom-dropdown-toggled');
            optionPick.classList.replace('custom-dropdown-toggled' , 'custom-dropdown');
            dropDown.style.transform = 'rotate(0deg)';
            const dropDownTitle = document.querySelector('.custom-dropdown-title');
            dropDownTitle.classList.replace('custom-dropdown-title' , 'custom-dropdown-title-valid');
        }else if (!document.querySelector('.custom-dropdown-toggled')){
            const optionPick = document.querySelector('.custom-dropdown');
            optionPick.classList.replace('custom-dropdown' , 'custom-dropdown-toggled');
            dropDown.style.transform = 'rotate(180deg)';
                        const dropDownTitle = document.querySelector('.custom-dropdown-title-valid');
            dropDownTitle.classList.replace('custom-dropdown-title-valid' , 'custom-dropdown-title');
        }

        const options = document.querySelectorAll('.dropdown-option');
        const untoggledHeight = options[0].offsetHeight;
        console.log('untoggled height is:'+ untoggledHeight)
        const toggledHeight = (options.length) * untoggledHeight;
        console.log('toggled height is:'+ toggledHeight)
        const dropDownElement = document.querySelector('.custom-dropdown');
        const dropDownElementToggled = document.querySelector('.custom-dropdown-toggled');

        if(dropDownElement){
                  dropDownElement.style.height = `${untoggledHeight}px`;
        }else if(dropDownElementToggled){
                  dropDownElementToggled.style.height = `${toggledHeight}px`;
        }
              
    ;
    };



    










    //Calendar Js:
function toggleCalendar(){
        const calendar = document.querySelector('.booking-calendar-off');
        calendar.classList.replace('booking-calendar-off' , 'booking-calendar-on');

    };

function currentDate(){    const currentDate = new Date();

    const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];

    const monthName = monthNames[currentDate.getMonth()]; // getMonth() returns 0-11
    const day = currentDate.getDate();
    const year = currentDate.getFullYear();
    const calendarButton = document.querySelector('.booking-calendar-button');

    if (day == 1 || day == 31){
        const superscript = 'st';
        calendarButton.innerHTML = `<div class = 'date-text-container'> <strong> </strong> ${monthName} ${day}${superscript} 2025</div>`;

      }else if (day == 2){
        const superscript = 'nd';
        calendarButton.innerHTML = `<div class = 'date-text-container'> <strong> </strong> ${monthName} ${day}${superscript} 2025</div>`;
      }else if(day == 3){
        const superscript = 'rd'
        calendarButton.innerHTML = `<div class = 'date-text-container'> <strong> </strong> ${monthName} ${day}${superscript} 2025</div>`;
      }else {
        const superscript = 'th'
        calendarButton.innerHTML = `<div class = 'date-text-container'> <strong> </strong> ${monthName} ${day}${superscript} 2025</div>`;
      };

    }
    currentDate();

    

function currentDay(){    
    
const currentDate = new Date();

const daysOfWeek = [
  "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
];

const dayOfWeek = daysOfWeek[currentDate.getDay()];

    const calendarButton = document.querySelector('.booking-calendar-button');
    const calendarButtonWD = calendarButton.querySelector('strong');
    calendarButtonWD.innerHTML = `${dayOfWeek}`;

};


currentDay();




document.addEventListener('DOMContentLoaded', () => {
  // Select all elements with the class 'days'
  const daysElements = document.querySelectorAll('.days');

  daysElements.forEach(element => {
    element.addEventListener('click', () => {
      // Get the data attributes
      const dayOfWeek = element.getAttribute('data-day');
      const month = element.getAttribute('data-month');
      const innerText = element.innerText;

      // Log in the specified format
      const calendarButton = document.querySelector('.booking-calendar-button');
      if (innerText == 1 || innerText == 31){
        const superscript = 'st';
        calendarButton.innerHTML = `<div class = 'date-text-container'> <strong> </strong> ${month} ${innerText}${superscript} 2025</div>`;

      }else if (innerText == 2){
        const superscript = 'nd';
        calendarButton.innerHTML = `<div class = 'date-text-container'> <strong> </strong> ${month} ${innerText}${superscript} 2025</div>`;
      }else if(innerText == 3){
        const superscript = 'rd'
        calendarButton.innerHTML = `<div class = 'date-text-container'> <strong> </strong> ${month} ${innerText}${superscript} 2025</div>`;
      }else {
        const superscript = 'th'
        calendarButton.innerHTML = `<div class = 'date-text-container'> <strong> </strong> ${month} ${innerText}${superscript} 2025</div>`;
      };
      const calendarButtonWD = calendarButton.querySelector('strong');
      calendarButtonWD.innerHTML = `${dayOfWeek}`;

        const calendar = document.querySelector('.booking-calendar-on');
        calendar.classList.replace('booking-calendar-on' , 'booking-calendar-off');
    });
  });
});

let hours = '';
let minutesStr = '';
let ampm = '';


const bookingTimeInput = document.querySelector('.booking-time-input');
bookingTimeInput.innerText = `${hours}:${minutesStr} ${ampm} `;


function getCurrentTimeRounded() {
  const now = new Date();
  hours = now.getHours();
  minutes = now.getMinutes();

  // Round minutes to the nearest multiple of 15
  minutes = Math.round(minutes / 15) * 15;

  // Handle case when minutes round up to 60
  if (minutes === 60) {
    minutes = 0;
    hours += 1;
  }

  // Convert to 12-hour format
  ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'

  // Format minutes as '00', '15', '30', or '45'
  minutesStr = minutes === 0 ? '00' : minutes.toString();

  bookingTimeInput.innerText = `${hours}:${minutesStr} ${ampm} `;
};


getCurrentTimeRounded();





function timePickerToggle(){  
    const timePicker = document.querySelector('.time-pick-container');
    timePicker.classList.replace('time-pick-container', 'time-pick-container-on');    
  };



      let hourValue = '';
      let minuteValue = '';
      let periodValue = '';



function timeValuePick(button, type) {
  // Remove active class from previous
  const previous = document.querySelector(`.${type}-button.active`);
  if (previous) {
    previous.classList.remove('active');
  }
  // Add active class to clicked button
  button.classList.add('active');

  // Get the value
  const value = button.getAttribute('data-value');

  // Store in variables
  if (type === 'hour') {
    hours = value;
  } else if (type === 'minute') {
    minutesStr = value;
  } else if (type === 'period') {
    ampm = value;
  }

  console.log(hours, minutesStr, ampm);
  bookingTimeInput.innerText = `${hours}:${minutesStr} ${ampm} `;

};

document.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelectorAll('.fullname-input, .place-of-occasion-input');

  inputs.forEach(input => {
    // Create container for custom messages
    const messageContainer = document.createElement('div');
    messageContainer.className = 'error-messages';
    input.parentNode.insertBefore(messageContainer, input.nextSibling);

    // Prevent default validation bubbles
    input.addEventListener('invalid', (e) => {
      e.preventDefault();

      // Clear previous messages
      messageContainer.innerHTML = '';

      // Check for required
      if (input.required && !input.value.trim()) {
        messageContainer.innerHTML = `
          <p class="custom-error-message required">
            <img src="warning.png" class="warning">
            This is a required field, kindly complete it to continue.
          </p>
        `;
      } else {
        // Check for invalid data based on class
        if (input.classList.contains('fullname-input')) {
          // Validate only letters
          const regex = /^[A-Za-z\s]+$/;
          if (input.value && !regex.test(input.value.trim())) {
            messageContainer.innerHTML = `
              <p class="custom-error-message invalid">
                <img src="warning.png" class="warning">
                Kindly, make sure you enter the right data (Letters only).
              </p>
            `;
          }
        }
        // You can add other class-based validations here
      }
    });

    // Add real-time validation feedback
    input.addEventListener('input', () => {
      // Clear previous messages
      messageContainer.innerHTML = '';

      if (input.classList.contains('fullname-input')) {
        const val = input.value;
        const hasNumber = /\d/.test(val);
        const hasLetter = /[A-Za-z]/.test(val);

        // Show message if a number is entered
        if (hasNumber) {
          messageContainer.innerHTML = `
            <p class="custom-error-message invalid">
              <img src="warning.png" class="warning">
              Invalid input: Numbers are not allowed.
            </p>
          `;
        }
        // Optionally, show "Letter detected" message or handle other logic here
      }

      if (input.classList.contains('place-of-occasion-input')) {
        const val = input.value;
        const hasLetter = /[A-Za-z]/.test(val);
        // For this input, no need to show error for numbers
        if (hasLetter) {
          // You can add visual feedback if needed
        }
      }
    });
  });
});


function monitorTyping(inputClassName, typingMessage, emptyMessage, numberMessage , wrapperClass , validClass , invalidClass) {
  let timer; // Variable to store the timeout ID

  const inputElement = document.querySelector(inputClassName);

  if (!inputElement) {
    console.error(`Element with class "${inputClassName}" not found.`);
    return; // Exit if element not found
  }

  inputElement.addEventListener('input', () => {
    clearTimeout(timer); // Clear any existing timeout

    // Check if the input is empty
    if (inputElement.value === "") {
        console.log(emptyMessage);
        const wrapper = document.querySelector(`${wrapperClass}`);
        wrapper.classList.replace(`${validClass}` , `${invalidClass}`);
        return; // Don't proceed if empty
    }

    // Check if the input contains only numbers (crucial for robustness)
    // Check if the input contains any number anywhere in the string
    if (/\d/.test(inputElement.value)) {
        const wrapper = document.querySelector(`${wrapperClass}`);
        wrapper.classList.replace(`${validClass}` , `${invalidClass}`);
      return; // Exit if any digit is found
    };

    timer = setTimeout(() => {
      console.log(typingMessage);
      const wrapper = document.querySelector(`${wrapperClass}`)
      wrapper.classList.replace(`${invalidClass}`, `${validClass}`);
    }, 500); // 500ms delay before logging "typing..."
  });

    // Important: Add an event listener for the 'focus' and 'blur' events
  inputElement.addEventListener('focus', () => {
    clearTimeout(timer); // Clear any existing timeout on focus
  });
  inputElement.addEventListener('blur', () => {
      clearTimeout(timer); // Clear any existing timeout on blur
  });
}


// Example Usage (replace with your actual class name and messages):

monitorTyping('.fullname-input', 'typing...', 'Input is empty', 'Number detected' , '.fullname-wrapper' , 'input-wrapper-valid' , 'input-wrapper');


// Example usage with more realistic messages and class name:
// monitorTyping('.my-input-field', 'User is typing...', 'Input is empty', 'Numbers detected in input');


// Example HTML (replace with your actual HTML)
// <input type="text" class="fullname-input">

monitorTyping('.place-of-occasion-input' , 'typing...' , 'Input is empty' , 'Number detected' , '.place-of-occasion-wrapper' , 'input-wrapper-valid' , 'input-wrapper');













        function optionSelectionNOP(clickedoption){

        

        const previousPicked = document.querySelector('.picked-option');
        const previousDropDown = previousPicked.querySelector('.dropdown-icon-on');
        previousDropDown.classList.replace('dropdown-icon-on' , 'dropdown-icon')
        previousPicked.classList.remove('picked-option');
   
        clickedoption.classList.add('picked-option');
        const dropDown = clickedoption.querySelector('.dropdown-icon');
        dropDown.classList.replace('dropdown-icon' , 'dropdown-icon-on')
        

            
    
        if(document.querySelector('.number-of-products-toggled')){
            const optionPick = document.querySelector('.number-of-products-toggled');
            optionPick.classList.replace('number-of-products-toggled' , 'number-of-products');
            dropDown.style.transform = 'rotate(0deg)';
        }else if (!document.querySelector('.number-of-products-toggled')){
            const optionPick = document.querySelector('.number-of-products');
            optionPick.classList.replace('number-of-products' , 'number-of-products-toggled');
            dropDown.style.transform = 'rotate(180deg)';
        }


    ;
    };



//Replace function & Variable Names

function insertParameter(...params) {
    params.forEach((param, index) => {
        console.log(`Parameter ${index + 1}:`, param);
    });
};
        function optionCreationNOP(...options){
            const optionsContainer = document.querySelector('.number-of-products')
            let count = 1
           

            options.forEach((option)=>{
                const optionStructure = `<div class='number-of-products-option${count}' onclick=" let option = document.querySelector('.number-of-products-option${count}'); optionSelectionNOP(option);"> <div class='option1-items-container'> ${option} </div> <img src='ImagesFolder/dropdown-icon.svg' class='dropdown-icon'> </div>`
                optionsContainer.innerHTML += optionStructure
                count ++
                console.log(optionsContainer);

            })
            
        };

        function changeCSSVariableNOP(variableName, newValue) {
        document.documentElement.style.setProperty(variableName, newValue);
        }


        optionCreationNOP('1-2 Products', '3-5 Products' , '6-10 Products' , 'More Than 10');

    if (!document.querySelector('.number-of-products').querySelector('.picked-option')){






            const NOP = document.querySelector('.number-of-products');
            const option1 = NOP.querySelector('.number-of-products-option1');
            option1.classList.add('picked-option');
            const dropDown = option1.querySelector('.dropdown-icon');
            dropDown.classList.replace('dropdown-icon' , 'dropdown-icon-on');
};



if (!document.querySelector('.number-of-products').querySelector('picked-option')){
            const NOP = document.querySelector('.number-of-products')
            const option1 = NOP.querySelector('number-of-products-option1')
            option1.classList.add('picked-option')
            const dropDown = option1.querySelector('.dropdown-icon');
            dropDown.classList.replace('dropdown-icon' , 'dropdown-icon-on')
};


    
    













